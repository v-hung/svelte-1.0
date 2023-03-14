import jwt from 'jsonwebtoken';
import { A as AUTH_SECRET } from './private-a9b5a848.js';

const verifyToken = async (token) => {
  try {
    const user = await jwt.verify(token, AUTH_SECRET);
    return user;
  } catch (err) {
    return null;
  }
};
const signToken = async (data, time = "1h") => {
  try {
    const token = await jwt.sign({
      id: data.id
    }, AUTH_SECRET, { expiresIn: time });
    return token;
  } catch (err) {
    return null;
  }
};

export { signToken as s, verifyToken as v };
//# sourceMappingURL=jwt-ee429d29.js.map
