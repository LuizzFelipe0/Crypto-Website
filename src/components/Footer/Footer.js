import React from 'react';
import './Footer.css'
import GithubIcon from '../../../src/GithubIcon.png';
import InstagramIcon from '../../InstagramIcon.png';
import TwitterIcon from '../../TwitterIcon.png';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="container">
          <div className="redes_sociais">
            <ul>
              <a
                target="_blank"
                href="https://www.instagram.com/luizfelipecanario/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={TwitterIcon}
                    alt="twitter"
                  />
                </li>
              </a>
              <a
                target="_blank"

                href="https://github.com/LuizzFelipe0"

                rel="noreferrer"
              >
                <li>
                  <img src={GithubIcon} alt="github" />
                </li>
              </a>
            </ul>
            <h5>© 2022 LuizCryptoCoins</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer;
