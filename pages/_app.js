import Layout from "../layout"
import "../public/assets/scss/admin.scss"
import { ToastContainer } from "react-toastify"
import Head from "next/head"
import { UserProvider } from "@auth0/nextjs-auth0"
import { SWRConfig } from "swr"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <UserProvider>
          <Head>
            <title>Sheltos - Admin dashboard page</title>
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i"
              rel="stylesheet"
            />
          </Head>
          {getLayout(<Component {...pageProps} />)}
          <ToastContainer theme="light" />
        </UserProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
