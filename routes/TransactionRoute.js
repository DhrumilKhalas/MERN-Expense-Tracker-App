import express from "express";
import passport from "passport";
const transactionRouter = express.Router();
import TransactionController from "../controllers/TransactionController.js";

transactionRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  TransactionController.postTransactionData
);
transactionRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  TransactionController.getTransactionData
);
transactionRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  TransactionController.deleteSingleTransaction
);
transactionRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  TransactionController.updateSingleTransaction
);

export default transactionRouter;
