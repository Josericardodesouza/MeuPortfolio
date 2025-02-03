import { FaGraduationCap, FaLaptop, FaUser } from 'react-icons/fa6'
import '../styles/styles-components.css'
import '../styles/aboutMe-module.css'
import { FaUserAlt } from 'react-icons/fa'
import { TbMoodNerd } from 'react-icons/tb'

function AboutMe() {
    return (
        <>

            <main className='component'>
                <div className="conteiner">
                    <h2 className="title_content">Olá, mundo!</h2>
                    <p className='subtitle_content'>Meu nome é José Ricardo e esse é meu portfólio!</p>
                </div>


                <section className='content_component'>

                <div id='conteiner_boxes_aboutMe'>
                    
                        <div className='box_aboutMe' id='box_i'>
                            <TbMoodNerd className='icon_aboutMe' />
                            <h3>Quem sou?</h3>
                            
                            <p>Sou natural da Bahia e, No ínicio de 2023, ingressei na faculdade de Análise e Desenvolvimento de Sistemas pela <strong>UNOPAR</strong>. Durante o segundo semestre deste mesmo ano, me dediquei ao estudo de Desenvolvimento Front-End, tanto que concluí os cinco módulos do curso de HTML5 e CSS3 da plataforma Curso Em Vídeo, e também o curso de JavaScript do mesmo professor Gustavo Guanabara. Além disso, explorei e aprendi muito mais em conteúdos online.
                            </p>
                            <p>
                                Sempre me aperfeiçoando, fui aplicando tudo que aprendia em meus projetos projetos pessoais, treinando minha lógica. Atualmente, venho estudando React e entendendo mais de Git, o que acredito serem essenciais para o desenvolvimento de minha carreira.
                            </p>
                        </div>
                        <div className='box_aboutMe'>
                            <FaLaptop className='icon_aboutMe' />
                            <h3>Por que escolhi ser um desenvolvedor Front-End?</h3>
                            <p>Entrar no mundo da programação para mim sempre foi uma coisa fascinante, mas não tinha muita noção sobre o que era. Estudar lógica e, posteriormente, HTML, CSS e JavaScript me fizeram ver que o Desenvolvimento Web poderia ser minha porta de entrada, devido á sua popularidade e o fato de combinar com meu interesse por design e animações.
                            </p>
                            <p>
                                Contudo, anseio em me tornar um desenvolvedor Full Stack e contribuir em muitos outros projetos.
                            </p>
                        </div>
                        <div className='box_aboutMe'>
                            <FaGraduationCap className='icon_aboutMe' />
                            <h3>Graduações</h3>
                            <p className='text_graduation'>Análise e Desenvolvimento de Sistemas</p>
                            <p className='text_graduation'>desde 2023</p>
                        </div>
                </div>








                </section>






            </main>






        </>
    )

}

export default AboutMe