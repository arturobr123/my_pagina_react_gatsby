import React from 'react';

function ContactForm(){
  return(
    <form className="mt-16 text-center">
      <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-2">Cuentame esa idea que quieres hacer realidad:</label>

      <div className="flex shadow rounded bg-white borderp-2">
        <textarea
          className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="contact-content"
          name="contact-content">
        </textarea>
        <button className="btn">Enviar</button>
      </div>

    </form>
  );
}

export default ContactForm;
