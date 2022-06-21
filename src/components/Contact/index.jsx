import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import './style.css'
const Contact = () => {
  return (
      <div className='contact'>
          <div className='col-1'>
              <div className='content'>
                  <div>
                      <h2>Get in touvh</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore explicabot.</p>
                  </div>
                  <div className='address'>
                      <p>742 Evergreen Terrace</p>
                      <p>Springfield,OR 12345</p>
                  </div>
                  <div className='icons'>
                      <FaPhone style={{ marginRight: '1rem' }} />
                      <p>+1 (555) 123-4567</p>
                  </div>
                  <div className='icons'>
                      <FaEnvelope
                          style={{ marginRight: "1rem" }} />
                      <p> support@example.com</p>
                  </div>
                  <div className='careers'>
                      <p>Looking for careers?</p>
                      <span>View all jop openings.</span>
                  </div>
              </div>
          </div>
          <div className='col-2'>
              <form action=''>
                  <input type="text" placeholder='Full name' />
                  <input type='email' placeholder='Email' />
                  <input type="phone" placeholder='Phone' />
                  <textarea name='Message' rows='10' cols='30' />
                  <div className='checkbox'>
                      <input type="checkbox" />
                      <p>By checking this box,you agree to the <span>Privacy Policy</span> and
                      <span>Cookie Policy</span></p>
                  </div>
                  <button>Submit</button>
              </form>
          </div>
    </div>
  )
}

export default Contact