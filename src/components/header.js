import React from 'react';
import Ilustration from '../imgs/undraw_personal_finance_tqcd.svg';
import ContactForm from './ContactForm';

function Header(){
  return(
    <header className="bg-gray-300">

      <div className="container mx-auto p-12 max-w-4xl">

        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="text-6xl fond-bold">Hola Soy Arturo Bravo</h1>
            <p className="text-xl">Soy un software engineer</p>
          </div>
          <img src={Ilustration} alt="profile" style={{height:"300px"}}></img>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </header>
  );

}

export default Header;
