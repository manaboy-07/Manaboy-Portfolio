/** @format */

import React, { useEffect, useState } from "react";
import "../styles/Contact.css";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
function Contact() {
  const initialValues = {
    username: "",
    message: "",
    email: "",
  };
  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a Valid Email";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(form));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(form);
    }
  }, [formErrors]);
  return (
    <section>
      <div className='contact'>
        <div>
          <form action='' onSubmit={handleSubmit}>
            <h1 className='text-primary font-bold'>Get in touch 👊👊👊</h1>
            <div className='field'>
              <label className='font-bold ' htmlFor='username'>
                Name:{" "}
              </label>
              <input
                type='text'
                name='username'
                value={form.username}
                onChange={handleChange}
                required
              />
              <p>{formErrors.username}</p>
            </div>
            <div className='field'>
              <label className='font-bold ' htmlFor='email'>
                Email:{" "}
              </label>
              <input
                type='email'
                name='email'
                required
                value={form.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div className='field'>
              <label className='font-bold ' htmlFor='message'>
                Message:{" "}
              </label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                value={form.message}
                onChange={handleChange}></textarea>
            </div>
            <div className=' bg-primary my-3 rounded-md text-neutral'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='socials'>
        <h1 className='text-center font-bold text-2xl text-primary'>
          Follow me on Socials
        </h1>
        <div className='social-icon-container   '>
          <div className='icon-social'>
            <a href='https://www.instagram.com/mana___boy/' target='_blank'>
              <BsInstagram className='icon-description' />
              <p>Instagram</p>
            </a>
          </div>

          <div className='icon-social'>
            <a href='https://github.com/manaboy-07' target='_blank'>
              <BsGithub className='icon-description' />
              <p>Github</p>
            </a>
          </div>
          <div className='icon-social'>
            <a
              href='https://www.linkedin.com/in/oruebor-manasseh-769b041a6/'
              target='_blank'
              class='home__social-icon'>
              <BsLinkedin />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className='icon-social'>
            <a href='https://m.facebook.com/oruebor.manasseh' target='_blank'>
              <BsFacebook />
              <p>Facebook</p>
            </a>
          </div>
          <div className='icon-social'>
            <a href='tel:+23407043608352'>
              <BsFillTelephoneFill />
              <p>Phone</p>
            </a>
          </div>
          <div className='icon-social'>
            <a href='mailto:manassehoruebor@gmail.com'>
              <BsEnvelopeFill />
              <p>Email</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
