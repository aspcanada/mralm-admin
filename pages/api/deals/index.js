import { deals } from "../../../public/API-Data/deals";

export default function handler(req, res) {
  try {
    res.status(200).json(deals);
  } catch (err) {
    alert("Data is not fetch!!! Please check console!!!");
  }
}
