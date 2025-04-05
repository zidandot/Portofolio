import { motion } from "framer-motion"

const Contact = () => {
    return(
        <div className="border-t border-stone-900 pb-20">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Contact
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">
                    Jogonegoro, Mertoyudan, Magelang, Jawa Tengah
                </motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4">
                    +62 857 0280 0279
                </motion.p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zidanmgl443@gmail.com" className="border-b">
                    zidanmgl443@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Contact