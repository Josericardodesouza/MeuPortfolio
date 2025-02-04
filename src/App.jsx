
import { useEffect, useRef, useState } from 'react'
import './App.css'
import './assets/styles/colorsAndFonts.css'
import AboutMe from './assets/components/AboutMe'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'

import photo from './assets/imgs/i-photo.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {




  const content = document.getElementById('content')



  const [ativarComponente, setAtivarComponente] = useState(null)



  const scroll = () => {


    useEffect(() => {
   

      if (window.innerWidth < 800 && content) {
        content.scrollIntoView({behavior:'smooth'})

      } else {

      }

    })
    
 
  }


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
        <a href="https://github.com/Josericardodesouza" target='blank'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jos%C3%A9-ricardo-de-souza-034a90317" target='blank'>
          <FaLinkedin />
        </a>

        


      </div>
      


    </header>

    <main id='top'>

      <nav>

        <div id='box_1'>

           <img src={photo} alt="" />

        </div>

       
        <p className='p_nav' id='title_dev'>Desenvolvedor</p>
        <div id='animated_title'>
       
          <p className='p_nav' id='title_front-end'>Front-End</p>
        </div>

        <div id='box_2'>

          <ul id='list_buttons'>
            <li onClick={scroll()}>
            <button onClick={() => setAtivarComponente('sobremim')}>Sobre mim</button>
            </li>

            <li onClick={scroll()}>
            <button onClick={() => setAtivarComponente('projetos')}>Projetos</button>
            </li>

            <li onClick={scroll()}>
            <button onClick={() => setAtivarComponente('habilidades')}>Habilidades</button>
            </li>
          </ul>

         
        
    


        </div>
     


      </nav>
      

      <section id='content'>
        {displayContent()}


      </section>

    </main>

    {/* <footer>

      <p>José R. de Souza &copy; 2025</p>

    </footer> */}


      
    </>
  )
}

export default App
