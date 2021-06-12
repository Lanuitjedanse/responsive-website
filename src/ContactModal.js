import { ReactComponent as CloseIcon } from "./times-circle-solid.svg";
import { useState } from "react";
import Button from "./Button";

export default function ContactModal({ toggleQuestionnaire }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [renderView, setRenderView] = useState(0);

  const submitInfo = (e) => {
    e.preventDefault();
    fetch("https://httpbin.org/post", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    }).then(function (response) {
      setName("");
      setEmail("");
      setPhone("");
      setRenderView(renderView + 1);
      console.log("response.data", response);
    });
  };

  return (
    <>
      <div
        className="fixed w-full h-full bg-transparent overflow-hidden z-20 flex justify-center items-center"
        onClick={toggleQuestionnaire}
      >
        {renderView === 0 && (
          <div
            className="fixed w-100 h-100 bg-white flex flex-col justify-start items-center rounded-lg xs:w-screen"
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
                setName(e.target.value.trim());
              }}
              name="fullName"
              placeholder="Your Name"
              autoComplete="off"
            />
            <input
              type="email"
              className="h-10 border border-gray-200 w-52 rounded-lg mt-5"
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
              name="email"
              placeholder="Your Email"
              autoComplete="off"
            />
            <input
              type="phone"
              className="h-10 border border-gray-200 w-52 rounded-lg mt-5"
              onChange={(e) => {
                setPhone(e.target.value.trim());
              }}
              name="phone"
              placeholder="Your Phone Number"
              autoComplete="off"
            />
            <div className="mt-6">
              <Button
                errors={!name || !email || !phone ? true : false}
                toggleQuestionnaire={(e) => submitInfo(e)}
              >
                Send
              </Button>
            </div>
          </div>
        )}
        {renderView === 1 && (
          <div
            className="fixed w-100 h-100 bg-white flex flex-col justify-start items-center rounded-lg xs:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseIcon
              onClick={() => toggleQuestionnaire()}
              className="w-6 self-end mr-1 mt-2 "
            />
            <h2 className="text-4xl font-bold text-center">
              Thank you for sending your information!
            </h2>
            <p className="text-center mt-5">
              Someone will get in touch with you as soon as possible!
            </p>
            <div>
              <iframe
                title="giphy"
                src="https://giphy.com/embed/zBoecJFTosf5e"
                width="100%"
                height="100%"
                frameBorder="0"
                className="giphy-embed mt-5"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
