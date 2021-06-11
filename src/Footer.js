export default function Footer() {
  return (
    <div className="flex flex-col bg-geers-gray text-white justify-center items-center h-20 text-xs">
      <div>
        <a
          href="https://info.geers.de/impressum/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Impressum
        </a>{" "}
        |{" "}
        <a
          href="https://info.geers.de/datenschutz/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Datenschutz
        </a>
      </div>
      <p>Copyright © 2021 Sonova AG. All rights reserved.</p>
    </div>
  );
}
