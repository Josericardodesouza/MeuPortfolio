
import { useState } from 'react'
import './App.css'
import AboutMe from './assets/components/AboutMe'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'

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
    }


  }

  return (
    <>

    <header>

      <h1>Bem-vindo(a) ao meu portfólio!</h1>


    </header>

    <main>

      <nav>

        <div id='box_1'>

           <img src="" alt="" />

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
