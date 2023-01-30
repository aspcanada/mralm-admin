export default async function handler(req, res) {

    const resp = await fetch("http://localhost:8081/users");
    const data = await resp.json();
  
    try {
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
  