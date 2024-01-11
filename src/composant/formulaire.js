import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Merci from "./merci";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    objet: "",
    message: "",
    service: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true)

    // Submit form data
    axios.post("http://127.0.0.1:8000/messages/", formData)
    .then()
    .catch()

  };



  const validateInputs = () => {
    const errors = {};

    // Validate name field
    if (formData.nom.trim() === "") {
      errors.nom = "Veuillez saisir votre nom";
    }

    // Validate email field
    if (formData.email.trim() === "") {
      errors.email = "Veuillez saisir votre email";
    } else if (!isValidEmail(formData.email)) {
      errors.email =
        "Il semble que l'adresse que vous avez saisie n'est pas une adresse email valide";
    }

    // Validate phone field
    if (formData.phone.trim() === "") {
      errors.phone = "Veuillez saisir votre numéro de téléphone";
    }

    // Validate object field
    if (formData.objet.trim() === "") {
      errors.objet = "Veuillez saisir l'objet";
    }

    // Validate message field
    if (formData.message.trim() === "") {
      errors.message = "Veuillez saisir le message";
    }

    // Validate service field
    if (formData.service === "") {
      errors.service = "Veuillez sélectionner un service";
    }

    setErrors(errors);
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //----------------------------------------------------------------template-----

  return (
    <div className="py-2">
      {isSubmitted && (
        <Merci name={formData.nom}/>
      )}

      <form
        className=" border-1 rounded border-amber-300 bg-white p-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-sky-900">
          Veuillez remplir ce formulaire pour soumettre votre soumission
        </h2>

        <div className="lg:flex lg:space-x-4">
          <label className="lg:w-1/2">
            <span className="text-sky-900">Nom</span>
            <input
              type="text"
              name="nom"
              value={formData.nom || ""}
              onChange={handleChange}
              className="rounded border-2 w-full lg:w-[hrem] bg-white border-sky-900"
              placeholder="Nom"
            />
            {errors.nom && <p className="text-red-500">{errors.nom}</p>}
          </label>
          <br></br>
          <br></br>

          <label className="lg:w-1/2">
            <span className="text-sky-900">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="rounded bg-white border-2 w-full lg:w-[hrem] border-sky-900"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </label>
        </div>
        <br></br>

        <label>
          <span className="text-sky-900">Téléphone</span>
          <input
            type="text"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            className="rounded border-2 w-full bg-white border-sky-900"
            placeholder="Téléphone"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </label>
        <br></br>
        <br></br>

        <label>
          <span className="text-sky-900">Objet</span>
          <input
            type="text"
            name="objet"
            value={formData.objet || ""}
            onChange={handleChange}
            className="rounded border-2 w-full bg-white border-sky-900"
            placeholder="Objet"
          />
          {errors.objet && <p className="text-red-500">{errors.objet}</p>}
        </label>
        <br></br>
        <br></br>

        <label>
          <span className="text-sky-900">Sélectionnez le service</span>
          <select
            name="service"
            value={formData.service || ""}
            onChange={handleChange}
            className="rounded border-2 w-1/2 bg-white border-sky-900"
          >
            <br></br>
            <option value="">-- Sélectionnez --</option>
            <option value="securite">Sécurité</option>
            <option value="sante">Santé</option>
            <option value="entretien menager">Entretien Ménager</option>
          </select>
          {errors.service && <p className="text-red-500">{errors.service}</p>}
        </label>
        <br></br>
        <br></br>

        <label>
          <span className="text-sky-900">Message</span>
          <div>
            <textarea
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              className="w-full h-32 rounded border-2 bg-white border-sky-900"
              placeholder="Message"
            />
          </div>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </label>

        <br></br>
        <br></br>

        <div className="text-sky-900 p-4 cursor pointer text-center bg-amber-400 border-0 focus:outline-none rounded text-lg">
          <input type="submit" value="Demandez soumission" />
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
