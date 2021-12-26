import model from "../../model/index";

export const addContact = async (req, res, next) => {
  const newContact = await model.addContact(req.body);
  res.status(201).json(newContact);
};
