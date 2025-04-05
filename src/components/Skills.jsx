import { FaJs, FaPython } from "react-icons/fa6"
import { RiHtml5Line, RiReactjsLine } from "react-icons/ri"
import { TbBrandCss3 } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Skills = () => {
    return(
        <div className="pb-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Skills
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <RiHtml5Line className="text-7xl text-orange-500"/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <TbBrandCss3 className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className="p-4">
                    <FaJs className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-4">
                    <FaPython className="text-7xl text-blue-600"/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills