const {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserId,
  login,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/user");

const router = require("express").Router();

router.post("/user", addUser);
router.get("/user",isAuthenticated, getAllUsers);
router.get("/user/:id", isAuthenticated, getUserId);
router.put("/user/:id", isAuthenticated, updateUser);
router.post("/login",login);

// router.delete("/user/:id",deleteUser);

module.exports = router;
