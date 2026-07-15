import { useRef, useState } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_ts6kuz1",
        "template_lg3rbvi",
        form.current,
        "76rYgRB-LDQD7PmUk",
      );
      form.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__intro">
          <span className="section-index">06 / CONTACT</span>
          <p className="eyebrow">Have a project or opportunity?</p>
          <h2>Let&apos;s make something useful together.</h2>
          <p>
            I am open to front-end roles, collaborative projects, and freelance
            opportunities. Tell me what you are working on and I will get back
            to you.
          </p>
          <a className="contact__email" href="mailto:gilangkbr4@gmail.com">
            <MdEmail /> gilangkbr4@gmail.com <HiArrowUpRight />
          </a>
          <div className="contact__socials">
            <a href="https://github.com/Gilangkbr" target="_blank" rel="noreferrer"><BsGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/gilangkbr99/" target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form__row">
            <label>
              Your name
              <input type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
            </label>
            <label>
              Your email
              <input type="email" name="email" placeholder="jane@company.com" autoComplete="email" required />
            </label>
          </div>
          <label>
            Your message
            <textarea name="message" placeholder="Tell me a little about your project or opportunity..." rows="6" required />
          </label>
          <div className="form__footer">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
              {status === "success" && "Message sent. Thank you!"}
              {status === "error" && "Could not send the message. Please email me directly."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
