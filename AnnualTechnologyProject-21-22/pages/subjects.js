import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import * as fs from 'fs';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return <div className={styles.container}>
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return <div key={blogitem.slug}>
          <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
          <p className={styles.blogItemp}>{blogitem.desc.substr(0, 100)}</p>
          <button className={styles.btn} onClick={event => window.location.href = `/subjectpost/${blogitem.slug}`}>Read More</button>
        </div>
      })}
    </main>
  </div>

};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir('subjectdata');
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('subjectdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: { allBlogs },
  }
}

export default Blog;