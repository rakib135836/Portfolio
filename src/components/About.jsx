import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white flex items-center"
    >
      <div className="lg:pt-32 pt-10 mx-auto max-w-screen-lg">
        <div className="p-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl font-bold">About</p>
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl mt-10 sm:mt-20 text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hello, I am Sagor, a web developer. My proficiency in developing
            personalized websites with JavaScript guarantees that your distinct
            requirements are fulfilled. My goal is to create flawless websites
            that match your ideal user interface design, pixel by pixel. I am
            committed to making sure you are happy, so I will make as many
            changes as necessary to get the results you want.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-center mt-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            You can rely on me to handle your web development needs with a
            results-driven methodology, top-notch technical expertise, and
            painstaking attention to detail. Comfortable in: HTML, CSS,
            Javascript, Tailwind, React, Bootstrap Familiar with: Firebase,
            MongoDB, Express, NodeJS, Material UI, NextJS Tools I use: VS Code,
            Github, Netlify, Vercel, Surge, Figma Ping me with any queries or
            anything. Thank You for visiting my profile. Stay blessed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg mt-16 bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <div className="text-center">
              <p className="text-xl font-semibold border-b-2 border-gray-500 inline-block">
                Education
              </p>
            </div>
            <div className="mt-4 space-y-4">
              <motion.div
                className="p-4 bg-gray-800 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-bold">
                  Complete Web Development Course With Jhankar Mahbub
                </p>
                <p>Programming Hero</p>
              </motion.div>
              <motion.div
                className="p-4 bg-gray-800 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-bold">Higher Secondary Certificate (HSC)</p>
                <p>Govt. Bangla College(GBC)</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
