const profileSummary =
  'Experienced software engineer specializing in Node.js and React.js with a strong background in full-stack web development. Proven track record of delivering complex projects on time. Skilled in API development, component-based architecture, and testing frameworks.'

export const Profile = () => {
  return (
    <div className='profile-section'>
      <div className='section-title'>PROFILE</div>
      <div className='profile-summary'>{profileSummary}</div>
    </div>
  )
}
