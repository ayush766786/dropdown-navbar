import {motion} from 'framer-motion'

const About=()=>{
  return <>
  <motion.div className='home'
  // initial={{ opacity: 0, x: -100 }}
  // animate={{ opacity: 1, x: 0 }}
  // exit={{ opacity: 0, x: 100 }}
  // transition={{ duration: 0.5 }}

  // initial={{ opacity: 0, rotateY: -180 }}
  // animate={{ opacity: 1, rotateY: 0 }}
  // exit={{ opacity: 0, rotateY: 180 }}
  // transition={{ duration: 0.6 }}
  >
 <h1>this is about page</h1>
  </motion.div>
 
  </>
}
export default About;