import Transaction from "../models/TransactionModel.js";

const TransactionController = {
  postTransactionData: async (req, res) => {
    try {
      const { amount, description, date } = req.body;
      const transaction = new Transaction({
        amount,
        description,
        user_id: req.user._id,
        date,
      });
      await transaction.save();
      return res.status(201).send("Transaction Data Added Successfully!");
    } catch (err) {
      return res
        .status(500)
        .send(
          "Error occured while adding a new Transaction! Please try again later."
        );
    }
  },

  getTransactionData: async (req, res) => {
    try {
      const transactionData = await Transaction.find({
        user_id: req.user._id,
      }).sort({
        createdAt: -1,
      });
      //
      const demo = await Transaction.aggregate([
        {
          $match: { user_id: req.user._id },
        },
        {
          $group: {
            _id: { $month: "$date" },
            transactions: {
              $push: {
                amount: "$amount",
                description: "$description",
                date: "$date",
              },
            },
            totalExpenses: { $sum: "$amount" },
          },
        },
        { $sort: { _id: 1 } },
      ]);
      //
      return res.status(200).json({
        data: transactionData,
        monthlyExpense: demo,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Get Transaction Data Error",
        error: err.message,
      });
    }
  },

  deleteSingleTransaction: async (req, res) => {
    try {
      await Transaction.findByIdAndDelete({ _id: req.params.id });
      return res.status(200).json({
        message: "Single Transaction Deleted Successfully!",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Delete Single Transaction Error",
        error: err.message,
      });
    }
  },

  updateSingleTransaction: async (req, res) => {
    try {
      await Transaction.findByIdAndUpdate(req.params.id, { $set: req.body });
      return res.status(200).send("Single Transaction Updated Successfully!");
    } catch (err) {
      return res.status(500).json({
        message: "Update Single Transaction Error",
        error: err.message,
      });
    }
  },
};

export default TransactionController;
