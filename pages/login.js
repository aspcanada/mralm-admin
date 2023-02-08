import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

const Login = () => {
  const router = useRouter()
  const { user, error, isLoading } = useUser()

  useEffect(() => {
    if (isLoading) return
    if (error) {
      console.log(error)
      return
    }
    if (!(user || isLoading)) {
      router.push('/api/auth/login')
    } else {
      router.push('/dashboard')
    }
  }, [user, error, isLoading])

  // return (
  //   <p>Redirecting...</p>
  // )
}

export default Login
