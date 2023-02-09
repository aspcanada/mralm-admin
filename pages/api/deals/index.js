import { getSupabase } from "../../../utils/supabase"
import { getPagination } from "../../../utils/pagination"
import { getSession } from "@auth0/nextjs-auth0"

export default async function handler(req, res) {
  // check if user is logged in
  const session = getSession(req, res)
  if (!session) {
    res.status(401).json({ statusCode: 401, message: "Unauthorized" })
    return
  }

  const {
    user: { accessToken },
  } = session

  const supabase = getSupabase(accessToken)

  const { _page, _limit } = req.query
  const { from, to } = getPagination(_page, _limit)

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
