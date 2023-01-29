import { data } from "./db"

export default function handler(req, res) {
  try {
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
