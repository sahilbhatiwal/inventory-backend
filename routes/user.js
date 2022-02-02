const { addUser, getAllUsers, updateUser, deleteUser, getUserId } = require('../controllers/user');

const router = require('express').Router();

router.post("/user",addUser);
router.get("/user",getAllUsers);
router.get("/user/:id",getUserId);
router.put("/user/:id",updateUser);
// router.delete("/user/:id",deleteUser);

module.exports = router;