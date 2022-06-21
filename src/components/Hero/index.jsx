import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

import './HeroStyle.css'
const Hero = () => {
  return (
      <div className='hero'>
          <div className='container'>
              <div className='content'>
                  <div className='col-1'>
                      <h1>Data to enrich your</h1>
                      <span className='primary-color'>
                          online business
                      </span>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatem rem corporis culpa nihil doloremque similique, blanditiis cumque, accusamus vero nostrum dignissimos quis saepe. Obcaecati et molestiae nobis velit aliquid!
                      </p>
                      <div className="used-by">
                          <p>USED BY</p>
                          <div className='icons'>
                              <i><FaDatabase /> Staxx</i>
                              <i><FaAsterisk /> Start Ai</i>
                              <i><FaAccusoft /> Accusoft</i>
                          </div>
                      </div>
                  </div>
                  <div className='col-2'>
                      <div className="form-layout">
                          <div className='form-container'>
                              <p className='sign-in-txt'>Sign in with</p>
                              <div className='social-login'>
                                  <i><FaFacebook size={20} /></i>
                                  <i><FaTwitter size={20} /></i>
                                  <i><FaGithub size={20} /></i>
                              </div>
                              <div className='divider'>
                                  <p><span>Or</span></p>
                              </div>
                              <form action=''>
                                  <input type="text" placeholder='Name' />
                                  <input type="email" placeholder='Email' />
                                  <input type="password" placeholder='Password' />
                                  <button>Create your acconut</button>
                              </form>
                          </div>
                          <div className='form-footer'>
                              <p>By sgning up,you agree to our
                                  <span className='primary-color'>
                                      Terms, Data Policy
                                  </span>
                                  <span className="primary-color">
                                      Cookies Policy
                                  </span>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero