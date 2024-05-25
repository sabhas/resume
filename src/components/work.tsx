const data = [
  {
    duration: 'Nov 2020 - Present',
    title: 'Full Stack Software Engineer, 4gl',
    responsibilities: [
      'Architected and developed RESTful APIs using Node.js and Express, improving system scalability by 40% and handling over 1 million requests per day.',
      'Collaborated with engineering team to brainstorm and implement three new features, resulting in a 15% increase in user engagement and a 10% boost in customer satisfaction.',
      'Conducted peer code reviews and debugging sessions, reducing code defects by 25% and enhancing code quality',
      'Implemented industry best practices such as code reviews, automated testing, and continuous integration, resulting in a 50% reduction in production bugs.',
      'Collaborated with customers to gather detailed requirements, leading to a 20% increase in project clarity and efficiency',
      'Diagnosed and resolved technical issues, reducing customer support tickets by 30%',
      'Led comprehensive testing and debugging initiatives for existing features using unit and integration tests. Ensured adherence to coding standards and best practices, resulting in a 25% decrease in critical bugs and a 15% improvement in code stability.',
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
