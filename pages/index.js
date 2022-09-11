import Image from 'next/image'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Layout title='Home || Portfolio'>
        <Banner />
      </Layout>
    </>
  )
}
