import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'

const ResponsiveMenu = ({open}) => {
  return <AnimatePresence>
    {
        open && (
            <motion.div
                initial = {{ opacity:0, y:100}}
                animate={{ opacity:1, y:0}}
                exit = {{opacity:0, y: -100}}
                transition = {{duration : 0.3}}
                className= "absolute top-20 left-0 w-full h-screen z-20">
                <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
                    <ul className="flex flex-col justify-center items-center gap-10">
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Candidat</li>
                        <li>Recruteur</li>
                        <li>Home</li>

                    </ul>
                </div>


            </motion.div>

        )
    }

    </AnimatePresence>

  
};

export default ResponsiveMenu

//fixed top-0 left-0w-full h-full bg-back/60 z-10