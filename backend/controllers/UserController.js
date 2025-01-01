const userController = {
  authUser: (req, res) => {
    res.json({ user: req.user });
  },
};

export default userController;
