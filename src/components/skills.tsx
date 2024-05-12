const skills = [
  'Typescript',
  'Javascript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Postgresql',
  'Typeorm',
  'Nostr',
  'React.js',
  'Redux',
  'Material UI',
  'Bootstrap',
  'HTML',
  'CSS',
  'Git',
  'Github Actions',
];

export const Skills = () => {
  const skillSetLength = skills.length;

  return (
    <div className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="section-content">
        {skills.map((skill, index) => (
          <div className="item">
            {skill}
            {index + 1 !== skillSetLength && <span>,</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
