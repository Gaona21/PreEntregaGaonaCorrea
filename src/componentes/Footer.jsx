import React from 'react'
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="cont-redes">
                <ul>
                    <li className="link-redes">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="./img/iconos/facebook.png" alt="iconFacebook" /> Facebook
                        </a>
                    </li>

                    <li className="link-redes">
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="./img/iconos/instagram.png" alt="iconInstagram" /> Instagram
                        </a>
                    </li>

                    <li className="link-redes">
                        <a href="https://www.google.com/intl/es-419/gmail/about/" target="_blank">
                            <img src="./img/iconos/gmail.png" alt="iconGmail" /> Email
                        </a>
                    </li>
                </ul>
            </div>

            <div className="cont-info">
                <p>Todos los produstos son originales e importados, por consultas o reclamos hablenos por nustras redes sociales.</p>
            </div>

            <div className="cont-direc">
                <a href="#">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105026.43293356159!2d-58.6610444566406!3d-34.65278279999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc91dea149d4b%3A0xd65cb4c82b707df7!2sLocos%20por%20el%20cubo%20rubik!5e0!3m2!1ses-419!2sar!4v1670707679139!5m2!1ses-419!2sar" width="200" height="100" ></iframe>
                </a>
            </div>

        </footer>
    )
}

export default Footer;