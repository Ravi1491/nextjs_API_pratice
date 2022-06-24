import styles from '../styles/Home.module.css'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Nike | About</title>
      </Head>
      <div>
        <h1>About Page</h1>
        <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae animi, nisi velit ratione, rerum voluptates consectetur ea qui sed architecto dolor laudantium et? In ut maxime distinctio nostrum cum.</p>
        <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae animi, nisi velit ratione, rerum voluptates consectetur ea qui sed architecto dolor laudantium et? In ut maxime distinctio nostrum cum.</p>
      </div>
    </>
  );
};

export default About;
