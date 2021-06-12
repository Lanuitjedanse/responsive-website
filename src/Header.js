export default function Header() {
  return (
    <>
      <nav className="flex justify-between z-20 bg-white">
        <div className="flex items-center">
          <img
            className="w-36 p-2 ml-5"
            src="/geers-logo.png"
            alt="geers logo"
          />
        </div>
        <div className="p-4">
          <h4 className="xs:hidden">Kostenlose Fachberatung</h4>
          <h3 className="text-geers-green font-extrabold text-xl">
            030 3080 7688
          </h3>
          <h4 className="xs:hidden">Mo - Fr 8 - 20 Uhr</h4>
          <h4 className="xs:hidden">Sa 9 - 18 Uhr</h4>
        </div>
      </nav>
    </>
  );
}
