import express from 'express';
import {getUsers,postUser,getOneuser,deleteUser,updateUser} from '../controller/user.js';
const router=express.Router();

router.get("/",getUsers);
router.post("/",postUser);
router.get("/:id",getOneuser);
router.delete("/:id",deleteUser);
router.patch("/:id",updateUser);
export default router;