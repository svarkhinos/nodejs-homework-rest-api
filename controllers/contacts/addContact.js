import repositoryContacts from "../../repository/contacts";
import { HttpCode } from "../../lib/contacts";

export const addContact = async (req, res, next) => {
  const newContact = await repositoryContacts.addContact(req.body);
  res
    .status(HttpCode.CREATED)
    .json({ status: "success", code: HttpCode.OK, data: { newContact } });
};
