import luxfurn from "../assets/luxfurn.png"
import resep from "../assets/resep.png"
import dico from "../assets/dico.png"
import { motion } from "framer-motion"

const Project = () => {
    return(
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h2>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <img src={luxfurn}
                    width={300}
                    alt="LuxFurn Web"
                    className="mb-6 rounded"></img>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">LuxFurn Web</h3>
                    <p className="mb-4 text-stone-400">The assignment for the Web Programming Practicum course is to create a website that displays a description, catalog, testimonials, and other information about LuxFurn itself.</p>
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">HTML</span>
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">CSS</span>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <img src={resep}
                    width={300}
                    alt="Recipe"
                    className="mb-6 rounded"></img>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">Recipe Web</h3>
                    <p className="mb-4 text-stone-400">A website for the final project of a bootcamp from Dicoding Academy that contains various types of recipes, including appetizers, main courses, and desserts.</p>
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">HTML</span>
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">CSS</span>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <img src={dico}
                    width={300}
                    alt="Dicoding Landing Page"
                    className="mb-6 rounded"></img>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">Dicoding Landing Page</h3>
                    <p className="mb-4 text-stone-400">An assignment during the bootcamp at Dicoding Academy, where we created a landing page for Dicoding itself.</p>
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">HTML</span>
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">CSS</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Project