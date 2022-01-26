import Joi from "joi";

const createSchema = Joi.object({
  email: Joi.string().email().required(),
  // eslint-disable-next-line prefer-regex-literals
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const validateCreateUser = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body);
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Field ${err.message.replace(/"/g, "")}` });
  }
  next();
};
