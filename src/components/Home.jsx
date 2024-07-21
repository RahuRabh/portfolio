import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.svg";

const Home = ({ ratio }) => {

  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 30, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Rahul Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Student"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:rahurabh@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    25
                  </motion.span>
                )}
                
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>rahurabh@gmail.com</span><br />
              <span>+91 7033-565-21</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} height={"25%"} alt="Rahul"/>
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;