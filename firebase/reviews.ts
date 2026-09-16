import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { app } from "./firebaseConfig";

import type { Review } from "@/types/review";

/* =========================================================
   FIRESTORE
========================================================= */

const db = getFirestore(app);

/* =========================================================
   CONSTANTS
========================================================= */

const REFERENCE_CODE_COLLECTION = "referCode";
const REFERENCE_CODE_DOCUMENT = "reference code";
const REVIEWS_COLLECTION = "reviews";

/* =========================================================
   VERIFY PROJECT CODE
========================================================= */

export async function verifyReviewCode(
  enteredCode: string
): Promise<boolean> {
  try {
    const codeRef = doc(
      db,
      REFERENCE_CODE_COLLECTION,
      REFERENCE_CODE_DOCUMENT
    );

    const codeSnapshot = await getDoc(codeRef);

    if (!codeSnapshot.exists()) {
      return false;
    }

    const data = codeSnapshot.data();

    const storedCode = String(data.key ?? "")
      .trim()
      .toLowerCase();

    const userCode = enteredCode.trim().toLowerCase();

    return storedCode.length > 0 && storedCode === userCode;
  } catch (error) {
    console.error("Error verifying review code:", error);
    return false;
  }
}

/* =========================================================
   SUBMIT REVIEW
========================================================= */

type SubmitReviewData = {
  email: string;
  rating: number;
  review: string;
  projectCode: string;
};

export async function submitReview(
  data: SubmitReviewData
): Promise<string> {
  /* -------------------------------------------------------
     Verify project code before saving
  ------------------------------------------------------- */

  const isVerified = await verifyReviewCode(data.projectCode);

  if (!isVerified) {
    throw new Error("Invalid project verification code.");
  }

  /* -------------------------------------------------------
     Basic validation
  ------------------------------------------------------- */

  const email = data.email.trim();
  const review = data.review.trim();
  const projectCode = data.projectCode.trim();

  if (!email) {
    throw new Error("Email is required.");
  }

  if (!review) {
    throw new Error("Review is required.");
  }

  if (data.rating < 1 || data.rating > 5) {
    throw new Error("Rating must be between 1 and 5.");
  }

  if (!projectCode) {
    throw new Error("Project verification code is required.");
  }

  /* -------------------------------------------------------
     Save review to Firestore
  ------------------------------------------------------- */

  const reviewRef = await addDoc(collection(db, REVIEWS_COLLECTION), {
    email,
    rating: data.rating,
    review,
    projectCode,
    verified: true,
    approved: false,
    createdAt: serverTimestamp(),
  });

  return reviewRef.id;
}

/* =========================================================
   GET APPROVED REVIEWS
========================================================= */

export async function getApprovedReviews(): Promise<Review[]> {
  try {
    const reviewsQuery = query(
      collection(db, REVIEWS_COLLECTION),
      where("approved", "==", true),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(reviewsQuery);

    return snapshot.docs.map((reviewDoc) => ({
      id: reviewDoc.id,
      ...(reviewDoc.data() as Omit<Review, "id">),
    }));
  } catch (error) {
    console.error("Error fetching approved reviews:", error);

    return [];
  }
}