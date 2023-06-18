const data = [
  'Typescript,',
  'Javascript,',
  'Node.js,',
  'Express.js,',
  'MongoDB,',
  'Postgresql,',
  'Type ORM,',
  'React.js,',
  'Redux,',
  'Material UI,',
  'Bootstrap,',
  'HTML,',
  'CSS,',
  'Git,',
  'Github Actions'
]

export const Skills = () => {
  return (
    <div className='skills-section'>
      <div className='section-title'>SKILLS</div>
      <div className='section-content'>
        {data.map((skill) => (
          <div className='item'>{skill}</div>
        ))}
      </div>
    </div>
  )
}
