import jwt from "jsonwebtoken";
import Users from "../../repository/users";

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async isUserExist(email) {
    const user = await Users.findByEmail(email);
    return !!user;
  }

  async create(body) {
    const { id, email, subscription } = await Users.create(body);
    return { id, email, subscription };
  }

  async getUser(email, password) {
    const user = await Users.findByEmail(email);
    const isValidPassword = await user?.isValidPassword(password);
    if (!isValidPassword) {
      return null;
    }
    return user;
  }

  getToken(user) {
    const { id, email } = user;
    const payload = { id, email };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
    return token;
  }

  async setToken(id, token) {
    await Users.updateToken(id, token);
  }

  async getUserByToken(req, res, next) {
    const token = req.get("authorization")?.split(" ")[1];
    const payload = jwt.decode(token);
    const user = await Users.findById(payload.id);
    return user;
  }
}

export default AuthService;
