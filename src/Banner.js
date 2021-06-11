import "./Banner.css";
import Button from "./Button";

export default function Banner({ children, bannerImg, height }) {
  return (
    <>
      <div
        className={`flex bg-cover ${height} items-center justify-end h-full xs:flex-col ${
          height === "banner-height" && "xs:mt-72"
        }`}
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
