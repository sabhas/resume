const data = [
  {
    duration: 'Jan 2024 - Present',
    title: 'Sigit',
    link: 'https://git.nostrdev.com/sigit/sigit.io',
    description:
      'An open-source and self-hostable solution for secure document signing and verification',
    responsibilities: [
      `<span style="font-weight: bold;">Technologies Used:</span> Typescript, React, Nostr Protocols`,
      '<span style="font-weight: bold;"> Features: </span> Create, Sign and Verify documents and files. ' +
        'Documents are encrypted locally and can be accessed only by named recipients. ' +
        'Choose any number of Signers and Viewers, track status, get notifications on completion.',
      '<span style="font-weight: bold;"> Responsibilities: </span> Designed and implemented the whole architecture of the app.',
    ],
  },
  {
    duration: 'May 2023 - Present',
    title: 'NQuiz',
    link: 'https://js.nquiz.io',
    description:
      'A gamified quiz platform rewarding content creators with Bitcoin (zaps).',
    responsibilities: [
      `<span style="font-weight: bold;"> Technologies Used: </span> Typescript, Node.js, Express.js, Nostr, Postgresql, Typeorm, and React.js`,
      '<span style="font-weight: bold;"> Responsibilities: </span> Designed database structure, developed APIs, and implemented UI with React.js.',
    ],
  },
  {
    duration: 'May 2021 - Present',
    title: 'SASJS Server',
    link: 'https://github.com/sasjs/server',
    description:
      'A Node.js wrapper facilitating calls to SAS, Python, Node.js, and R executable binaries.',
    responsibilities: [
      `<span style="font-weight: bold;">Technologies Used:</span> Typescript, Node.js, Express.js, MongoDB, React.js`,
      '<span style="font-weight: bold;"> Features: </span> Virtual filesystem for program storage, ability to execute Stored Programs from URLs, REST API with Swagger Docs, integrated Monaco editor.',
      '<span style="font-weight: bold;"> Responsibilities: </span> Added new features, wrote unit tests for APIs, and resolved user-reported bugs.',
    ],
  },
  {
    duration: 'May 2021 - Present',
    title: 'SASJS VSCode-Extension',
    link: 'https://github.com/sasjs/vscode-extension',
    description: `A TypeScript-based VS Code extension tailored for <a href="https://github.com/sasjs" target="_blank">SASJS</a> projects and .sas files.`,
    responsibilities: [
      '<span style="font-weight: bold;"> Features: </span> HTML documentation generation, SAS code execution, linting, formatting, and syncDirectories capability',
      '<span style="font-weight: bold;"> Responsibilities: </span> Implemented requested features and addressed user-reported bugs.',
    ],
  },
  {
    duration: 'May 2021 - Present',
    title: 'SASJS CLI',
    link: 'https://github.com/sasjs/cli',
    description:
      'A Command-Line Interface streamlining Data Science projects and HTML5 Web Application deployment on the SAS platform.',
    responsibilities: [
      '<span style="font-weight: bold;"> Responsibilities: </span> Developed new features, wrote unit tests, and resolved user-reported issues.',
    ],
  },
  {
    duration: 'May 2021 - Present',
    title: 'SASJS Adapter',
    link: 'https://github.com/sasjs/adapter',
    description: 'Bidirectional SAS® <-> JavaScript communication adapter.',
    responsibilities: [
      '<span style="font-weight: bold;"> Responsibilities: </span> Added features, conducted unit testing, and addressed user-reported bugs.',
    ],
  },
];

export const Projects = () => {
  return (
    <div className="project-section">
      <div className="section-title">Projects</div>
      {data.map((item, index) => (
        <div
          className="project"
          style={{
            marginTop: index === 0 ? '-15px' : '',
          }}
          key={item.title}
        >
          <div className="project-title">
            <span>
              {item.title}
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src="new-tab.svg" />
                </a>
              )}
            </span>
            <span className="duration">({item.duration})</span>
          </div>
          <div className="project-content">
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
            <ul className="project-responsibilities">
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
