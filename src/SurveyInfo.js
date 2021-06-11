export default function SurveyInfo() {
  const survey = [
    {
      number: "97%",
      text: "erleben eine verbesserte Lebensqualität",
    },
    {
      number: "95%",
      text: "empfinden Hörgeräte als wichtige Bereicherung im Beruf",
    },
    {
      number: "66%",
      text: "haben wieder mehr Freude an Gruppenaktivitäten",
    },
    {
      number: "61%",
      text: "genießen ein erfüllenderes Sozialleben",
    },
    {
      number: "56%",
      text: "fühlen sich im Alltag wieder sicherer",
    },
  ];
  return (
    <div className="flex flex-col w-4/5 m-auto">
      <h2 className="text-4xl font-bold self-start mt-10">
        Das sagen Menschen mit Hörgerät:*
      </h2>
      <div className="grid grid-cols-3 gap-6  mt-10 mb-10 xs:grid-cols-1">
        {survey &&
          survey.map((info, i) => (
            <div className="info-box" key={i}>
              <h2 className="text-geers-green text-4xl font-extrabold">
                {info.number}
              </h2>
              <p className="text-lg font-bold">{info.text}</p>
            </div>
          ))}

        <p className="mt-10">*EuroTrak-Studie 2018</p>
      </div>
    </div>
  );
}
