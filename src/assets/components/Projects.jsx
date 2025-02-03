import { FaCss3, FaEye, FaGithub, FaHtml5 } from 'react-icons/fa'
import teste1 from '../imgs/imgs-projects/pexels-bri-schneiter-28802-346529.jpg'
import { FaCss3Alt, FaJs, FaReact, FaTruckArrowRight } from 'react-icons/fa6'

import '../styles/styles-components.css'
import '../styles/projects-module.css'
import { TbTemperature } from 'react-icons/tb'
import { LuSquareArrowOutUpRight } from 'react-icons/lu'

import image from '../imgs/svgs/undraw_developer-activity_dn7p.svg'


import imageDS from '../imgs/imgs-projects/image-zericardoanimeswiki.png'
import imageSA from '../imgs/imgs-projects/image-siteacademia.png'
import imageST from '../imgs/imgs-projects/image-conversortemp.png'
import imageSC from '../imgs/imgs-projects/image-sitecafeteria.png'

function Projects() {
    return (
        <>

            <main className="component">


                <div className="conteiner">

                    <div className='titles_box'>
                        <h2 className="title_content">Projetos</h2>

                        <p className='subtitle_content'>Confira abaixo meus mais recentes projetos pessoais</p> 
                    </div>

                    <div className='box_img'>
                        <img src={image} alt="" />

                    </div>


                </div>


                <section id="conteiner_projects">

                    <div className="box_projects">

                        <div className="box_img_project">

                            <img src={imageSC} alt="" />

                        </div>

                        <div className='conteiner_visit_project'>

                            <a className='box_icons_project icon_goToProject'>
                                <LuSquareArrowOutUpRight />
                                <p>Ver projeto</p>
                            </a>
                            <a className='box_icons_project icon_gitHub'>
                                <FaGithub />
                                <p>ver repositório</p>
                            </a>



                        </div>

                        <div className='box_name_project'>
                            <h3>Site Cafeteria</h3>
                        </div>






                        <div className='box_about_project'>
                            {/* <h3 className='title_project'>Sobre o projeto</h3> */}
                            <p className='description_project'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laudantium quam error non omnis impedit dolorum similique repudiandae officiis sequi et commodi tenetur, eos quia cum blanditiis, aliquam adipisci nemo!</p>

                        </div>


                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />
                            <FaReact />

                        </div>





                    </div>




                    <div className="box_projects" id='box_project_st'>

                        <div className="box_img_project">

                            <img src={imageST} alt="" />

                        </div>

                        <div className='conteiner_visit_project'>
                            <a className='box_icons_project icon_goToProject' href="https://conversor-temperaturas-jricardo.netlify.app/" target='blank' >
                                
                                    <LuSquareArrowOutUpRight />
                                
                                <p>Ver projeto</p>

                            </a>

                            <a className='box_icons_project icon_gitHub' href="https://github.com/Josericardodesouza/conversor-de-temperatura" target='blank'>
                          
                                    <FaGithub />
                           
                                <p>Ver repositório</p>

                            </a>

                        </div>





                        <div className='box_name_project'>
                            <h3>Site de Conversão de Temperaturas</h3>
                        </div>



                        <div className='box_about_project'>

                            <p className='description_project'>
                                Este projeto com design simples possibilita três formas de conversão de escalas termométricas: <span>Celsius, Fahrenheit</span> e <span>Kelvin</span>. O usuário <span>insere</span> a temperatura no campo, <span>seleciona</span> a <span>escala inicial</span> e a <span>escala final</span>. Dependendo do resultado obtido, o código retorna uma <span>frase de efeito</span> e uma <span>imagem</span>.

                          
                            </p>

                        </div>

                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />

                        </div>





                    </div>



                    <div className="box_projects" id='box_project_sa'>

                        <div className="box_img_project">

                            <img src={imageSA} alt="" />

                        </div>


                        <div className='conteiner_visit_project'>

                            <a className='box_icons_project icon_goToProject' href="https://loremipsumfitnessjricardodev.netlify.app/" target='blank'>
                                
                                    <LuSquareArrowOutUpRight />
                                
                                <p>Ver projeto</p>

                            </a>

                            <a className='box_icons_project icon_gitHub' href="https://github.com/Josericardodesouza/projeto-site-academia" target='blank'>
                                
                                    <FaGithub />
                                
                                <p>Ver repositório</p>


                            </a>

                        </div>

                        <div className='box_name_project'>
                            <h3>Site Lorem Ipsum Fitness</h3>
                        </div>

                        <div className='box_about_project'>

                            <p className='description_project'>Este projeto é um site de uma <span>academia fictícia</span> que oferece <span>três ferramentas de cálculo</span> que desenvolvi usando <span>JavaScript</span>: uma para obtenção de <span>IMC (Índice de Massa Corporal)</span>, outra para <span>cálculo de valor calórico</span> e outra para <span>GEB (Gasto Energético Basal)</span>. Neste projeto, usei meus conhecimentos em <span>JavaScript</span> e a <span>API</span> do <span>Via CEP</span>, além do conceito de <span>Mobile First</span>.</p>

                         

                        </div>

                        <h3 className='title_project'>Tecnologias abordadas</h3>


                        <div className='box_techIcon_project'>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />

                        </div>

                    </div>



                    <div className="box_projects" id='box_project_ds'>

                        <div className="box_img_project">

                            <img src={imageDS} alt="" />
                        </div>


                        <div className='conteiner_visit_project'>
                            <a className='box_icons_project icon_goToProject'  href="https://josericardodesouza.github.io/projeto-zericardo-animeswiki-demonslayer/" target='blank'>
                                
                                    <LuSquareArrowOutUpRight />
                                
                                <p>Ver projeto</p>

                            </a>

                            <a className='box_icons_project icon_gitHub' href="https://github.com/Josericardodesouza/projeto-zericardo-animeswiki-demonslayer" target='blank'>
                                
                                    <FaGithub />
                                
                                <p>Ver repositório</p>

                            </a>

                        </div>

                        <div className='box_name_project'>
                            <h3>Site Demon Slayer</h3>
                        </div>



                        <div className='box_about_project'>

                            <p className='description_project'>Meu primeiro site usando meus conhecimentos iniciais em <span>HTML</span> e <span>CSS</span>. Este projeto é uma pequena página que fala sobre o anime <span>Demon Slayer</span> e seus personagens. Nas imagens, usei pela primeira vez, o efeito <span>Parallax</span>.</p>
                        
{/* 
                            <p className='description_project'>Tempo de desenvolvimento: <span>Dez/2023 - Fev/2024</span></p> */}

                         

                        </div>


                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 />
                            <FaCss3Alt />
                   

                        </div>



                    </div>






















                    {/* 
                    <div className="box_projects">

                        <div className="box_img_project">

                            <img src={teste1} alt="" />

                        </div>

                        <div className='box_name_project'>
                            <p>Projeto 02</p>

                        </div>

                    </div> */}

                </section>





            </main>




        </>
    )
}

export default Projects