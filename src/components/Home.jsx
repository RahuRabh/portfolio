import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.svg";

const Home = () => {
  const animations = {
    h1: { initial: { x: "-100%", opacity: 0 }, whileInView: { x: 0, opacity: 1 } },
    button: { initial: { y: "-100%", opacity: 0 }, whileInView: { y: 0, opacity: 1 } },
  };

  return (
    <div id="home">
      {/* LEFT SECTION */}
      <section className="home-left">
        <motion.h1 {...animations.h1}>
          Hi, I Am <br /> Rahul Kumar
        </motion.h1>

        <Typewriter
          options={{
            strings: ["A Developer", "A Learner", "An Explorer"],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "typewriterpara",
          }}
        />

        <div className="home-buttons">
          <a href="mailto:rahurabh@gmail.com">Hire Me</a>
          <a href="#timeline">
            Experience <BsArrowUpRight />
          </a>
        </div>

        <aside>
          <article>
            <p>+25</p>
            <span>Projects Done</span>
          </article>

          <article data-special>
            <p>Contact</p>
            <span>rahurabh@gmail.com</span><br/>
            <span>+91 7033-565-21</span>
          </article>
        </aside>
      </section>

      {/* RIGHT SECTION */}
      <section className="home-right">
        <img src={me} alt="Rahul" />
      </section>

      <BsChevronDown className="scroll-icon" />
    </div>
  );
};

export default Home;
