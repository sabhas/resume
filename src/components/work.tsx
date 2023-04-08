const data = [
  {
    duration: 'Nov 2020 - Present',
    title: 'Full Stack Software Engineer, 4gl',
    responsibilities: [
      'Designed and Implemented scalable application programming interfaces.',
      'Paired with fellow engineers to brainstorm ideas, debug problems and review code.',
      'Adopted best coding practices and delivered highest quality scalable solutions.',
      'Worked with customers to define requirements and troubleshoot issues.',
      'Contributed in the development and maintenance of sasjs framework',
      'Tested existing features and fixed bugs.',
      'Refactored code to comply with clean code principles.',
      'Resolved user reported issues.'
    ]
  }
]

export const Work = () => {
  return (
    <div className='work-section'>
      <div className='section-title'>EMPLOYMENT HISTORY</div>
      {data.map((item) => (
        <div className='work'>
          <div className='work-duration'>{item.duration}</div>
          <div className='work-content'>
            <div className='work-title'>{item.title}</div>
            <ul className='work-responsibilities'>
              {item.responsibilities.map((responsibility) => (
                <li className='responsibility'>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
