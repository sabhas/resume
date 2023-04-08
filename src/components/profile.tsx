const profileSummary =
  'As an accomplished software engineer with 3+ years of experience in Node.js and React.js, I possess a strong foundation in full-stack web development and have a proven track record of delivering complex projects on time. With a passion for clean code and best practices, I have expertise in API development, component-based architecture and testing frameworks. Through my experience in developing sasjs framework (a framework for SAS developers), I have demonstrated my ability to collaborate effectively with cross-functional teams and deliver solutions that exceed expectations. With a commitment to staying up-to-date on emerging technologies and a dedication to continuous learning, I am well-equipped to drive innovation and contribute to the success of any organization.'

export const Profile = () => {
  return (
    <div className='profile-section'>
      <div className='section-title'>PROFILE</div>
      <div className='profile-summary'>{profileSummary}</div>
    </div>
  )
}
