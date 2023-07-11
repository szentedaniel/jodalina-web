import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from '../../util/useMediaQuery'

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')

  return (
    <nav className='relative mx-8 mb-24 flex flex-col'>
      <div className='flex justify-between items-center pt-10 pb-6'>
        <div className='block w-8'></div>
        <h1 className='text-lg font-bold'><a href='/'>Jodalina</a></h1>

        {!matches && (
          <div onClick={() => setToggled(prevToggle => !prevToggle)} className='space-y-1.5 cursor-pointer z-50'>
            <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className='block h-0.5 w-8 bg-black'></motion.span>
            <motion.span animate={{ width: toggled ? 0 : 24 }} className='block h-0.5 w-6 bg-black'></motion.span>
            <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 16 }} className='block h-0.5 w-4 bg-black'></motion.span>
          </div>
        )}

        {matches && (
          <div className='flex gap-12'>
            <a href='/'>Home</a>
            <a href='/'>Services</a>
            <a href='/'>Contact</a>
          </div>
        )}

        {toggled && !matches && (
          <div
            className='fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center'>
            <motion.div variants={navMotion} animate='visible' initial='hidden' className='flex flex-col gap-24 text-lg'>
              <motion.a variants={itemMotion} href='/'>Home</motion.a>
              <motion.a variants={itemMotion} href='/'>Services</motion.a>
              <motion.a variants={itemMotion} href='/'>Contact</motion.a>
            </motion.div>
          </div>
        )}

      </div>
      <div className='flex justify-center'>
        <span className='block h-0.5 w-48 bg-black rounded-lg'></span>
      </div>
    </nav>
  )
}
