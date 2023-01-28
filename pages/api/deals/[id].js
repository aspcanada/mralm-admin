export default async function handler(req, res) {
  
  const { id } = req.query;

  const data = await fetch(`${process.env.API_URL}/deals`);
  const deals = await data.json();

  try {
    res.status(200).json(deals[id]);
  } catch (err) {
    console.log(err)
    // alert("Data is not fetch!!! Please check console!!!");
  }
}
