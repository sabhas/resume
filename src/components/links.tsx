const data: { [key: string]: string } = {
  Portfolio: 'https://portfolio.sabhas.me',
  Blog: 'https://blog.sabhas.me',
  Resume: 'https://resume.sabhas.me',
  Github: 'https://github.com/sabhas',
  Linkedin: 'http://www.linkedin.com/in/sabir-hassan-8b1484140/',
  StackOverflow: 'https://stackoverflow.com/users/12763092/sabir-hassan',
  'Wordle Game': 'https://wordle.sabhas.me',
  'P2P Chat': 'https://peer-chat.sabhas.me',
  'Group Chat': 'https://group-chat.sabhas.me'
}

export const Links = () => {
  return (
    <div className='links-section'>
      <div className='section-title'>LINKS</div>
      <div className='section-content'>
        {Object.keys(data).map((key) => (
          <>
            <a
              className='link-item'
              href={data[key]}
              target='_blank'
              rel='noopener noreferrer'
            >
              {key}
            </a>
          </>
        ))}
      </div>
    </div>
  )
}
