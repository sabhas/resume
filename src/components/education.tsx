const data = [
  {
    duration: 'Aug 2016 - July 2020',
    school: `FAST - National University of Computer and Emerging Sciences`,
    program: `Bachelor's of Computer Science`,
    courses: [
      'Object Oriented Programming',
      'Data Structures and Algorithms',
      'Database Designs',
      'Human Computer Interactions',
      'Computer Networks',
      'Network Securities',
      'Web Development'
    ]
  }
]

export const Education = () => {
  return (
    <div className='education-section'>
      <div className='section-title'>EDUCATION</div>
      {data.map((item) => (
        <div className='education'>
          <div className='duration'>{item.duration}</div>
          <div className='content'>
            <div className='title'>
              {item.program} at {item.school}
            </div>
            <div>
              <p>Following are my main subjects in this degree program:</p>
              <ul className='courses'>
                {item.courses.map((course) => (
                  <li className='course'>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
