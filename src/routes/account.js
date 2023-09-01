import express from "express";
const router = express.Router();
import {
  createAccount,
  resolveAccount,
  fetchAllAccounts,
} from "../controllers/accountController.js";

router.post("/", createAccount);
router.get("/:accountNumber", resolveAccount);
router.get("/get/all", fetchAllAccounts);

export default router;
