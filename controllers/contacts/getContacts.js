import repositoryContacts from "../../repository/contacts";
import { HttpCode } from "../../lib/contacts";

export const getContacts = async (req, res, next) => {
  const contacts = await repositoryContacts.listContacts(req.query);
  res
    .status(HttpCode.OK)
    .json({ status: "success", code: HttpCode.OK, data: { contacts } });
};
