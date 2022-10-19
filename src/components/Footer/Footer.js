import React from 'react';
import './Footer.css'


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
                    src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
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
                    src="https://www.freeiconspng.com/thumbs/twitter-icon/twitter-icon-download-18.png"
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
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
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
