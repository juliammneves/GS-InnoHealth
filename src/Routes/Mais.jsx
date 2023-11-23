import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import Spline from '@splinetool/react-spline';
import metis from '../assets/metis2.jpg'

function Mais() {
   return (
      <>
         <div className="cic1"></div>
         <div className="cic2"></div>
         <main className='Mais'>


            <section className='descricao'>
               <Link to="/Home"><FaArrowLeft />Voltar</Link>
               <h1>Guardian</h1>
               <p>A pulseira Guardian oferece segurança discreta e confortável, monitorando sinais vitais e detectando movimentos. Com alertas automáticos em crises, é mais que um acessório; é a promessa de uma gestão diária facilitada e suporte confiável. Sua inteligência artificial, Métis, age nos bastidores para prever potenciais crises e oferecer cuidados personalizados.</p>
            </section>

            <section className='dados'>
               <div className="box b1">
                  <p>Até</p>
                  <h2> 5 dias</h2>
                  <p>De uso contínuo</p>
               </div>
               <div className="box b2">
                  <p>Até</p>
                  <h2>10 metros</h2>
                  <p>De conectividade Bluetooth</p>
               </div>
            </section>

            <Spline className='main-img' scene="https://prod.spline.design/VIUVyFKd7BKCvr2u/scene.splinecode" />

            <section className='info-img'>
               <img src={metis} alt="" />
               <div className="texto">
                  <h4>Métis</h4>
                  <p>A Guardian usa a IA Métis para prevenir crises, analisar dados e fornecer informações úteis aos profissionais de saúde.</p>
               </div>
            </section>

            <section className="dados2">
               <div className="box">
                  <p>A cada</p>
                  <h2>5 minutos</h2>
                  <p>Leitura da frequência cardíaca e temperatura</p>
               </div>
            </section>

            <section className="dados3">
               <div className="box">
                  <p>Tempo de resposta de</p>
                  <h2>3 segundos</h2>
                  <p>Em emergencias ou caso o botão for pressionado</p>
               </div>
            </section>

            <section className="dados4">
               <div className="box b1">
                  <p>Resistênte até</p>
                  <h2>30 metros</h2>
                  <p>De profundidade</p>
               </div>
               <div className="box b1">
                  <p>GPS com</p>
                  <h2>3 metros</h2>
                  <p>de precisão</p>
               </div>
            </section>
            
         </main>
      </>
   )
}

export default Mais