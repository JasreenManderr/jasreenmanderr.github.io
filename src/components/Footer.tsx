import { ARTSTATION_URL, LINKEDIN_URL } from "../Constants";

export default function Footer() {
  const onPressLinkedIn = () => {
    window.location.href = LINKEDIN_URL;
  };
  const onPressArtstation = () => {
    window.location.href = ARTSTATION_URL;
  };
  return (
    <>
      <div
        style={{ marginTop: "10%", maxWidth: 200, alignSelf: "center" }}
        id="footer"
      >
        <p>© 2025 - Jasreen Mander</p>
        <br />
        <div className="ml-6 grid grid-cols-2 gap-2">
          <div className="cursor-pointer" onClick={onPressLinkedIn}>
            <img
              alt="Linkedin icon to signify link to linkedin profile"
              src="/images/linkedin.png"
            />
          </div>
          <div className="cursor-pointer" onClick={onPressArtstation}>
            <img
              alt="Artstation icon to signify link to artstation profile"
              src="/images/artstation.png"
            />
          </div>
        </div>
        <br />
        <a href="mailto:jasreenmanderdesigns@gmail.com">
          jasreenmanderdesigns@gmail.com
        </a>
      </div>
    </>
  );
}
