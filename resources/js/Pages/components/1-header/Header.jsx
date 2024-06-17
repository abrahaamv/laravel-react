import { useEffect, useState } from 'react'
import './header.css'

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [theme])
  return (
    <header className='flex'>
      <button className='menu icon-menu flex' onClick={() => setShowModal(true)} />

      <div />
      <nav>
        <ul className='flex'>
          <li><a href=''>About</a></li>
          <li><a href=''>Articles</a></li>
          <li><a href=''>Projects</a></li>
          <li><a href=''>Speaking</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem('currentMode', theme === 'dark' ? 'light' : 'dark')
          setTheme(localStorage.getItem('currentMode'))
        }} className='mode flex'
      >
        <span className={theme === 'dark' ? 'icon-moon-o' : 'icon-sun'} />
      </button>

      {showModal && (
        <div className='fixed'>
          <ul className='modal'>
            <li>
              <button className='icon-close' onClick={() => setShowModal(false)} />
            </li>
            <li><a href=''>About</a></li>
            <li><a href=''>Articles</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Speaking</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

