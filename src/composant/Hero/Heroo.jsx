import React from 'react'
import "./heroo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  //pour les icons
import { faUserTie } from "@fortawesome/free-solid-svg-icons";   //icons de candidat
const hero = () => {
    const[title, setTitle] = React.useState("Prediction Salaire");
    const[description , setDescription] =React.useState("Notre plateforme est un outil d’analyse permettant d’estimer les salaires en fonction des informations contenues dans les offres d’emploi. Elle met en évidence les tendances du marché et aide à mieux comprendre la relation entre compétences et rémunération.")
  return (
    <>
      <div className="header">
        {/* Partie contenu */}
        <div className="header-content">
        {/* <div className="container pb-8 sm:pb-0"> */}
          <div className="">
           {/* text content section*/}
            <div >
              <h1 className="titre  text-6xl lg:text-6xl">{/* text-6xl lg:text-6xl */}
                <b>{title}</b>
              </h1>
              <p className="text-sm">{description}</p>
              <div className="hero-buttons"> 
              <button className="hero-btn hero-btn-primary"> 
                  Découvrir nos espaces
                </button>
              </div> 
            </div>
          </div>
        </div>
        {/* Partie illustration */}
        <div className="header-illustration">
              <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Background Circle --> */}
                    <circle cx="250" cy="200" r="180" fill="rgba(30, 64, 175, 0.1)" />
                    
                    {/* <!-- Dashboard Screen --> */}
                    <rect x="120" y="80" width="260" height="180" rx="15" fill="white" opacity="0.95" />
                    
                    {/* <!-- Screen Header --> */}
                    <rect x="120" y="80" width="260" height="40" rx="15" fill="#1E40AF" />
                    <circle cx="145" cy="100" r="5" fill="white" opacity="0.8" />
                    <circle cx="165" cy="100" r="5" fill="white" opacity="0.8" />
                    <circle cx="185" cy="100" r="5" fill="white" opacity="0.8" />
                    
                    {/* <!-- Bar Chart --> */}
                    <rect x="140" y="200" width="30" height="40" rx="3" fill="#1E40AF" opacity="0.8">
                        <animate attributeName="height" values="40;60;40" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="y" values="200;180;200" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="185" y="180" width="30" height="60" rx="3" fill="#3B82F6" opacity="0.8">
                        <animate attributeName="height" values="60;80;60" dur="2s" repeatCount="indefinite" begin="0.3s" />
                        <animate attributeName="y" values="180;160;180" dur="2s" repeatCount="indefinite" begin="0.3s" />
                    </rect>
                    <rect x="230" y="160" width="30" height="80" rx="3" fill="#1E40AF" opacity="0.8">
                        <animate attributeName="height" values="80;100;80" dur="2s" repeatCount="indefinite" begin="0.6s" />
                        <animate attributeName="y" values="160;140;160" dur="2s" repeatCount="indefinite" begin="0.6s" />
                    </rect>
                    <rect x="275" y="190" width="30" height="50" rx="3" fill="#3B82F6" opacity="0.8">
                        <animate attributeName="height" values="50;70;50" dur="2s" repeatCount="indefinite" begin="0.9s" />
                        <animate attributeName="y" values="190;170;190" dur="2s" repeatCount="indefinite" begin="0.9s" />
                    </rect>
                    <rect x="320" y="170" width="30" height="70" rx="3" fill="#1E40AF" opacity="0.8">
                        <animate attributeName="height" values="70;90;70" dur="2s" repeatCount="indefinite" begin="1.2s" />
                        <animate attributeName="y" values="170;150;170" dur="2s" repeatCount="indefinite" begin="1.2s" />
                    </rect>

                    {/* <!-- Trend Line --> */}
                    <path d="M 140 220 Q 200 180, 260 160 T 360 150" stroke="#F97316" strokeWidth="3" fill="none" opacity="0.8">
                        <animate attributeName="d" 
                            values="M 140 220 Q 200 180, 260 160 T 360 150;
                                    M 140 220 Q 200 170, 260 150 T 360 140;
                                    M 140 220 Q 200 180, 260 160 T 360 150" 
                            dur="3s" repeatCount="indefinite" />
                    </path>
                    
                    {/* <!-- Salary Icons --> */}
                    <g transform="translate(140, 135)">
                        <text fontSize="24" fill="#1E40AF">💰</text>
                    </g>
                    <g transform="translate(320, 130)">
                        <text fontSize="28" fill="#F97316">📈</text>
                    </g>
                    
                    {/* <!-- Floating Elements --> */}
                    <circle cx="420" cy="120" r="15" fill="white" opacity="0.8">
                        <animate attributeName="cy" values="120;110;120" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <text x="410" y="128" fontSize="18">💼</text>
                    
                    <circle cx="80" cy="160" r="15" fill="white" opacity="0.8">
                        <animate attributeName="cy" values="160;170;160" dur="3s" repeatCount="indefinite" begin="0.5s" />
                    </circle>
                    <text x="70" y="168" fontSize="18">🎯</text>
                    
                    <circle cx="430" cy="280" r="15" fill="white" opacity="0.8">
                        <animate attributeName="cy" values="280;270;280" dur="3s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <text x="420" y="288" fontSize="18">🚀</text>
                    
                    <circle cx="70" cy="300" r="15" fill="white" opacity="0.8">
                        <animate attributeName="cy" values="300;310;300" dur="3s" repeatCount="indefinite" begin="1.5s" />
                    </circle>
                    <text x="60" y="308" fontSize="18">💡</text>
                    
                    {/* <!-- Person Icon --> */}
                    <circle cx="250" cy="320" r="20" fill="white" opacity="0.9" />
                    <circle cx="250" cy="315" r="8" fill="#1E40AF" />
                    <path d="M 235 330 Q 250 340, 265 330" fill="#1E40AF" stroke="#1E40AF" strokeWidth="2" />
                    
                    {/* <!-- Data Points --> */}
                    <circle cx="155" cy="200" r="4" fill="#F97316">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="200" cy="175" r="4" fill="#F97316">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.3s" />
                    </circle>
                    <circle cx="245" cy="155" r="4" fill="#F97316">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.6s" />
                    </circle>
                    <circle cx="290" cy="165" r="4" fill="#F97316">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.9s" />
                    </circle>
                    <circle cx="335" cy="145" r="4" fill="#F97316">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1.2s" />
                    </circle>
                </svg>
        </div>
      </div>
      <h2 className='section-title'><b>Choisissez votre espace</b></h2>
      <div className='cards-cantainer'>
        {/* Partie Candidat */}
        <div className='carte candidat-carte'>
          <div className='card-header'>
            <div className='icon candidat-icon'>
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            
            <div>
              <p className='label'>Espace</p>
              <h2>Candidat</h2>
            </div>
          </div>
          <div className="caracteristique">
            <div className='caract-item'>
              <div className='caract-icon'>
                  💰
              </div>
              <div className='caract-text'>
                <h3>
                  Estimation Salariale Instantanée
                </h3>
                <p>
                  Collez une offre d'emploi et obtenez une prédiction précise du salaire attendu basée sur l'IA
                </p>
              </div>
            </div>


            <div className='caract-item'>
              <div className='caract-icon'>
                  🚀
              </div>
              <div className='caract-text'>
                <h3>
                  Compétences à Forte Valeur
                </h3>
                <p>
                  Identifiez les compétences qui augmentent le plus votre potentiel salarial
                </p>
              </div>
            </div>

            <div className='caract-item'>
              <div className='caract-icon'>
                  💡
              </div>
              <div className='caract-text'>
                <h3>
                  Recommandations Personaalisées
                </h3>
                <p>
                  Recevez des conseils sur les compétences à développer
                </p>
              </div>
            </div>
            

            <div className='caract-item'>
              <div className='caract-icon'>
                  📊
              </div>
              <div className='caract-text'>
                <h3>
                  Analyse de Tendances
                </h3>
                <p>
                  Visualisez l'évolution des salaires dans votre région
                </p>
              </div>
            </div>

            <button className='caract-btn'> 
              Accéder à Mon Espace
            </button>
          </div>
        </div>
        
        {/* Partie Recruteur */}
        <div className='carte recruteur-carte'>
          <div className='card-header'>
            <div className='icon recruteur-icon'>
              🏢
            </div>
            
            <div>
              <p className='label'>Espace</p>
              <h2>Recruteur</h2>
            </div>
          </div>
          <div className="caracteristique">
            <div className='caract-item'>
              <div className='caract-icon'>
                  📈
              </div>
              <div className='caract-text'>
                <h3>
                  Benchmarking Salarial
                </h3>
                <p>
                  Comparez vos offres avec le marché en temps réel pour rester compétitif
                </p>
              </div>
            </div>


            <div className='caract-item'>
              <div className='caract-icon'>
                  💎
              </div>
              <div className='caract-text'>
                <h3>
                  Détection de Compétences Rares
                </h3>
                <p>
                  Identifiez les compétences les plus demandées et les mieux rémunérées 
                </p>
              </div>
            </div>

            <div className='caract-item'>
              <div className='caract-icon'>
                  🎯
              </div>
              <div className='caract-text'>
                <h3>
                  Évaluation d'Attractivité
                </h3>
                <p>
                  Analysez si vos annonces sont suffisamment compéitives pour attire les talents 
                </p>
              </div>
            </div>
            

            <div className='caract-item'>
              <div className='caract-icon'>
                  🗺️
              </div>
              <div className='caract-text'>
                <h3>
                  Tableaux de Bord Géographiques
                </h3>
                <p>
                  Visualisez les écarts salariaux par région et optimisez votre stratégie RH
                </p>
              </div>
            </div>

            <button className='caract-btn'> 
              Accéder à Mon Espace 
            </button>
          </div>
        </div>
      </div>
      {/* Section Fonctionnalités Principales */}
      <div className="section-fonctionnalite">
        <h2>
          <b>Fonctionnalités Principales</b>
        </h2>
        <div className="fonct-grid">
          <div className='fonct-item'>
            <div className='fonct-icon'>
             🤖
            </div>
            <h3>
             Prédiction IA
            </h3>
            <p>
             Modèle d'intelligence artificielle entrainé sur de milliers d'offres d'emploi pour des prédictions salariales ultra-précises
            </p>
          </div>
       

          <div className='fonct-item'>
            <div className='fonct-icon'>
             📊
            </div>
            <h3>
             Dashboards Interactifs
            </h3>
            <p>
             Cartes géographiques, analyses des compétences et comparaisons d'offres en temps réel 
            </p>
          </div>
       

          <div className='fonct-item'>
            <div className='fonct-icon'>
             🔍
            </div>
            <h3>
             Analyses Avancées
            </h3>
            <p>
             Détection d'inégalités et tendances du marché
            </p>
          </div>
        
        </div>
      </div>

      {/* footer */}
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3><b>SalaryPredict</b> </h3>
            <p>La plateforme d'intelligence salariale qui révolutionne le recrutement et la recherche d'emploi grâce à l'IA.</p>
           
          </div>

          <div class="footer-section">
            <h3><b>Navigation</b></h3>
            <ul class="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#espaces">Nos Espaces</a></li>
              <li><a href="#fonctionnalites">Fonctionnalités</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#a-propos">À propos</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3><b>Ressources</b></h3>
            <ul class="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tutoriels</a></li>
              <li><a href="#">Centre d'aide</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3><b>Newsletter</b></h3>
            <p>Restez informé des dernières tendances salariales et nouveautés.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Inscription réussie !');">
              <input type="email" placeholder="Votre email" required/>
              <button type="submit">S'inscrire</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 SalaryPredict. Tous droits réservés. | <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a> | <a href="#">CGU</a></p>
        </div>
      </footer>

    </>
  );
}

export default hero

 {/* <div className =" min-h-[500px] sm:min-h-[700px]  flex justify-center 
     items-center dark:bg-gray-950 dark:text-white duration-200 relative"> */}
      {/* background asset div */}
      
      // {/* <div className ="h-[700px] w-[700px] bg-primary/45 absolute -top-110 right-40 rounded-3xl rotate-45 -z-9">
      // </div> */}