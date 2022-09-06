import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import DynamicTxt from "../components/contact/DinamycText";

function Contact() {
  useEffect(() => {
    document.title = "Contact - The Joker Company";
  }, []);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [solution, setSolution] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    event.target.placeholder === "Names" && setName(event.target.value);
    event.target.placeholder === "LastNames" && setLastName(event.target.value);
    event.target.placeholder === "Email" && setEmail(event.target.value);
    event.target.placeholder === "Solution" && setSolution(event.target.value);
    event.target.placeholder === "What do you want us to do ?" &&
      setMessage(event.target.value);
  };

  console.log(solution)

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
    setLastName("");
    setEmail("");
    setSolution("");
    setMessage("");
    console.log(name, lastName,email,solution, message);
  };



  const isInvalid = name === "" || lastName === "" || email === "" || solution === "" || message === "";

  return (
    <div className="App-contact w-screen text-center bg-[#FFFFFF]">
      <div className="contact-us flex flex-col justify-center pt-20 mb-[-2em]">
        <h1 className=" font-bold tracking-widest title-projects">
          Contact Us
        </h1>
        <div className="contact-info flex items-center justify-center mx-auto w-[80vw] border-b-4 border-gray-900">
          <div className="flex items-center">
            <p className="text-base mr-1 mx-auto py-5">
              Any question or remarks? you just need to
            </p>
            <div className="w-fit text-green-900 font-bold ml-2 mr-2">
              <DynamicTxt />
            </div>
          </div>
           <p className="py-5">Your needs are our priority, our team will always be willing to develop your ideas</p>
        </div>
      </div>
      <div className=" App-info items-center flex justify-between pt-16 pb-32 mt-12">
        <div className="App-info-sub flex w-[80vw] mx-auto">
          <div className="information py-10 px-5 flex flex-col justify-between bg-[#A7C2AF] lg:rounded-l-[30px] lg:w-[35%]">
            <h1 className="font-bold text-white text-[1.5em] text-center">
              Contact Information
            </h1>
            <p className="contact-message text-base text-left">
              Fill in the following form so that we can contact you as soon as
              possible.
            </p>
            <div className="devices">
              <h3 className="cellphone w-[30vw]">
                <i className="ri-phone-fill phone flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#FDFEFE]"></i> 
                + 57 316 673 5651
              </h3>
              <h3 className="cellphone w-[30vw]">
                <i className="ri-phone-fill phone flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#FDFEFE]"></i> 
                + 57 310 728 2535
              </h3>
              <h3 className="cellphone w-[30vw]">
                <i className="ri-phone-fill phone flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#FDFEFE]"></i> 
                + 57 302 298 6010
              </h3>
              <h3 className="cellphone w-[30vw]">
                <i className="ri-phone-fill phone flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#FDFEFE]"></i> 
                + 57 319 653 2667
              </h3>
              <h3 className="email-contact w-[30vw]">
                <i className="ri-mail-fill text-red-400 flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#FDFEFE]"></i>{" "}
                thejokercompany8@gmail.com
              </h3>
            </div>
          </div>

          <div className="Form lg:w-[65%] lg:rounded-r-[30px] py-5 px-2 lg:px-10 flex flex-col bg-[#FFFFFF] text-green-900">
            <form
              className="flex flex-col justify-center"
              onSubmit={handleSend}
              type="text"
              action="#"
            >
              <p className="font-bold text-left mb-6 text-black ml-5 lg:ml-0">Your data</p>
              <div className="form-names flex justify-around w-[100%] mr-5">
                <div className="form-names-text w-[50%] mx-6">
                  <p className="name-form text-left text-xs">Names</p>
                  <input
                    className="name-form-input lg:w-[100%] text-xs py-5 px-2 h-2 border-b-[1px] border-black mb-5"
                    aria-label="Enter your names"
                    placeholder="Names"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    name="names"
                  />
                </div>
                <div className="form-names-text w-[50%] mx-5">
                  <p className="name-form text-left text-xs">Last Names</p>
                  <input
                    className="name-form-input lg:w-[100%] text-xs py-5 px-2 h-2 border-b-[1px] border-black mb-5"
                    aria-label="Enter your lastnames"
                    type="text"
                    placeholder="LastNames"
                    value={lastName}
                    onChange={handleChange}
                    name="lastNames"
                />
                </div>
              </div>
              <p className="text-left text-xs mx-6">E-mail</p>
              <input
                className="text-xs py-5 mx-6 w-[55%] px-2 h-2 border-b-[1px] border-black mb-5"
                aria-label="Enter your email"
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <p className="text-sm mx-5">What solutions of The JokerCompany do you need?</p>
              <div className="solutions flex justify-around mt-10">
                <div>
                  <input onChange={handleChange} type="radio" value="web development" placeholder="Solution" id="web" name="solution"></input>
                  <label className="text-xs ml-2" for="web">Web Development</label>
                </div>
                <div>
                  <input onChange={handleChange} type="radio" value="IA" placeholder="Solution" id="ia" name="solution"></input>
                  <label className="text-xs ml-2" for="ia">Artificial Intelligence</label>
                </div>
                <div>
                  <input onChange={handleChange} type="radio" value="project mentoring" placeholder="Solution" id="project" name="solution"></input>
                  <label className="text-xs ml-2" for="project">Project Mentoring</label>
                </div>
              </div>
              <p className="text-left text-sm mx-5 text-center lg:text-left lg:mx-12 mt-10 mb-2">What do you want from us?</p>
              <textarea
                rows="4"
                className="rounded border-[1px] border-black mx-12 p-3 text-xs mb-2"
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
    </div>
  );
}

export default Contact;
