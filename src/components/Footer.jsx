import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineArrowUp,
} from "react-icons/ai";
import dp from "../assets/DP.png"
const Footer = () => {
  return (
    <footer>
        <div>
            <img 
                src={dp}
                alt='Myself'
            />
            <h2>Rahul Kumar</h2>
        </div>
        <aside>
            <h2>Social Media</h2>

            <article>
                <a href='https://github.com/RahuRabh' target={'blank'}>
                    <AiFillGithub />
                </a>
                <a href='https://www.linkedin.com/in/rahurabh/' target={'blank'}>
                    <AiFillLinkedin />
                </a>
                <a href='https://instagram.com/ral.kum' target={'blank'}>
                    <AiFillInstagram />
                </a>
            </article>
        </aside>
        <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer;