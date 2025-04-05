import { motion } from "framer-motion"

const Experience = () => {
    return (
      <div className="pb-4 max-w-6xl mx-auto px-4 lg:flex-row">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">Experience
        </motion.h2>

        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2025 - Present</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Science and Technology Division -
              <span className="text-sm text-stone-500"> Association of Software Engineering Technology Student (ASSETS)</span>
            </h3>
            <p className="mb-4 text-stone-400">
              Association of Software Engineering Technology Students (ASSETS) is a student organization for Software Engineering students, serving as a hub for academic and professional development. I am part of the Science and Technology Division, which focuses on enhancing students' technical skills and knowledge through various programs, including workshops, competitions, and research initiatives.
            </p>
          </motion.div>
        </div>
  
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2025 - Present</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Science and Technology Division -
              <span className="text-sm text-stone-500"> Keluarga Mahasiswa Teknik Elektro dan Informatika (KMTEDI)</span>
            </h3>
            <p className="mb-4 text-stone-400">
              Keluarga Mahasiswa Teknik Elektro dan Informatika (KMTEDI) is a student organization at the department level within the Vocational School of Universitas Gadjah Mada. In KMTEDI, I am part of the Science and Technology Division, which has several programs, one of which is Tech Enthusiast Day, a competition in the field of technology.
            </p>
          </motion.div>
        </div>
  
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">2025 - Present</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Social and Community Division -
              <span className="text-sm text-stone-500"> Ikatan Mahasiswa Gadjah Mada Magelang (IMAGE)</span>
            </h3>
            <p className="mb-4 text-stone-400">
              Ikatan Mahasiswa Gadjah Mada Magelang (IMAGE) is a regional student organization consisting of UGM students from Magelang. In IMAGE, I am part of the Social and Community Division, which has several programs, one of which is "IMAGE Mengabdi", where we volunteer at orphanages in Magelang.
            </p>
          </motion.div>
        </div>
  
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">December 2024 - February 2025</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Socialization Division -
              <span className="text-sm text-stone-500"> Gamatrust #15</span>
            </h3>
            <p className="mb-4 text-stone-400">
              Gamatrust #15 (Gadjah Mada Try Out and Socialization) is a try out and socialization event held by IMAGE (Ikatan Mahasiswa Gadjah Mada Magelang). At Gamatrust #15, I am in the socialization division which has several achievements, socialization to 20+ schools in Magelang, getting 500+ participants, become the person in charge of the school.
            </p>
          </motion.div>
        </div>
  
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} 
            className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">September 2024 - November 2024</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              Competition Division -
              <span className="text-sm text-stone-500"> Tech Enthusiast Day (TED)</span>
            </h3>
            <p className="mb-4 text-stone-400">
              TED (Tech Enthusiast Day) is a competition held by the Science and Technology Division of KMTEDI (Keluarga Mahasiswa Teknik Elektro Dan Informatika) Vocational School, Gadjah Mada University. At TED, I was in the Competition Division, especially in the ICT Business Development competition.
            </p>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  