const data = [
  {
    duration: 'May 2023 - Present',
    title: 'NQuiz',
    link: '',
    description:
      'NQuiz is a gamified quiz platform that rewards content creators with Bitcoin (zaps).',
    responsibilities: [
      'Technologies Used: Typescript, Node.js, Express.js, Nostr, Postgresql, Typeorm and React.js',
      'My responsibility is to design DB, implement API and implement UI with React.js'
    ]
  },
  {
    duration: 'May 2021 - Present',
    title: 'SASJS Server',
    link: 'https://github.com/sasjs/server',
    description:
      'It provides a NodeJS wrapper for calling the SAS, Python, Node.js and R binary executable',
    responsibilities: [
      'Technologies Used: Typescript, Node.js, Express.js, MongoDB and React.js',
      'It has virtual filesystem for storing programs and other content, also the ability to execute Stored Programs from a URL and has REST API with Swagger Docs',
      'The web component incorporates a Monaco editor for program editing, creation, and saving on a virtual filesystem',
      'My responsibility is to add new requested features, write unit tests for api endpoints and fix bugs reported by users'
    ]
  },
  {
    duration: 'May 2021 - Present',
    title: 'SASJS VSCode-Extension',
    link: 'https://github.com/sasjs/vscode-extension',
    description: `It's a vscode extension written in Typescript for <a href="https://github.com/sasjs" target="_blank">SASJS</a> based projects and files containing .sas extension.`,
    responsibilities: [
      'Generate HTML docs from SAS code; Run SAS code; Lint and Format SAS code',
      '"syncDirectories" feature lets you map one or more LOCAL (on your laptop) directories with one or more REMOTE (on the SAS server) directories.',
      'Compile build and deploy SAS programs to remote servers',
      'My responsibility is to add new requested features and fix bugs reported by users.'
    ]
  }
  //   {
  //     duration: 'May 2021 - Present',
  //     title: 'SASJS CLI',
  //     description:
  //       'It is a Command-Line Interface to assist with creating, building, and deploying Data Science projects and HTML5 Web Applications on the SAS platform.',
  //     responsibilities: [
  //       'My responsibility is to add new features, write unit tests and fix bugs reported by users.'
  //     ]
  //   },
  //   {
  //     duration: 'May 2021 - Present',
  //     title: 'SASJS Adapter',
  //     description:
  //       'An adapter for bidirectional SAS® <-> Javascript communication',
  //     responsibilities: [
  //       'My responsibility is to add new features, write unit tests and fix bugs reported by users.'
  //     ]
  //   }
]

export const Projects = () => {
  return (
    <div className='project-section'>
      <div className='section-title'>Projects</div>
      {data.map((item) => (
        <div className='project' key={item.title}>
          <div className='project-title'>
            <span>
              {item.title}
              {item.link && (
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  <img src='new-tab.svg' />
                </a>
              )}
            </span>
            <span className='duration'>({item.duration})</span>
          </div>
          <div className='project-content'>
            <div
              className='description'
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
            <ul className='project-responsibilities'>
              {item.responsibilities.map((responsibility, index) => (
                <li
                  className='responsibility'
                  key={index}
                  dangerouslySetInnerHTML={{ __html: responsibility }}
                />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
