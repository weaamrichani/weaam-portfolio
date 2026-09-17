import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Navbar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ShowcaseSection></ShowcaseSection>
      <FeatureCards></FeatureCards>
      <ExperienceSection></ExperienceSection>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
