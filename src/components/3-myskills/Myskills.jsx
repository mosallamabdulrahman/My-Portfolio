import "./myskills.css";
import skills from "./data";


export default function Myskills() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">🛠️ My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-content">
              <div className={`icon-wrapper ${skill.iconClass}`}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.title}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
