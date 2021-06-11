export default function ContentImgBox({
  img,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  orientation,
}) {
  return (
    <>
      {orientation === "left" && (
        <div className="flex w-full justify-center h-100 mt-10 mb-10 xs:h-full">
          <div className="flex items-center justify-center h-full xs:flex-col">
            <div className="flex flex-col w-1/2 xs:w-full">
              <img
                className="w-100 h-100 object-cover xs:w-full"
                src={img}
                alt="I this alt for now"
              />
            </div>
            <div className="flex flex-col w-100 h-100 bg-gray-100 justify-around xs:flex-col xs:w-full xs:h-full">
              <p className="p-6">{firstParagraph}</p>
              <p className="p-6">{secondParagraph}</p>
              <p className="p-6">{thirdParagraph}</p>
            </div>
          </div>
        </div>
      )}
      {orientation === "right" && (
        <div className="flex w-full justify-center h-100 mt-10 mb-10 xs:h-full">
          <div className="flex items-center justify-center h-full xs:flex-col">
            <div className="flex flex-col w-100 h-100 bg-gray-100 justify-around xs:flex-col xs:w-full xs:h-full">
              <p className="p-6">{firstParagraph}</p>
              <p className="p-6">{secondParagraph}</p>
              <p className="p-6">{thirdParagraph}</p>
            </div>
            <div className="flex flex-col w-1/2 xs:w-full">
              <img
                className="w-100 h-100 object-cover xs:w-full"
                src={img}
                alt="I this alt for now"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
