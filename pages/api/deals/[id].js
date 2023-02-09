import { getSupabase } from "../../../utils/supabase"
import { isValidUUID } from "../../../utils/validate"

const supabase = getSupabase()

export default async function handler(req, res) {
  // check that the req.query.id is a uuid
  if (!isValidUUID(req.query.id)) {
    res.status(404).json({ statusCode: 404, message: "Deal not found" })
  }

  const { data: deal, error } = await supabase
    .from("deal")
    .select("*")
    .eq("id", req.query.id)
    .single()

  if (error) {
    console.log(error)
    res
      .status(500)
      .json({ statusCode: 500, message: "Trouble connecting to the database" })
    return
  }

  res.status(200).json(deal)
}
