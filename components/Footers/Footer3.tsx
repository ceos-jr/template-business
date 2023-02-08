import styles from "./Footer3.module.css";
{/*Sei la oq ta rolando aqui, sou burra*/}
import {
    FaCube,
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
  } from "react-icons/fa";


const Footer3 = () => {
    return(
        <footer className={styles.footer}>

                <div className={styles.firstsection}>
                <FaCube size="10rem"/>
                <span>Contact us</span>
                    <ul>
                        <li>(85) 7777 7777</li>
                        <li>ceosadmin@gmail.com</li>
                        <li>Campus do Pici - UFC, Fortaleza, CE</li>
                        <li>Copyright © 2023 Financial Business</li>
                    </ul>
                </div>

                <div className={styles.box}>
                    {/*Quero dividir isso em mais colunas com info */}
                    <ul>
                        <h3>Products</h3>
                        <li>Overview</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Releases</li>
                    </ul>
                    <ul>
                        <h3>Resources</h3>
                        <li>blog</li>
                        <li>events</li>
                        <li>support</li>
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
                    {/* ícones de redes sociais - pensando em deixar eles maiorzinhos*/}
                </div>
        </footer>
    );
};

export default Footer3;