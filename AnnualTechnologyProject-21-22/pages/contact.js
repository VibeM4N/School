import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        alert("Thanks for contacting me I will respond soon!");
        setname('')
        setemail('')
        setdesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  };

  return <div className={styles.container}>
    <h1 className={styles.h1}>Contact Us through here</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter Your Name:</label>
        <input type="text" value={name} onChange={handleChange} className={styles.input} id="name" name='name' aria-describedby="name" required />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>Enter Your Email:</label>
        <input type="email" value={email} onChange={handleChange} className={styles.input} id="email" name='email' aria-describedby="email" required />
        <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="desc" className={styles.formlabel}>Feedback:</label>
        <input className={styles.input} type="text" value={desc} onChange={handleChange} id="desc" name='desc' aria-describedby="desc" required/>
      </div>
      <button className={styles.button} type="submit" >Submit</button>
    </form>
  </div>

};

export default Contact;