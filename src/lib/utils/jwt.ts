import jwt from "jsonwebtoken"
import { AUTH_SECRET as token_key } from '$env/static/private';

type User = {
  id?: string | null
}

type UserDecode = User & {
  iat: number,
  exp: number
}

const verifyToken = async (token: string) => {
  try {
    const user : UserDecode = await jwt.verify(token, token_key);

    return user

  } catch (err) {
    return null
  }
};

const signToken = async (data: User, time = '1h') => {
  try {
    const token = await jwt.sign({
      id: data.id
    }, token_key, { expiresIn: time })

    return token

  } catch (err) {
    return null
  }
};

export {
  verifyToken,
  signToken
}