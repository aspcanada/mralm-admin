import { getSupabase } from "../../../utils/supabase"
import { getPagination } from "../../../utils/pagination"

const supabase = getSupabase()

export default async function handler(req, res) {
  const { _page, _limit } = req.query
  console.log("_page", _page)
  console.log("_limit", _limit)

  const { from, to } = getPagination(_page, _limit)
  console.log("from", from)
  console.log("to", to)

  const {
    data: deals,
    error,
    count,
  } = await supabase.from("deal").select("*").range(from, to)

  if (error) {
    console.log(error)
    res
      .status(500)
      .json({ statusCode: 500, message: "Trouble connecting to the database" })
  }

  res.status(200).json(deals)
}
