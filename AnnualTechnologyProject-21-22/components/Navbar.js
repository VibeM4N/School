import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Navbar = () => {
  return (
    <>
    <Head>
      <title>Class 9 Guide</title>
      <link rel="icon" href="/logo1.png" />
    </Head>
    <nav className={styles.mainNav}>
      <ul>
        <Link href='/'><a><li>Home</li></a></Link>
        <Link href='/about'><a><li>About</li></a></Link>
        <Link href='/subjects'><a><li>Subjects</li></a></Link>
        <Link href='/contact'><a><li>Contact</li></a></Link>
      </ul>
    </nav>
    
    </>
  )
}

export default Navbar