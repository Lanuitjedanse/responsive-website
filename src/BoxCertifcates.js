import Button from "./Button";

export default function BoxCertificates({ toggleQuestionnaire }) {
  return (
    <>
      <div className="h-full bg-geers-blue flex items-center xs:bg-white sm:bg-white md:bg-white">
        <div className="flex flex-col items-center justify-around h-96 w-96 bg-white border-1 mr-10 border-gray-50 xs:mr-0 xs:w-96 xs:h-100 sm:w-100 sm:-h100 md:w-100 md:h-100">
          <h2 className="text-4xl font-extrabold text-center p-2 xs:text-3xl">
            Das richtige Hörgerät verbessert mehr als nur Ihr Hören.
          </h2>
          <Button toggleQuestionnaire={toggleQuestionnaire}>
            Jetzt Hörgeräte kostenlos testen
          </Button>
          <div className="flex items-center justify-evenly w-full">
            <img src="/banner-certificate1.png" alt="first place competition" />
            <img src="/banner-certificate2.png" alt="first place competition" />
            <img src="/banner-certificate3.png" alt="first place competition" />
            <div className="flex flex-col justify-center">
              <img
                className="h-5"
                src="/rating-banner.png"
                alt="first place competition"
              />
              <span className="text-md font-bold">4,75/5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
