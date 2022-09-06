import React from "react";


function Contact({ contact }) {
  return (
    <>
      {contact.contact && (
        <p className="email-joker font-bold mt-2 text-left text-sm">Contact: {contact.contact}</p>
      )}
      {contact.repository && (
        <a
          className="check animate-pulse text-sm w-1/2 text-black text-left"
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
