"use client";
import React, { useState, ChangeEvent } from "react";
import TextInput from "../TextInput";
import fetchData from "../utils/fetchData";

export default function Calc() {
  const [nameValue, setNameValue] = useState<string>("");
  const [birthdateValue, setBirthdateValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  const handleBirthdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthdateValue(e.target.value);
  };

  const sendData = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetchData("/api/calc", {
      method: "POST",
      body: JSON.stringify({ birthdate: birthdateValue }),
      headers: { "Content-Type": "application/json" },
    });

    const { birthdate } = await res.json();

    setResponse(birthdate);
  };
  return (
    <div className="flex min-h-screen max-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inserisci il tuo nome e la data di nascita
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={sendData}>
          <div className="text-center">
            <TextInput
              label="name"
              labelValue="Come ti chiami?"
              value={nameValue}
              onChange={handleNameChange}
            />

            <TextInput
              label="birtdate"
              labelValue="Quando sei nato?"
              value={birthdateValue}
              onChange={handleBirthdateChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calcola
            </button>
          </div>
        </form>
      </div>
      <div className="flex-col justify-center text-center px-6 py-12 lg:px-8">
        <span className="">{response}</span>
      </div>
    </div>
  );
}
