const apiDomain = "http://localhost:8081";

export default async function commonHandler(req, res) {
  const resp = await fetch(apiDomain + req.url); // includes query string
  const data = await resp.json();

  try {
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
