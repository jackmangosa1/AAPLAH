"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import FormImage from "../assets/woman.jpeg";
import { PiStarFour } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userPublicID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nom est requis";

    if (!formData.phone.trim()) {
      newErrors.phone = "Numéro de téléphone est requis";
    } else if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(formData.phone.trim())) {
      newErrors.phone = "Format de numéro de téléphone invalide";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Adresse Email est requise";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Adresse Email invalide";
    }

    if (!formData.subject.trim()) newErrors.subject = "Sujet est requis";

    if (!formData.message.trim()) {
      newErrors.message = "Message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      emailjs
        .sendForm(serviceID!, templateID!, formRef.current ?? "", userPublicID!)
        .then(
          () => {
            toast.success("Votre message a été envoyé avec succès.");
            setFormData({
              name: "",
              phone: "",
              email: "",
              subject: "",
              message: "",
            });
            setLoading(false);
          },
          (error) => {
            console.error("Error:", error);
            toast.error("Échec de l'envoi du message. Veuillez réessayer.");
            setLoading(false);
          }
        );
    }
  };

  return (
    <section id="contacts" className="bg-white">
      <Toaster />
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section with Parallax Effect */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={FormImage}
                alt="form-image"
                className="rounded-2xl w-full h-auto object-cover object-center shadow-lg"
                width={600}
                height={400}
                quality={75}
                loading="lazy"
                sizes="(max-width: 600px) 100vw, 600px"
                placeholder="blur"
              />
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="w-full lg:w-1/2 flex flex-col gap-5"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 bg-shadow px-3 py-1 w-fit text-grayText rounded-2xl text-sm"
            >
              <motion.div
                animate={{ rotate: [0, 12, 0, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <PiStarFour className="text-base" />
              </motion.div>
              Nous contacter
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-darkText font-bold"
            >
              Laisser nous un message
            </motion.h2>

            {/* Form */}
            <motion.form
              ref={formRef}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-6 mt-8"
              onSubmit={sendEmail}
            >
              {/* Name and Phone Row */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
                  <motion.input
                    type="text"
                    name="name"
                    id="name"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-500"
                        : "border-grayLine focus:border-green"
                    }`}
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    whileFocus={{
                      borderColor: errors.name ? "#ef4444" : "#22c55e",
                    }}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
                  <motion.input
                    type="tel"
                    name="phone"
                    id="phone"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none transition-colors ${
                      errors.phone
                        ? "border-red-500"
                        : "border-grayLine focus:border-green"
                    }`}
                    placeholder="Numero de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>

              {/* Email and Subject Row */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
                  <motion.input
                    type="email"
                    name="email"
                    id="email"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none transition-colors ${
                      errors.email
                        ? "border-red-500"
                        : "border-grayLine focus:border-green"
                    }`}
                    placeholder="Addresse Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
                  <motion.input
                    type="text"
                    name="subject"
                    id="subject"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-red-500"
                        : "border-grayLine focus:border-green"
                    }`}
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                variants={fadeInUp}
                whileFocus={{ scale: 1.02 }}
                className="w-full"
              >
                <motion.textarea
                  name="message"
                  id="message"
                  className={`border-2 py-3 px-4 rounded-md w-full focus:outline-none h-32 transition-colors ${
                    errors.message
                      ? "border-red-500"
                      : "border-grayLine focus:border-green"
                  }`}
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                ></motion.textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={fadeInUp}
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-green text-white font-bold px-8 py-3 rounded-full w-full sm:w-auto shadow-md relative overflow-hidden"
                disabled={loading}
              >
                {/* Button shine effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                <span className="relative z-10">
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </span>
                <motion.div
                  animate={loading ? { rotate: 360 } : {}}
                  transition={
                    loading
                      ? { duration: 1, repeat: Infinity, ease: "linear" }
                      : {}
                  }
                  className="relative z-10"
                >
                  <SiMinutemailer className="text-lg" />
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
