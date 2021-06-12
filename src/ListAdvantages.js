import Button from "./Button";

export default function ListAdvantages({ toggleQuestionnaire }) {
  const list = [
    {
      text: "Teil der Sonova Gruppe: weltweit Nr. 1 für innovative Hörlosungen",
    },
    {
      text: "91,4 % Kundenzufriedenheit (mit sehr gut)",
    },
    {
      text: "91,2 % würden GEERS Ihren Freunden oder Kollegen weiterempfehlen",
    },
  ];

  const certificatesImg = [
    {
      img: "certificate1.png",
      text: "Service Garantie",
    },
    {
      img: "certificate2.png",
      text: "Best-Preis Garantie",
    },
    {
      img: "certificate3.png",
      text: "Zufriedenheits Garantie",
    },
  ];
  return (
    <>
      <div className="flex w-full justify-center mt-5 mb-10">
        <div className="flex items-center justify-center h-full xs:flex-col">
          <div className="flex flex-col w-1/2 xs:mb-10">
            {list &&
              list.map((info, i) => (
                <div className="flex items-center mt-5" key={i}>
                  <img
                    className="w-6  mr-6"
                    src="grey-tick.png"
                    alt="grey tick icon"
                  />
                  <p className="text-lg font-bold">{info.text}</p>
                </div>
              ))}{" "}
          </div>
          <div className="flex flex-col w-100 h-52 items-center">
            <div className="flex justify-center mb-10">
              {certificatesImg &&
                certificatesImg.map((certificate, i) => (
                  <div className="info-box" key={i}>
                    <img
                      className="text-lg font-bold p-2 object-cover xs:w-28"
                      src={certificate.img}
                      alt={certificate.name}
                    />
                  </div>
                ))}
            </div>
            <Button toggleQuestionnaire={toggleQuestionnaire}>
              Ja, ich will besser hören
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
