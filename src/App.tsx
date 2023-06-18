import { Certificates } from './components/certificates'
import { Education } from './components/education'
import { Header } from './components/header'
import { Hobbies } from './components/hobbies'
import { Links } from './components/links'
import { Profile } from './components/profile'
import { Skills } from './components/skills'
import { Work } from './components/work'

function App() {
  return (
    <div className='page'>
      <Header />
      <div className='section-divider'></div>
      <Links />
      <div className='section-divider'></div>
      <Profile />
      <div className='section-divider'></div>
      <Skills />
      <div className='section-divider'></div>
      <Work />
      <div className='section-divider'></div>
      <Education />
      <div className='section-divider'></div>
      <Certificates />
      <div className='section-divider'></div>
      <Hobbies />
    </div>
  )
}

export default App
