// import { motion } from 'framer-motion'

// const Home = () => {
//   return <>
//     <motion.div className='home'
//       initial={{ opacity: 0, x: -100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 100 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1>Home Page</h1>
//       <p>Welcome to the Home Page!</p>
//     </motion.div>
//   </>
// }
// export default Home;

// import { motion } from 'framer-motion';

// const Home = () => {
//   return (
//     <motion.div
//       className='home'
//       initial={{ opacity: 0, x: -100, rotate:-360}} // Start with scale 0.5
//       animate={{ opacity: 1, x: 0, rotate:0}} // Scale to 1
//       exit={{ opacity: 0, x: 100, rotate:360}} // Exit with scale 0.5
//       transition={{ duration: 0.5, ease: "easeInOut" }}

//     >
//       <h1>Home Page</h1>
//       <p>Welcome to the Home Page!</p>
//     </motion.div>
//   );
// };

// export default Home;


import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt'
import { useEffect,useRef } from 'react';

const Home = () => {
  const tiltref=useRef(null)
  useEffect(()=>{
    if (tiltref.current) {
      VanillaTilt.init(tiltref.current, {
        max: 25, // Maximum tilt rotation (degrees)
        speed: 400, // Speed of the tilt animation (milliseconds)
        scale: 1.1, // Scale when hovered
        glare: true, // Enable glare effect
        "max-glare": 0.5, // Maximum glare opacity
        perspective: 1000,
      });
    }
  },[])
  return (

    <motion.div className='home'
    
      initial={{ opacity: 0, rotateY: -180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >

      <motion.h1 initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}>this is contact page</motion.h1>
      <p ref={tiltref} className='para'>Welcome to the Home Page!</p>
    </motion.div>
  );
};

export default Home;


