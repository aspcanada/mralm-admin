export default async function handler(req, res) {
  const { id } = req.query;

  const resp = await fetch("http://localhost:8081/deals/"+id);
  const data = await resp.json();

  try {
    // res.status(200).json(singleDeal);
    res.status(200).json(data);
  } catch (err) {
    console.log(err)
    // alert("Data is not fetch!!! Please check console!!!");
  }
}
