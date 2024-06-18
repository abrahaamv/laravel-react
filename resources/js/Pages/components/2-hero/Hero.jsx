import Lottie from 'lottie-react'
import devAnimation from '../../animation/dev.json'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import html2canvas from 'html2canvas'
import JSPDF from 'jspdf'
import './hero.css'

export default function Hero() {
  const lottieRef = useRef()

  const downloadPdf = () => {
    const input = document.body
    const pdfWidth = input.offsetWidth
    const pdfHeight = input.offsetHeight
    const extraHeight = 10

    html2canvas(input, {
      scrollY: -window.scrollY,
      scale: 2,
      height: pdfHeight + extraHeight,
      width: pdfWidth
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new JSPDF('p', 'px', [pdfWidth, pdfHeight])
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('Abrahaam-portfolio.pdf')
    })
  }

  return (
    <section className='hero flex'>
      <div className='left-section  '>
        <div className='parent-avatar flex'>
          <motion.img
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1.1)' }}
            transition={{ damping: 6, type: 'spring', stiffness: 100 }}
            src='/images/me.avif'
            className='avatar'
            alt='profile-image'
          />
          <div className='icon-verified' />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='title'
        >
          Full Stack Junior developer, Based in Guatemala City.
        </motion.h1>

        <p className='sub-title'>
          My name is Abrahaam Véliz, and I'm currently studying Systems Engineering
          with a focus on programming. I'm passionate about web development and always
          seeking opportunities to learn and improve my skills.
          I'm dedicated to bringing the best of my abilities to every project I undertake.
        </p>

        <div className='all-icons flex'>
          <button className='download-button' onClick={downloadPdf}>Download CV</button>
          <div className='icon icon-twitter' />
          <div className='icon icon-instagram' />
          <div className='icon icon-github' />
          <div className='icon icon-linkedin' />
        </div>
      </div>

      <div className='right-section animation '>
        <Lottie
          lottieRef={lottieRef}
          className=''
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5)
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  )
}
