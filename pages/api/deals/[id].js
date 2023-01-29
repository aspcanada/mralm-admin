import { data } from "./db"

export default async function handler(req, res) {
  
  const { id } = req.query;

  try {
    // res.status(200).json(singleDeal);
    res.status(200).json(data[id]);
  } catch (err) {
    console.log(err)
    // alert("Data is not fetch!!! Please check console!!!");
  }
}
