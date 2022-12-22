import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  amount: {
    type: Number,
  },
  description: {
    type: String,
  },
  user_id: mongoose.Types.ObjectId,
  category_id: mongoose.Types.ObjectId,
  date: {
    type: Date,
    default: new Date(),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
