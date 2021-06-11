import { ReactComponent as CloseIcon } from "./times-circle-solid.svg";
import { useState } from "react";
import Button from "./Button";
export default function ContactModal({ toggleQuestionnaire }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div
        className="fixed w-full h-full bg-transparent overflow-hidden z-20 flex justify-center items-center"
        onClick={toggleQuestionnaire}
      >
        <div
          className="fixed w-100 h-100 bg-white flex flex-col justify-start items-center rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <CloseIcon
            onClick={() => toggleQuestionnaire()}
            className="w-6 self-end mr-1 mt-2 "
          />

          <h2 className="text-4xl font-bold mt-10">Contact Me</h2>
          <input
            type="text"
            className="h-10 border border-gray-200 w-52 rounded-lg mt-5"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="fullName"
            placeholder="Your Name"
            autoComplete="off"
          />
          <input
            type="email"
            className="h-10 border border-gray-200 w-52 rounded-lg mt-5"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Your Email"
            autoComplete="off"
          />
          <input
            type="phone"
            className="h-10 border border-gray-200 w-52 rounded-lg mt-5"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            placeholder="Your Phone Number"
            autoComplete="off"
          />
          <div className="mt-6">
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
}
