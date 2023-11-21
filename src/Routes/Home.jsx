import { Link } from 'react-router-dom'
import med from '../assets/med.jpg'
import ambu from '../assets/ambu.jpg'
import metis2 from '../assets/metis2.jpg'
import moni2 from '../assets/moni2.jpg'
import brain from '../assets/brain.jpg'
import parc1 from '../assets/parc1.png'
import parc2 from '../assets/parc2.png'
import parc3 from '../assets/parc3.png'
import { FaArrowRight, FaArrowDown, FaRegEnvelope } from "react-icons/fa";
import Spline from '@splinetool/react-spline';


function Home() {
   return (
      <main className='home'>
         <div className="cic1"></div>
         <div className="cic2"></div>
         <div className="cic3"></div>
         <section className="fundo">
            <div className="produtos">
               <Spline scene="https://prod.spline.design/zXBFoJPmCOpCgtbl/scene.splinecode" />
            </div>
         </section>
         <article className="lateral">
            <article className="col-3">
               <h2>O que é?</h2>
               <p>Desenvolvemos a pulseira Guardian para epilepsia, integrando tecnologia avançada e IA Métis para monitoramento vital, prevenção de crises e cuidados personalizados.</p>
            </article>
            <hr />
            <article className="col-3">
               <h2>O que faz?</h2>
               <p>A pulseira detecta sinais vitais e movimentos, acionando alertas em crises. A IA Métis oferece prevenção inteligente, garantindo cuidado personalizado e resposta rápida.</p>
            </article>
            <hr />
            <article className="col-3">
               <h2>Como Funciona?</h2>
               <p>Sensores monitoram sinais vitais, o acelerômetro detecta movimentos bruscos. A IA Métis analisa dados para prevenir crises, proporcionando segurança e cuidados personalizados.</p>
            </article>
         </article>

         <h1>Segurança Epiléptica com Guardian e Métis</h1>
         <section className="texto">
            <p>Guardian, a pulseira inovadora, e Métis, a IA preventiva, unem-se para oferecer segurança e cuidado avançados na gestão da epilepsia. Monitoramento, alertas e prevenção integrados para uma vida mais tranquila.</p>
            <div className="info">
               <Link to='/Mais'><button><div className='icon'><FaArrowRight /></div></button></Link>
               <p>Benefícios <FaArrowDown className='icon' /></p>
            </div>
         </section>

         <section className="blocos">
            <div className="col-3">
               <img src={moni2} alt="" />
               <div className="conteudo">
                  <h2>Monitoramento Abrangente</h2>
                  <p>A pulseira Guardian monitora sinais vitais e movimentos, enquanto a IA Métis previne ataques, garantindo uma abordagem completa para a gestão da epilepsia.</p>
               </div>
            </div>
            <div className="col-3">
               <img src={ambu} alt="" />
               <div className="conteudo">
                  <h2>Resposta Rápida em Emergências</h2>
                  <p>Alertas automáticos e botão de emergência, a Guardian facilita a resposta imediata a crises, proporcionando segurança adicional aos usuários e tranquilidade para cuidadores.</p>
               </div>
            </div>
            <div className="col-3">
               <img src={med} alt="" />
               <div className="conteudo">
                  <h2>Cuidado Personalizado e Confiável</h2>
                  <p>Integração com registros médicos e histórico de crises permite cuidados informados e personalizados, melhorando a qualidade de vida para aqueles com epilepsia.</p>
               </div>
            </div>
         </section>

         <div className="mais">
            <div className="col-2">
               <img src={metis2} alt="" />
               <div className="conteudo">
                  <h2>Métis: A Inteligência Protetora</h2>
                  <p>A Métis, a inteligência artificial do Projeto Guardian, desempenha um papel crucial na prevenção de crises epilépticas. Utilizando algoritmos avançados e machine learning, a Métis analisa dados da pulseira Guardian, identificando padrões e sinais precursoras de crises. Além da prevenção, a IA integra-se aos registros médicos eletrônicos, proporcionando informações valiosas aos profissionais de saúde. A Métis representa o núcleo inteligente por trás da Guardian, oferecendo uma abordagem personalizada e proativa para a gestão da epilepsia, redefinindo os padrões da assistência médica tecnológica.</p>
               </div>
            </div>
            <div className="divisao">
               <div className="box1">
                  <div className="conteudo">
                     <h2>Guardian: Segurança em Crises, Mesmo Sozinho.</h2>
                     <p>A epilepsia pode representar riscos quando se está sozinho durante uma crise. A pulseira 'Guardian' oferece uma resposta rápida, notificando contatos de emergência automaticamente para garantir assistência imediata e segurança em momentos críticos.</p>
                  </div>
                  <img src={brain} alt="" />
               </div>
               <div className="divisao2">
                  <Spline className='logo2' scene="https://prod.spline.design/jvCiUJeKJOOk9OHk/scene.splinecode" />
                  <div className="bloco1">
                     <div className="contato">
                        <h2>Entre em contato!</h2>
                        <div className="info">
                           <p>suporte@innohealth.com</p>
                           <p>+55 11 98765-4321</p>
                        </div>
                     </div>
                     <div className="email">
                        <h3>Newsletter</h3>
                        <p>Inscreva-se para receber as últimas novidades</p>
                        <form>
                           <FaRegEnvelope className='icon' />
                           <input type="text" placeholder='Endereço de e-mail' />
                           <button><FaArrowRight /></button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="parceiros">
            <img src={parc1} alt="" />
            <img src={parc2} alt="" />
            <img src={parc3} alt="" />
         </div>
         <footer>
            <p>@Global Solution 2023 - Engenharia de Software</p>
            <h4>InnoHealth</h4>
         </footer>
      </main>

   )
}

export default Home