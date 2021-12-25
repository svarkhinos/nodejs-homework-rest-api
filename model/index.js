import fs from "fs/promises";
import path, { dirname } from "path";
import { randomUUID } from "crypto";
import contacts from "./contacts.json";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listContacts = async () => {
  return contacts;
};

const getContactById = async (contactId) => {
  const [result] = contacts.filter((contact) => contact.id === contactId);
  return result;
};

const removeContact = async (contactId) => {
  const indexContactDelete = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (indexContactDelete !== -1) {
    const [result] = contacts.splice(indexContactDelete, 1);

    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(contacts, null, 2)
    );
    return result;
  }
  return null;
};

const addContact = async ({ name, email, phone }) => {
  const newContact = { name, email, phone, id: randomUUID() };

  contacts.push(newContact);

  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
};

const updateContact = async (contactId, body) => {
  const indexContactUpdate = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (indexContactUpdate !== -1) {
    const updatedContact = {
      id: contactId,
      ...contacts[indexContactUpdate],
      ...body,
    };
    contacts[indexContactUpdate] = updatedContact;

    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(contacts, null, 2)
    );
    return updatedContact;
  }
  return null;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
