import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import bg from "../assets/globe2.jpg";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { slideIn } from "../utils/motion";
import { useLanguage } from "../utils/LanguageContext";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { language } = useLanguage();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const content = {
      en: {
        contact: "Contact",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sending: "Sending...",
        send: "Send",
        successMessage:
          "Thank you, we will get back to you as soon as possible.",
        errorMessage: "Something went wrong. Please try again.",
      },
      pt: {
        contact: "Contato",
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
        sending: "Enviando...",
        send: "Enviar",
        successMessage:
          "Obrigado, entraremos em contato com você o mais rápido possível.",
        errorMessage: "Algo deu errado. Por favor, tente novamente.",
      },
    };

    try {
      await emailjs.send(
        "service_1jf39dm",
        "template_ly45s2s",
        form,
        "whSFEwx5kbX0w3KzI"
      );

      setLoading(false);
      toastr.success(content[language].successMessage);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);

      toastr.error(content[language].errorMessage);
    }
  };

  useEffect(() => {
    toastr.options = {
      closeButton: true,
      newestOnTop: true,
      progressBar: true,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 10000,
    };
  }, []);

  const content = {
    en: {
      contact: "Contact",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      send: "Send",
    },
    pt: {
      contact: "Contato",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      sending: "Enviando...",
      send: "Enviar",
    },
  };

  return (
    <div className="relative z-0">
      <div
        className={`w-full overflow-hidden`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="underfilter"></div>
        <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}>
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] p-8 rounded-2xl "
          >
            <h3 className={styles.sectionHeadText}>
              {content[language].contact}
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col gap-8 sm:w-full"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {content[language].name}
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2"
                  style={{ backdropFilter: "blur(8px)" }}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {content[language].email}
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2"
                  style={{ backdropFilter: "blur(8px)" }}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {content[language].subject}
                </span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2"
                  style={{ backdropFilter: "blur(8px)" }}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {content[language].message}
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2 sm:w-fullsss"
                  style={{ backdropFilter: "blur(8px)" }}
                />
              </label>

              <button
                type="submit"
                className="violet-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? content[language].sending : content[language].send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
