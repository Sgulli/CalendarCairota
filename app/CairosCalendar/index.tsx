import React, { useState, ChangeEvent } from "react";
import TextInput from "../TextInput";

export default function CairosCalendar() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inserisci il tuo nome e la data di nascita
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <TextInput
            label="name"
            labelValue="Come ti chiami?"
            value={inputValue}
            onChange={handleInputChange}
          />

          <TextInput
            label="birtdate"
            labelValue="Quando sei nato?"
            value={inputValue}
            onChange={handleInputChange}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calcola
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
