import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque unde, vero deleniti adipisci voluptatum saepe ratione fuga alias, provident dolore nesciunt repellendus dolor odio sit voluptas et ipsa molestias ullam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A mollitia debitis aliquid alias id qui voluptas dolores non, fuga blanditiis, magni nisi repellat veniam ad nam sequi? Sunt, corrupti incidunt?</p>
      <Footer />
    </div>
  )
}
