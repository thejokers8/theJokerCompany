import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import DynamicTxt from "../components/contact/DinamycText";

function Contact() {
  useEffect(() => {
    document.title = "Contact - The Joker Company";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const form = useRef()

  const handleChange = (event) => {
    event.target.placeholder === "Name" && setName(event.target.value);
    event.target.placeholder === "Email" && setEmail(event.target.value);
    event.target.placeholder === "What do you want us to do ?" &&
      setMessage(event.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "gmail",
      "joker_template",
      e.target,
      "user_Wj5qnKWdzBxxJrEqE9PCp"
    );
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    console.log(name, email, message);
  };

  const isInvalid = name === "" || email === "" || message === "";

  return (
    <div className="App-contact w-screen text-center point3">
      <div className="contact-us flex flex-col justify-center pt-20">
        <h1 className="text-3xl font-bold tracking-widest title-projects">
          Contact Us
        </h1>
        <div className="contact-info flex w-fit items-center mx-auto border-b-4 border-gray-900">
          <p className="tracking-wider text-sm py-10 mr-1 w-fit mx-auto ">
            Any question or remarks? you just need to
          </p>
          <div className="w-fit text-green-900 font-bold">
            <DynamicTxt />
          </div>
        </div>
      </div>
      <div className="  point3 App-info items-center flex justify-between px-32 pt-16 pb-24">
        <div className="card w-5/12 p-2 flex flex-col justify-between">
          <h1 className="text-4xl font-bold italic text-center title-projects">
            Get a quote
          </h1>
          <p className="contact-message py-12 text-sm text-left">
            Fill in the following form so that we can contact you as soon as
            possible.
          </p>
          <div className="devices">
            <h3 className="cellphone w-2/4">
              <i className="animate-bounce ri-phone-fill phone"></i> + 57 302
              154 7788
            </h3>
            <h3 className="cellphone w-2/4">
              <i className="animate-bounce ri-phone-fill phone"></i> + 57 302
              154 7788
            </h3>
            <h3 className="cellphone w-2/4">
              <i className="animate-bounce ri-phone-fill phone"></i> + 57 302
              154 7788
            </h3>
            <h3 className="email-contact w-3/4">
              <i className="animate-bounce ri-mail-fill text-red-400"></i>{" "}
              thejokercompany8@gmail.com
            </h3>
          </div>
        </div>

        <div className="Form w-1/2 h-3/6 rounded-2xl p-10 flex flex-col round-bg text-green-900">
          <form
            className="flex flex-col space-y-3 "
            onSubmit={handleSend}
            type="text"
            action="#"
          >
            <p className="font-bold text-left mb-6 text-black">Your data</p>
            <p className="text-left text-xs">Name</p>
            <input
              className="text-xs py-5 px-4 h-2 border-none rounded mb-2"
              aria-label="Enter your name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              name="name"
            />
            <p className="text-left text-xs">E-mail</p>
            <input
              className="text-xs py-5 px-4 h-2 border-none rounded mb-2"
              aria-label="Enter your email"
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <p className="text-left text-xs">What do you want from us?</p>
            <textarea
              rows="4"
              className="rounded border-none p-3 text-xs"
              placeholder="What do you want us to do ?"
              onChange={handleChange}
              value={message}
              name="message"
            />

            <button
              className={`send border-none rounded-md py-2 bg-green-900 text-white mx-auto text-sm ${
                isInvalid && "cursor-not-allowed opacity-50"
              }`}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
