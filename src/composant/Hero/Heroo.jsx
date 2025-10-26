import React from 'react'
import "./heroo.css"
const hero = () => {
    const[title, setTitle] = React.useState("Prediction Salaire");
    const[description , setDescription] =React.useState("Outil d’analyse permettant d’estimer les salaires en fonction des informations contenues dans les offres d’emploi. Il met en évidence les tendances du marché et aide à mieux comprendre la relation entre compétences et rémunération.")
  return (
    <>
      <div className="header">
        <div className="header-content">
        {/* <div className="container pb-8 sm:pb-0"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
           {/* text content section*/}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                {title}
              </h1>
              <p className="text-sm">{description}</p>
              <div> 
              <button className=" hero-btn-primary"> 
                  Découvrir nos espaces
                </button>
              </div> 
            </div>
          </div>
        </div>
          <div className="header-illustration">
              <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Background Circle --> */}
                    <circle cx="250" cy="200" r="180" fill="rgba(255,255,255,0.1)" />
                    
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
          
       

        {/* </div> */}
        
      
      
      {/* <section  style={{
    backgroundColor: "var(--color-bg)",
    color: "var(--color-text)",
  }} className=" to-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
        <h3></h3>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          {description}
        </p>
        <a
          href="#prediction-form"
          className="bg-blue-600 text-white font-medium py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          Commencer
        </a>
      </div>
     </section> */}
    </div>
    </>
  );
}

export default hero

 {/* <div className =" min-h-[500px] sm:min-h-[700px]  flex justify-center 
     items-center dark:bg-gray-950 dark:text-white duration-200 relative"> */}
      {/* background asset div */}
      
      // {/* <div className ="h-[700px] w-[700px] bg-primary/45 absolute -top-110 right-40 rounded-3xl rotate-45 -z-9">
      // </div> */}