import styles from "./Footer3.css";
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
                <div className="">
                    <FaCube className={styles.cubo}/>
                    <ul>
                        <li>(85) 7777 7777</li>
                        <li>ceosadmin@gmail.com</li>
                        <li>Campus do Pici - UFC, Fortaleza, CE</li>
                    </ul>
                    <h3>Copyright © 2023 Financial Business</h3>
                </div>

                <div className="box">
                    {/*Quero dividir isso em mais colunas com info */}
                    <h3>Products</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h3>Company</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h3>Resources</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h3>Legal</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
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