import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Contact me</h2>
          <p className={styles.description}>
            If you have an application you are interested in developing, a feature that you need built, or a project that needs
            coding, I’d love to help with it.
          </p>
          <form id="contact-form" action="https://formspree.io/f/mgebjlvz" method="post" target="_blank">
            <ul>
              <li>
                <input type="text" name="name" id="name" placeholder="Enter your name" maxLength="30" required />
              </li>
              <li>
                <input type="email" name="email" id="email" placeholder="Enter your email address" required />
              </li>
              <li>
                <p id="error-msg"></p>
              </li>
              <li>
                <textarea name="message" id="textarea" placeholder="Write your message here..." maxLength="500" required />
              </li>

              <li className={styles.btn}>
                <button type="submit">Get in touch</button>
              </li>
            </ul>
          </form>
        </div>
    </footer>
  );
};
