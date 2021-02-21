import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// import { Button } from './Button';
import './components/section-header.scss'
// { user, onLogin, onLogout, onCreateAccount }

function Header() {
  return (
    <div className='section-wrapper'>
      <div className='section-header__logo'>
        <a href='#!' className='link'>
          <img src='img/svg/head_logo.svg' alt='logo' className='link__svg' />
        </a>
      </div>
      <div className='section-header__menu '>
        <ul className='list'>
          <li className='list-item'>
            <a href='#!' className='item__link'>
              Articles
            </a>
          </li>
          <li className='list-item'>
            <a href='#!' className='item__link'>
              Locations
            </a>
          </li>
          <li className='list-item'>
            <a href='#!' className='item__link'>
              Videos
            </a>
          </li>
          <li className='list-item'>
            <a href='#!' className='item__link'>
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
}

Header.defaultProps = {
  user: null,
}

ReactDOM.render(<Header />, document.getElementById('header'))
