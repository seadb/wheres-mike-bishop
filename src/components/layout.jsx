import React from 'react'
//import Logo from '../components/Logo';
//import Nav from '../components/Nav';
//import styles from '../styles.css';

const Layout = (props) => (
  <div>
    <div className="overlay">
    </div>
    <div className="content">
      <nav className="nav">
        <a href="#/">Home</a>
        <a href="#/about-us">About Us</a>
        <a href="#/contact">Contact</a> 
      </nav>
      {props.children}
    </div>
  </div>
)

/*
    <div className={styles.header} >
      <Logo/>
      <Nav/>
    </div>
    <div className={styles.body} >
      <Routes />
    </div>
*/
export default Layout
