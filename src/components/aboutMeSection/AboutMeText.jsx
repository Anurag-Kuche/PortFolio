import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Anurag Dinesh Kuche, a passionate full-stack developer with
        expertise in React and the MERN stack. Currently a final-year student, I
        have built projects like MovieMate.REACT, GroovePlay, and Prescripto. I
        am an intern at Anvistar ITS Pvt. Ltd., gaining hands-on experience in
        software development. My strong problem-solving skills help me tackle
        DSA and real-world challenges. I was a college rank holder and actively
        contributed to ACES and FESA. Always eager to learn, I strive to build
        efficient and scalable web applications.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;