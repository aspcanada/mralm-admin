import { handleAuth, handleCallback } from "@auth0/nextjs-auth0"
import jwt from "jsonwebtoken"

const afterCallback = async (req, res, session, state) => {

  // Add custom logic here
  const payload = {
    userId: session.user.sub,
    // exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
    exp: session.accessTokenExpiresAt, // copy exp from Auth0
  }

  session.user.accessToken = jwt.sign(payload, process.env.SUPABASE_JWT_SECRET)

  return session
}


export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  }
})
