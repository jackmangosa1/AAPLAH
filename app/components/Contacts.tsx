"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import FormImage from "../assets/woman.jpeg";
import { PiStarFour } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  isError?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  isError = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed p-2 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {title}
        </h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-green text-white px-4 py-2 rounded hover:bg-green-100 transition-colors"
        >
          Fermer
        </button>
      </div>
    </div>
  );
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isError: false,
  });
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
        .sendForm(
          "service_ID",
          "template_ID",
          formRef.current ?? "",
          "user_public_id"
        )
        .then(
          () => {
            setModalContent({
              title: "Succès!",
              message: "Votre message a été envoyé avec succès.",
              isError: false,
            });
            setModalOpen(true);
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
            setModalContent({
              title: "Erreur",
              message: "Échec de l'envoi du message. Veuillez réessayer.",
              isError: true,
            });
            setModalOpen(true);
            setLoading(false);
          }
        );
    }
  };

  return (
    <section id="contacts" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={FormImage}
              alt="form-image"
              className="rounded-2xl w-full h-auto object-cover object-center"
              width={600}
              height={400}
              quality={75}
              loading="lazy"
              sizes="(max-width: 600px) 100vw, 600px"
              placeholder="blur"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <div className="flex items-center gap-2 bg-shadow px-3 py-1 w-fit text-grayText rounded-2xl text-sm">
              <PiStarFour className="text-base rotate-12" />
              Nous contacter
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-darkText font-bold">
              Laisser nous un message
            </h2>
            <form
              ref={formRef}
              className="flex flex-col gap-6 mt-8"
              onSubmit={sendEmail}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none ${
                      errors.name ? "border-red-500" : "border-grayLine"
                    }`}
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none ${
                      errors.phone ? "border-red-500" : "border-grayLine"
                    }`}
                    placeholder="Numero de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none ${
                      errors.email ? "border-red-500" : "border-grayLine"
                    }`}
                    placeholder="Addresse Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className={`border-2 py-2 px-4 rounded-md w-full focus:outline-none ${
                      errors.subject ? "border-red-500" : "border-grayLine"
                    }`}
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  id="message"
                  className={`border-2 py-3 px-4 rounded-md w-full focus:outline-none h-32 ${
                    errors.message ? "border-red-500" : "border-grayLine"
                  }`}
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green text-white font-bold px-8 py-3 rounded-full w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
                <SiMinutemailer className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
        isError={modalContent.isError}
      />
    </section>
  );
};

export default Contacts;
