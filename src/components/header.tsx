const data = {
  name: 'Sabir Hassan',
  title: 'Software Engineer',
  city: 'Lahore',
  country: 'Pakistan',
  phone: '+923361196786',
  email: 'sabirbk06@gmail.com'
}

export const Header = () => {
  return (
    <div className='header'>
      <div className='name'>
        {data.name}, {data.title}
      </div>
      <div className='info-item'>
        <img src='location.ico' alt='location' className='info-icon' />
        {data.city}, {data.country}
      </div>
      <div className='info-item'>
        <img src='phone.ico' alt='phone' className='info-icon' />
        {data.phone}
      </div>
      <div className='info-item'>
        <img src='email.ico' alt='email' className='info-icon' />
        {data.email}
      </div>
    </div>
  )
}
