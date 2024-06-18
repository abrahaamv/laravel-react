import './contact.css'
import { useForm, ValidationError } from '@formspree/react'
import Lottie from 'lottie-react'
import doneAnimation from '../../animation/done.json'
import contactAnimation from '../../animation/contact.json'

const Contact = () => {
  const [state, handleSubmit] = useForm('xayrongy')

  return (
    <section className='contact-me'>
      <h1 className='title'>
        <span className='icon-envelope' />
        Contact me
      </h1>
      <p className='sub-title'>Contact me for more information and get notified when I publish something new.</p>

      <div style={{ justifyContent: 'space-between' }} className='flex'>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor='email'>Email Address:</label>
            <input autoComplete='off' required type='email' name='email' id='email' />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='flex' style={{ marginTop: '24px' }}>
            <label htmlFor='message'>Your message:</label>
            <textarea required name='message' id='message' />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button type='submit' disabled={state.submitting} className='submit'>
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
          {state.succeeded && (
            <div className='submit-succeeded' style={{ fontSize: '18px', marginTop: '1rem' }}>
              <Lottie
                loop={false}
                style={{ height: 34 }}
                animationData={doneAnimation}
              />
              <p style={{ paddingTop: 32 }} className='sub-title'>Your message has been sent successfully 👌</p>
            </div>
          )}
        </form>
        <div className='animation'>
          <Lottie
            className='contact-animation'
            style={{ height: 296 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
