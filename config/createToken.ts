import jwt, { Secret } from "jsonwebtoken";

export default ({ id }: { id: string }) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
    expiresIn: "30d",
  });
};
