import Image from 'next/image'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Layout title='Home || Portfolio'>
        <Banner />
        <About />

        <Contact />
      </Layout>
    </>
  )
}
