export default async function handler(req, res) {
  const { id } = req.query;

  const resp = await fetch("http://localhost:8081/users/"+id);
  const data = await resp.json();

  try {
    res.status(200).json(data);
  } catch (err) {
    console.log(err)
  }
}
