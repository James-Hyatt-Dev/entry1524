import Navigation from '@/components/header/Navigation'
import LeftSidebar from '@/components/sidebar/LeftSidebar'
import RightSidebar from '@/components/sidebar/RightSidebar'
import '@/styles/globals.css'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation />
      <LeftSidebar />
      <RightSidebar />
      <Component {...pageProps} />
    </Fragment>
  )
}
