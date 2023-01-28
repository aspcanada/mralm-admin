import { deals } from "../../../public/API-Data/deals";

export default function handler(req, res) {
  
  const { id } = req.query;

  try {
    res.status(200).json(deals[id]);
  } catch (err) {
    alert("Data is not fetch!!! Please check console!!!");
  }
}
