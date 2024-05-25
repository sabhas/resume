const data = [
  {
    duration: 'Nov 2020 - Present',
    title: 'Full Stack Software Engineer, 4gl',
    responsibilities: [
      'Designed and Implemented scalable application programming interfaces.',
      'Paired with fellow engineers to brainstorm ideas, debug problems, and review code.',
      'Adopted best coding practices and delivered the highest quality scalable solutions.',
      'Worked with customers to define requirements and troubleshoot issues.',
      'Contributed in the development and maintenance of the <a href="https://github.com/sasjs" target="_blank">SASJS</a> framework.',
      'Tested, fixed, and refactored existing features to uphold coding standards.',
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
