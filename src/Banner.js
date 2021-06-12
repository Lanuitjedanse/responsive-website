import "./Banner.css";

export default function Banner({ children, bannerImg, height }) {
  return (
    <>
      <div
        className={`flex bg-cover ${height} ${
          height === "h-100" && "xs:h-1/2 sm:h-1/4 md:h-1/4 "
        } xs:w-screen sm:w-screen md:w-screen items-center justify-end 
        xs:flex-col sm:flex-col md:flex-col`}
      >
        <img
          className="object-cover w-full h-full"
          src={bannerImg}
          alt={bannerImg}
        />
        {children}
      </div>
    </>
  );
}
