const data = [
  {
    duration: 'Sep 2020',
    name: 'Front-End Web Development with React, Coursera',
    link: 'https://www.coursera.org/account/accomplishments/certificate/C6Q8TK7GNHNA'
  },
  {
    duration: 'Sep 2020',
    name: 'Front-End Web UI Frameworks and Tools: Bootstrap 4, Coursera',
    link: 'https://www.coursera.org/account/accomplishments/certificate/NTYF96FDL3Y9'
  }
]

export const Certificates = () => {
  return (
    <div className='certificates-section'>
      <div className='section-title'>CERTIFICATES</div>
      {data.map((certificate) => (
        <div className='certificate'>
          <div className='duration'>{certificate.duration}</div>
          <a
            className='name'
            href={certificate.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {certificate.name}
          </a>
        </div>
      ))}
    </div>
  )
}
