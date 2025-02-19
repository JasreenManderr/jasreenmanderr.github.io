import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <div className="max-w-5xl mt-7">
        <h1 className="text-4xl md:text-8xl text-center">About me</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img alt="Personal headshot" src="/images/pfp.png" />

          <div className="mt-7">
            <br />
            <p className="text-xl" id="hello-text">
              Hello
            </p>
            <br />
            <br />
            <h2 className="text-4xl font-bold">I'm Jasreen 🌸</h2>
            <br />
            <br />
            <p>I'm a UI designer and a creative thinker who creates</p>
            <br />
            <p>Intuitive, user-centered designs that don't just look good --</p>
            <br />
            <p>they work</p>
          </div>
        </div>
        <br />
        <h3 className="text-2xl">My design journey so far</h3>
        <br />
        <p>
          I’m currently in the process of completing my undergraduate degree at
          Brock University in Interactive Arts and Science with a concentration
          in digital prototyping.
        </p>

        <p>
          I’m passionate about all aspects of design and have 3 years of
          experience in 2D Art, Illustration, VFX Animation, and app and web
          design.
        </p>
        <br />
        <div className="flex flex-col md:flex-row max-w-3xl gap-96 ">
          <div className="">
            <h3 className="text-2xl">💡Skills</h3>
            <ul>
              <li className="list-disc ml-10">{"\t"}Graphic Design</li>
              <li className="list-disc ml-10">2D Art</li>
              <li className="list-disc ml-10">Prototyping</li>
              <li className="list-disc ml-10">Wireframing</li>
              <li className="list-disc ml-10">Testing</li>
              <li className="list-disc ml-10">Research</li>
              <li className="list-disc ml-10">Web Design</li>
              <li className="list-disc ml-10">Critical Thinking</li>
              <li className="list-disc ml-10">Creative Problem Solving</li>
              <li className="list-disc ml-10">Animation</li>
              <li className="list-disc ml-10">Documentation</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl">💻Software</h3>
            <br />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center mb-3">
                <img src="/images/softwareicon.png" alt="software icon" />
              </li>
              <li className="flex items-center mb-3">
                <img src="/images/figmaicon.png" alt="figma icon" />
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="/images/adobeillustratoricon.png"
                  alt="Adobe illustrator icon"
                />
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="/images/unitygameengineicon.png"
                  alt="Unity game engine icon"
                />
              </li>
              <li className="flex items-center mb-3">
                <img
                  src="/images/adobephotoshopicon.png"
                  alt="Adobe photoshop icon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginLeft: "30%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
