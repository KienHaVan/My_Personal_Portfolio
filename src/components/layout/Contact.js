import React, { useRef, useState } from 'react';
import { Images } from '../../assets';
import { social } from './Banner';
import emailjs from '@emailjs/browser';

function Contact({ section }) {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rztss0e',
        'template_zrpsx4q',
        form.current,
        'eHZhBp0gj17n7HQfG'
      )
      .then(
        (result) => {
          console.log('success: ', result.text);
          setStatus(true);
          e.target.reset();
        },
        (error) => {
          console.log('error: ', error.text);
          setStatus(false);
        }
      );
  };
  return (
    <div
      className="pt-[100px] flex flex-col justify-center items-center px-[80px] mb-20 tablet:px-0 mobile:px-0"
      id="contact"
      ref={section.ref}
    >
      <h1 className="text-5xl mb-2">Contact</h1>
      <h2 className="text-xl mb-12 mobile:mb-6">Contact me directly</h2>
      <div className="flex justify-between items-center w-full mobile:flex-col">
        <div className="w-[50%] flex flex-col items-center mobile:w-full">
          <img alt="" src={Images.CONTACT} className="w-[50%] mb-4" />
          <h1 className="text-2xl font-bold">Ha Van Kien (Kevin)</h1>
          <h2 className="text-xl font-bold mb-4">Software Developer</h2>
          <p className="text-2xl font-bold">Contact for work</p>
          <p>Phone: (+84) 328.728.623</p>
          <p className="mb-4">Email: kien.havan321@gmail.com</p>
          <p className="text-2xl font-bold mb-2">Find me in</p>
          <div className="flex gap-4 laptop:banner-social-laptop tablet:banner-social-tablet mobile:top-[212px] mobile:mb-12">
            {social.map((item) => (
              <a href={item.link} key={item.id}>
                <img
                  src={item.image}
                  className="w-8 hover:scale-150 transition-all"
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
        <form
          className="w-[50%] mobile:w-full"
          onSubmit={handleSubmit}
          ref={form}
        >
          <h1 className="text-2xl font-bold mb-4 invisible mobile:visible">
            Leave me a message
          </h1>
          <div className="flex justify-between items-center gap-4 mb-4 tablet:flex-col mobile:flex-col">
            <div className="w-full">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 outline-none border-none text-black px-3 py-2 rounded-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full mt-2 outline-none border-none text-black px-3 py-2 rounded-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="mail">Your email</label>
            <input
              type="email"
              id="mail"
              name="mail"
              className="w-full mt-2 outline-none border-none text-black px-3 py-2 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject">Your subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-2 outline-none border-none text-black px-3 py-2 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Your message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="w-full mt-2 outline-none border-none text-black px-3 py-2 rounded-sm h-[200px]"
            />
          </div>
          <button className="btn-primary w-full" type="submit">
            SEND MESSAGE
          </button>
          {status !== null && status === true ? (
            <p className="mt-4 text-center text-green-400">
              I have recieved your message!
            </p>
          ) : status !== null && status === false ? (
            <p className="mt-4 text-center text-red-400">
              Oop! Something went wrong!
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Contact;
