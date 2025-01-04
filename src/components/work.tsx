const data = [
  {
    duration: 'Nov 2020 - Present',
    title: 'Full Stack Software Engineer, 4gl',
    responsibilities: [
      'Developed and maintained highly scalable web applications using React, TypeScript, and Node.js.',
      'Designed RESTful APIs and implemented server-side logic with Express and TypeORM',
      'Implemented dynamic and responsive UIs using React, Redux, and Material-UI.',
      'Worked closely with designers to integrate UI/UX designs into functional applications.',
      'Enhanced application performance by optimizing client-server communication.',
      'Collaborated with cross-functional teams to gather requirements and deliver feature-complete products.',
      'Integrated CI/CD pipelines to automate testing and deployment, improving release efficiency.',
      'Refactored legacy codebases, improving maintainability and readability.',
      'Introduced best practices for state management, resulting in faster rendering and reduced bugs.',
    ],
  },
];

export const Work = () => {
  return (
    <div className="work-section">
      <div className="section-title">EMPLOYMENT HISTORY</div>
      {data.map((item) => (
        <div className="work" key={item.title}>
          <div className="work-duration">{item.duration}</div>
          <div className="work-content">
            <div className="work-title">{item.title}</div>
            <ul className="work-responsibilities">
              {item.responsibilities.map((responsibility, index) => (
                <li
                  className="responsibility"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: responsibility }}
                />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
