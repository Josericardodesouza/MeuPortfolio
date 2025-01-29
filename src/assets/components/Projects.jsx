import { FaCss3, FaEye, FaGithub, FaHtml5 } from 'react-icons/fa'
import teste1 from '../imgs/imgs-projects/pexels-bri-schneiter-28802-346529.jpg'
import { FaCss3Alt, FaJs, FaReact, FaTruckArrowRight } from 'react-icons/fa6'

import '../styles/styles-components.css'
import '../styles/projects-module.css'
import { TbTemperature } from 'react-icons/tb'
import { LuSquareArrowOutUpRight } from 'react-icons/lu'


import imageDS from '../imgs/imgs-projects/josericardodesouza.github.io_projeto-zericardo-animeswiki-demonslayer.png'
import imageSA from '../imgs/imgs-projects/siteacademia.png'
import imageST from '../imgs/imgs-projects/conversor-temperaturas-jricardo.netlify.app2.png'

function Projects() {
    return (
        <>

            <main className="component">


                <div className="conteiner">
                    <h2 className="title_content">Projetos</h2>
                </div>


                <section id="conteiner_projects">

                    <div className="box_projects">

                        <div className="box_img_project">

                            <img src={teste1} alt="" />

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




                    <div className="box_projects">

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
                                Este projeto com design simples possiblita três formas de conversão de escalas termométricas: <span>Celsius, Fahrenheit e Kelvin</span>. O usuário <span>insere</span> a temperatura no campo, <span>seleciona</span> qual a escala dela e <span>escolhe</span> a escala final. A depender do resultado obtido, o código retorna uma <span>frase de efeito</span> e uma <span>imagem</span>.
                            </p>

                        </div>

                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />

                        </div>





                    </div>



                    <div className="box_projects">

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

                            <p className='description_project'>Este projeto é um site de uma <span>academia fictícia</span> que oferece <span>três ferramentas de cálculo</span> que desenvolvi usando <span>JavaScript</span>, sendo elas para obtenção de <span>IMC (Índice de Massa Corporal)</span>, <span>valor calórico</span> e de <span>GEB (Gasto Energético Basal)</span>. Neste projeto, usei meus conhecimentos em <span>JavaScript</span> e a <span>API</span> do <span>Via CEP</span>, além do conceito de <span>Mobile First</span>.</p>

                        </div>

                        <h3 className='title_project'>Tecnologias abordadas</h3>


                        <div className='box_techIcon_project'>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaJs />

                        </div>

                    </div>



                    <div className="box_projects">

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

                            <p className='description_project'>Meu primeiro site usando meus conhecimentos iniciais em <span>HTML</span> e <span>CSS</span>. Este projeto é uma pequena página falando sobre o anime <span>Demon Slayer</span> e seus personagens. Para as imagens, usei o efeito <span>Parallax</span></p>

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