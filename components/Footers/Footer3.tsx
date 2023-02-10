import styles from "./Footer3.module.css"
{
  /*Sei la oq ta rolando aqui, sou burra*/
}
import {
  FaCube,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"

const Footer3 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstsection}>
        <FaCube size="15rem" />
        <div className={styles.contato}>
          <ul>
            <h3>Contact us</h3>
            <li>(85) 7777 7777</li>
            <li>ceosadmin@gmail.com</li>
            <li>Campus do Pici - UFC, Fortaleza, CE</li>
            <br></br>
            <li>Copyright © 2023 Financial Business</li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <ul>
          <h3>Products</h3>
          <li>Overview</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Releases</li>
        </ul>
        <ul>
          <h3>Resources</h3>
          <li>Blog</li>
          <li>Events</li>
          <li>Support</li>
        </ul>

        <ul>
          <h3>Company</h3>
          <li>About us</li>
          <li>News</li>
          <li></li>
        </ul>

        <ul>
          <h3>Legal</h3>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Licenses</li>
          <li>Settings</li>
        </ul>
      </div>
      -
      <div className="socials">
        <FaInstagram size="7rem" />
        <FaFacebookF size="7rem" />
        <FaLinkedin size="7rem" />
        <FaWhatsapp size="7rem" />
      </div>
    </footer>
  )
}

export default Footer3
