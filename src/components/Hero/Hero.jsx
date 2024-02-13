import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container} id='home'>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Lawmsangi</h1>
            <p className={styles.description}>I'm a full-stack engineer  1year of Experience in React and Redux. Reach out if you'd like to learn more</p>
            <a href="mailto:lawmsangivarte22@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
