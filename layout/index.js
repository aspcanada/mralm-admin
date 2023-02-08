import React, { useEffect, useState } from 'react'
import Footer from '../components/Common/Footer'
import Customizer from './customizer/Customizer'
import Header from './header'
import Sidebar from './sidebar'
import TapToTop from './TapToTop'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState()
  // const { user, error, isLoading } = useUser()

  function useProtectedPage() {
    const router = useRouter()
    const { user, error, isLoading } = useUser()

    useEffect(() => {
      if (isLoading) return
      if (error) {
        console.log(error)
        return
      }
      if (!user) {
        router.push('/api/auth/login')
        // router.push('/authentication/login');
      }
    }, [user, error, isLoading])

    return { user, error, isLoading }
  }
  useProtectedPage()

  const handleResize = () => {
    if (window.innerWidth > 991) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }
  useEffect(() => {
    setToggle(window.innerWidth > 991)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="page-wrapper">
        <Header setToggle={setToggle} toggle={toggle} />
        <div className="page-body-wrapper">
          <Sidebar toggle={toggle} setToggle={setToggle} />
          <div className="page-body">{children}</div>
          <Footer />
        </div>
        <TapToTop />
        <Customizer />
      </div>
    </>
  )
}

export default withPageAuthRequired(Layout)
