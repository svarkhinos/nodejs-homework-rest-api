import express from "express";
import {
  getContacts,
  getContactById,
  deleteContact,
  updateContact,
  addContact,
} from "../../../controllers/contacts";
import {
  validateCreate,
  validateUpdate,
  validateId,
  validateUpdateFavorite,
  validateQuery,
} from "./validation";
import guard from "../../../middlewares/guard";

const router = express.Router();

router.get("/", guard, validateQuery, getContacts);

router.get("/:id", [guard, validateId], getContactById);

router.post("/", [guard, validateCreate], addContact);

router.delete("/:id", [guard, validateId], deleteContact);

router.put("/:id", [guard, validateId, validateUpdate], updateContact);

router.patch(
  "/:id/favorite",
  [guard, validateId, validateUpdateFavorite],
  updateContact
);

export default router;
