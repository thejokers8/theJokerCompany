import React from "react";


function Contact({ contact }) {
  return (
    <>
      {contact.contact && (
        <p className="email-joker font-bold text-sm">Contact: {contact.contact}</p>
      )}
      {contact.repository && (
        <a
          className="check animate-pulse text-base w-1/2 text-black"
          target="_blank"
          href={contact.repository}
        >
          Check out my repository
        </a>
      )}
    </>
  );
}

export default Contact;
