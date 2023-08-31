import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/Layout";
import Custom404 from "@/pages/404";


export default function App({ Component, pageProps }: AppProps) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
