import credentials from "credentials.json";
import jwt from "jsonwebtoken";

export default function hanlders(req, res) {
  let user = credentials.find(
    (credential) =>
      req.body.email === credential.email &&
      req.body.password === credential.password
  );
  if (user) {
    const token = jwt.sign(user, "secret");
    return res.status(200).json({ token, user });
  }
  return res.status(500).json({ message: "User not found" });
}
