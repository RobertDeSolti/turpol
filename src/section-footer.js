import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './scss/section-footer.scss'
// setup vars

function SectionFooter() {
  return (
    <div className='section-inner'>
      <div className='section-footer__logo'>
        <img src='img/svg/logo.svg' alt='logo' className='picture' />
      </div>
      <nav className='section-footer__nav'>
        <div className='nav-column'>
          <div className='nav-column__tittle'>Company</div>
          <ul className='nav-column__chapters'>
            <li className='items'>
              <a href='#!' className='items__link'>
                About
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Team
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Careers
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className='nav-column'>
          <div className='nav-column__tittle'>Locations</div>
          <ul className='nav-column__chapters'>
            <li className='items'>
              <a href='#!' className='items__link'>
                Warsaw
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Cracow
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Gdansk
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Katowice
              </a>
            </li>
          </ul>
        </div>
        <div className='nav-column'>
          <div className='nav-column__tittle'>Social Media</div>
          <ul className='nav-column__chapters'>
            <li className='items'>
              <a href='#!' className='items__link'>
                Facebook
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Twitter
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Instagram
              </a>
            </li>
            <li className='items'>
              <a href='#!' className='items__link'>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

ReactDOM.render(<SectionFooter />, document.getElementById('footer'))
