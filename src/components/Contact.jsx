import { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const formData = new FormData();
    formData.append("access_key", "7796d7a8-2ba7-4944-9096-4fc2cd968306");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }

    setDisableBtn(false);
  };

  const animations = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
