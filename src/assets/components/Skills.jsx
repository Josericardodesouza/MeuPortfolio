import { FaCss3 } from "react-icons/fa"
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa6"

import image from '../imgs/svgs/undraw_code-review_ept3.svg'

import '../styles/styles-components.css'
import '../styles/skills-module.css'

function Skills() {
    return (
        <>

        <main className="component">

        <div className="conteiner">
            <div className="titles_box">
                <h2 className="title_content">Habilidades</h2>
                
                 <p className="subtitle_content">Abaixo estão as tecnologias que domino ou estou estudando no momento</p> 
            </div>

            <div className="box_img" id="box_img_skills">
                <img src={image} alt="" />

            </div>
        </div>

        <div id="conteiner_icons_skills">
            <div id="box_html5" className="box_tech">
            <FaHtml5 />
            <p>HTML5</p>
            </div>

            <div id="box_css3" className="box_tech">
            <FaCss3Alt />
            <p>CSS3</p>
            </div>

            <div id="box_js" className="box_tech">
                <FaJs />
                <p>JavaScript</p>
            </div>

            <div id="box_react" className="box_tech">
                <FaReact />
                <p>React</p>
            </div>

            <div id="box_git" className="box_tech">
                <FaGitAlt />
                <p>GIT</p>

            </div>
         
     

          

        </div>
        
        </main>

      
        
        
        
        
        </>
    )
}

export default Skills