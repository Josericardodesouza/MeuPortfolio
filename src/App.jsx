
import { useState } from 'react'
import './App.css'
import './assets/styles/colorsAndFonts.css'
import AboutMe from './assets/components/AboutMe'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'

import photo from './assets/imgs/pexels-pixabay-41162.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {


  const [ativarComponente, setAtivarComponente] = useState(null)



  const displayContent = () => {

    switch (ativarComponente) {

      case 'sobremim':
        return <AboutMe />

      case 'projetos':
        return <Projects />

      case 'habilidades':
        return <Skills />

      default:
        return <AboutMe />
    }


  }

  return (
    <>

    <header>

      <div id='title_header'>
        <h1> &lt; José R. de Souza /&gt;</h1>
      </div>

      <div id='header_icons'>
        <FaGithub />
        <FaLinkedin />

        


      </div>
      


    </header>

    <main>

      <nav>

        <div id='box_1'>

           <img src={photo} alt="" />

        </div>

        <div id='box_2'>

          <ul id='list_buttons'>
            <li>
            <button onClick={() => setAtivarComponente('sobremim')}>Sobre mim</button>
            </li>

            <li>
            <button onClick={() => setAtivarComponente('projetos')}>Projetos</button>
            </li>

            <li>
            <button onClick={() => setAtivarComponente('habilidades')}>Habilidades</button>
            </li>
          </ul>

         
        
    


        </div>
     


      </nav>

      <section id='content'>
        {displayContent()}


      </section>

    </main>

    <footer>

    </footer>


      
    </>
  )
}

export default App
