const data = ['Chess', 'Table Tennis', 'Reading', 'Blogging']

export const Hobbies = () => {
  return (
    <div className='hobbies-section'>
      <div className='section-title'>HOBBIES</div>
      <div className='section-content'>
        {data.map((skill) => (
          <div className='item'>{skill}</div>
        ))}
      </div>
    </div>
  )
}
