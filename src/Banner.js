import "./Banner.css";
import Button from "./Button";

export default function Banner({ children, bannerImg, height }) {
  return (
    <>
      <div
        className={`flex bg-cover ${height} ${
          height === "h-100" && "xs:h-screen "
        } xs:w-screen items-center justify-end 
        xs:flex-col`}
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
