import { FaGraduationCap, FaLaptop, FaUser } from 'react-icons/fa6'
import '../styles/styles-components.css'
import '../styles/aboutMe-module.css'
import { FaUserAlt } from 'react-icons/fa'
import { TbMoodNerd } from 'react-icons/tb'

import image from '../imgs/svgs/undraw_feeling-proud_tdos-oficial.svg'

function AboutMe() {
    return (
        <>

            <main className='component'>
                <div className="conteiner">
                    <div className='titles_box'>
                        <h2 className="title_content">Olá, mundo!</h2>
                         <p className='subtitle_content' id='aboutMe_subtitle'>Meu nome é José Ricardo e este é meu portfólio profissional. Aqui você encontrará meus projetos e as tecnologias em que tenho habilidades. Sinta-se à vontade para conhecer meu trabalho e minhas competências. Obrigado pela visita!
   
                            </p> 
                    </div>

        
                    <div className='box_img'>
                        <img src={image} alt="" />

                    </div>
                 
                </div>


                <section className='content_component'>

                <div id='conteiner_boxes_aboutMe'>
                    
                        <div className='box_aboutMe' id='box_i'>
                            <TbMoodNerd className='icon_aboutMe' />
                            <h3>Quem sou?</h3>

                            <p>
                            Fala aí, meu nome é José Ricardo e sou um <strong>desenvolvedor front-end</strong>. No início de 2023, comecei a cursar <strong>Análise e Desenvolvimento de Sistemas</strong> e, encantado com o que o mundo da programação poderia me proporcionar, comecei logo a estudar <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong> por cursos livres. Sempre me aperfeiçoando, fui aplicando tudo que aprendia em meus<strong> projetos pessoais</strong>, treinando minha lógica. Atualmente, venho estudando<strong> React</strong> e entendendo mais de <strong>Git</strong>, o que acredito serem essenciais para o <strong>desenvolvimento de minha carreira</strong>.
                            </p>
          
                        </div>
                        <div className='box_aboutMe'>
                            <FaLaptop className='icon_aboutMe' />
                            <h3>Por que escolhi ser um desenvolvedor Front-End?</h3>

                            <p>Entrar no mundo da programação para mim sempre foi uma coisa fascinante, mas não tinha muita noção sobre o que era. Estudar lógica e, posteriormente, <strong>HTML</strong>, <strong>CSS</strong> e<strong> JavaScript</strong> me fizeram ver que o <strong>Desenvolvimento Web</strong> poderia ser minha porta de entrada, devido á sua popularidade e o fato de combinar com meu interesse por <strong>design</strong> e <strong>animações</strong>.
                            </p>
                            <p>
                                Contudo, anseio em me tornar um <strong>desenvolvedor Full Stack</strong> e contribuir em muitos outros projetos.
                            </p>
                        </div>
                        <div className='box_aboutMe'>
                            <FaGraduationCap className='icon_aboutMe' />
                            <h3>Graduações</h3>
                            <p className='text_graduation'>Análise e Desenvolvimento de Sistemas - <strong>Em andamento</strong></p>
                            <p className='text_graduation'><strong> 2023 &#8594; 2025</strong></p>
                        </div>
                </div>








                </section>






            </main>






        </>
    )

}

export default AboutMe