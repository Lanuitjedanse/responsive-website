export default function Steps() {
  const steps = [
    {
      img: "/Step1.png",
      text: "Anmeldung in nur 1 Minute",
    },
    {
      img: "/Step3.png",
      text: "Kostenlose Beratung und unverbindlich testen",
    },
    {
      img: "/Step2.png",
      text: "Perfekt hören und neues Lebensgefühl entdecken",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center mt-5 mb-5 p-3">
          Einfach besser hören. In nur 3 Schritten.
        </h2>
        <div className="flex justify-center xs:flex-col mb-10 sm:flex-col">
          {steps &&
            steps.map((step, i) => (
              <div className="flex flex-col w-80 mr-4 " key={i}>
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-40 mt-2"
                    src={step.img}
                    alt="grey tick icon"
                  />
                  <p className="bg-black text-white font-bold rounded-full h-10 w-10 text-4xl text-center mt-7 z-10">
                    {i + 1}
                  </p>

                  <p className="text-md font-bold text-center mt-5 mb-5 w-48">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="border-b-2 border-black w-200 absolute mt-80 xs:hidden sm:hidden md:visible lg:visible"></div>
      </div>
    </>
  );
}
