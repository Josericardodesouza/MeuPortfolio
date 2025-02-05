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
import imageSC from '../imgs/imgs-projects/image-sitecafeteria-2.png'

function Projects() {
    return (
        <>

            <main className="component">


                <div className="conteiner">

                    <div className='titles_box'>
                        <h2 className="title_content">Projetos</h2>

                        <p className='subtitle_content'>Confira  meus mais recentes projetos</p> 
                    </div>

                    <div className='box_img'>
                        <img src={image} alt="" />

                    </div>


                </div>


                <section id="conteiner_projects">

                    <div className="box_projects" id='box_project_sc'>

                        <div className="box_img_project">

                            <img src={imageSC} alt="" />

                        </div>


                        <div className='conteiner_visit_project'>

                            <a className='box_icons_project icon_goToProject' href='https://site-cafeteria-jricardodev.netlify.app/' target='blank'>
                                <LuSquareArrowOutUpRight />
                                <p>Ver prévia</p>
                            </a>
                            <a className='box_icons_project icon_gitHub' href='https://github.com/Josericardodesouza/projeto-site-cafeteria' target='blank'>
                                <FaGithub />
                                <p>ver repositório</p>
                            </a>



                        </div>

                        <div className='box_name_project'>
                            <h3>Cantinho do Café</h3>
                        </div>






                        <div className='box_about_project'>
                            {/* <h3 className='title_project'>Sobre o projeto</h3> */}
                            <p className='description_project'>Este projeto foi desenvolvido durante meus estudos com a <strong>Context API</strong> e o <strong>framework Swiper</strong>, do React. Ele consiste em uma <strong>cafeteria virtual fictícia</strong> onde os usuários podem escolher entre uma variedade de <strong>bebidas quentes</strong>, <strong>geladas</strong> e <strong>doces</strong>. Quando os itens desejados são selecionados, eles são passados de uma página para outra utilizando a Context API. O site também conta com uma <strong>simulação de serviço delivery</strong>, usando a <strong>API do ViaCEP</strong>, e uma seção de comentários, proporcionando uma experiência interativa e envolvente.</p>


                            <p className='description_project'><strong>Outubro/2024 &#8594; em desenvolvimento</strong></p>



                        </div>


                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 className='icon_html_projects' />
                            <FaCss3Alt className='icon_css_projects' />
                            <FaJs className='icon_js_projects' />
                            <FaReact className='icon_react_projects' />

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
                                Este projeto com design simples possibilita três formas de conversão de escalas termométricas: <strong>Celsius, Fahrenheit</strong> e <strong>Kelvin</strong>. O usuário <strong>insere</strong> a temperatura no campo, <strong>seleciona</strong> a <strong>escala inicial</strong> e a <strong>escala final</strong>. Dependendo do resultado obtido, o código retorna uma <strong>frase de efeito</strong> e uma <strong>imagem</strong>.


                          
                            </p>

                            <p className='description_project'><strong>Agosto/2024 &#8594; Outubro/2024</strong></p>

                        </div>

                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 className='icon_html_projects' />
                            <FaCss3Alt className='icon_css_projects' />
                            <FaJs className='icon_js_projects' />

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
                            <h3>Lorem Ipsum Fitness</h3>
                        </div>

                        <div className='box_about_project'>

                            <p className='description_project'>Este projeto é um site de uma <strong>academia fictícia</strong> que oferece <strong>três ferramentas de cálculo</strong> que desenvolvi usando <strong>JavaScript</strong>: uma para obtenção de <strong>IMC (Índice de Massa Corporal)</strong>, outra para <strong>cálculo de valor calórico</strong> e outra para <strong>GEB (Gasto Energético Basal)</strong>. Neste projeto, usei meus conhecimentos em <strong>JavaScript</strong> e a <strong>API</strong> do <strong>Via CEP</strong>, além do conceito de <strong>Mobile First</strong>.</p>

                            <p className='description_project'><strong>Fevereiro/2024 &#8594; Abril/2024</strong></p>

                         

                        </div>

                        <h3 className='title_project'>Tecnologias abordadas</h3>


                        <div className='box_techIcon_project'>
                            <FaHtml5 className='icon_html_projects' />
                            <FaCss3Alt className='icon_css_projects' />
                            <FaJs className='icon_js_projects' />

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
                            <h3>ZeRicardo Animes Wiki</h3>
                        </div>



                        <div className='box_about_project'>

                            <p className='description_project'>Meu primeiro site usando meus conhecimentos iniciais em <strong>HTML</strong> e <strong>CSS</strong>. Este projeto é uma pequena página que fala sobre o anime <strong>Demon Slayer</strong> e seus personagens. Nas imagens, usei pela primeira vez, o efeito <strong>Parallax</strong>.</p>

                            <p className='description_project'><strong>Dezembro/2023 &#8594; Janeiro/2024</strong></p>
                        
{/* 
                            <p className='description_project'>Tempo de desenvolvimento: <span>Dez/2023 - Fev/2024</span></p> */}

                         

                        </div>


                        <h3 className='title_project'>Tecnologias abordadas</h3>

                        <div className='box_techIcon_project'>
                            <FaHtml5 className='icon_html_projects' />
                            <FaCss3Alt className='icon_html_projects' />
                   

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