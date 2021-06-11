export default function Reviews() {
  const reviews = [
    {
      img: "/birgit.jpeg",
      text:
        "Sehr netter Kontakt und super kompetent. Sie nehmen sich wirklich viel Zeit. Immer wieder Geers.",
      name: "Birgit M.",
      rate: "/rate1.png",
    },
    {
      img: "/thomas.jpeg",
      text:
        "Freundliche und vor allem kompetente Beratung. Seit 3 Tagen nehme ich die Welt und ihre Geräusche wieder wahr. Jetzt wird hören gelernt.",
      name: "Thomas R.",
      rate: "/rate2.png",
    },
    {
      img: "/susanne.jpeg",
      text:
        "Ich kann nur sagen, ich bin begeistert. Handhabung, Klang, Qualität und Funktion sind top. Eine gute Investition für mehr Lebensfreude!",
      name: "Susanne D.",
      rate: "/rate3.png",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center w-full bg-gray-100 xs:flex-col">
        {reviews &&
          reviews.map((review, i) => (
            <div
              className="flex flex-col justify-around w-72 h-80 bg-white border-2 items-start mt-10 mr-10 mb-5 xs:mr-0"
              key={i}
            >
              <div className="h-3/4">
                <img
                  className="mt-5 mb-2 ml-5 w-20 h-20 rounded-full object-cover mr-6"
                  src={review.img}
                  alt="grey tick icon"
                />
                <p className="ml-5 ">{review.text}</p>
              </div>
              <div className="flex flex-col justify-end h-1/4 mb-5">
                <p className="ml-5 text-lg font-bold ">{review.name}</p>
                <img
                  className="w-20 mr-6 ml-5"
                  src={review.rate}
                  alt="grey tick icon"
                />
              </div>
            </div>
          ))}{" "}
      </div>
    </>
  );
}
