import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiC, SiPython, SiCplusplus } from "react-icons/si";
import "./Skills.css";
export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-icons">
          <FaReact className="icon react" title="React" />
          <SiC className="icon c" title="C" />
          <SiCplusplus className="icon cpp" title="C++" />
          <FaJs className="icon js" title="JavaScript" />
          <FaHtml5 className="icon html" title="HTML5" />
          <FaCss3Alt className="icon css" title="CSS3" />
          <SiPython className="icon python" title="Python" />
          <FaGitAlt className="icon git" title="Git & GitHub" />
        </div>
      </section>
    </>
  );
}
