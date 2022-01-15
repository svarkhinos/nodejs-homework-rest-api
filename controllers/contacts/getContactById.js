import repositoryContacts from "../../repository/contacts";
import { HttpCode } from "../../lib/contacts";

export const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const contact = await repositoryContacts.getContactById(id);
  if (contact) {
    return res
      .status(HttpCode.OK)
      .json({ status: "success", code: HttpCode.OK, data: { contact } });
  }
  res
    .status(HttpCode.NOT_FOUND)
    .json({ status: "error", code: HttpCode.NOT_FOUND, message: "Not found" });
};
