import React from 'react'
import{
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon
    
} from 'react-share'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='container'>
              <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='d-flex'>
                          <a href='(929)-321-2641'>(929)-321-2641</a>
                      </div>
                      <div className='d-flex'>
                          <p>dimaakulau1988@gmail.com</p>
                      </div>
                  </div>
                  <div className='col-lg-3 col-md-2 col-sm-6'>
                      <div className='row'>
                          <div className='col'>
                              <a className='footer-nav'>Home</a>
                              <br/>
                              <a className='footer-nav'>About Me</a>
                              <br/>
                              <a className='footer-nav'>Skills</a>
                              <br/>
                          </div>
                          <div className='col'>
                              <a className='footer-nav'>Education</a>
                              <br/>
                              <a className='footer-nav'>Portfolio</a>
                              <br/>
                              <a className='footer-nav'>Contacts</a>
                              <br/>
                          </div>
                      </div>
                  </div>
                  <div className='col-lg-5 col-md-5 col-sm-6'>
                      <div classname='d-flex justify-content-center'>
                          <FacebookShareButton url={'https://www.facebook.com/dima.akulov.965'}
                          quote={'Software developer'}
                          hashtag='#javascript'> 
                             <FacebookIcon className='mx-3' size={36}/>
                          </FacebookShareButton>
                          <LinkedinShareButton url={'https://www.linkedin.com/in/dmitry-akulov-0781b0174/'}
                          quote={'Software developer'}
                          hashtag='#javascript'> 
                             <LinkedinIcon className='mx-3' size={36}/>
                          </LinkedinShareButton >
                      </div>
                      <p className='pt-3 text-center'>
                          Copyright&copy;
                          {new Date().getFullYear()}&nbsp;Dmitry Akulov | All Rights Reserved
                      </p>
                  </div>
              </div>
           </div> 
        </div>
    )
}

export default Footer
