import "../styles/components/maincontent.sass"

import AboutContainer from '../components/AboutContainer'
import ProjectContainer from './ProjectContainer'
import TechContainer from './TechContainer'

const MainContent = () => {
  return (
    <main id='main-content'>
        <AboutContainer></AboutContainer>

        <TechContainer></TechContainer>

        <ProjectContainer></ProjectContainer>
    </main>
  )
}

export default MainContent