import express from "express";
import {
  getContacts,
  getContactById,
  deleteContact,
  updateContact,
  addContact,
} from "../../controllers/contacts";
import { validateCreate, validateUpdate, validateId } from "./validation";

const router = express.Router();

router.get("/", getContacts);

router.get("/:id", validateId, getContactById);

router.post("/", validateCreate, addContact);

router.delete("/:id", deleteContact);

router.put("/:id", validateUpdate, updateContact);

export default router;
