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
                    src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                    
                    alt="instagram"
                  />
                </li>
              </a>
              <a
                target="_blank"
               
                href="https://www.linkedin.com/in/luiz-felipe-costa-7a2373241/"
             
                rel="noreferrer"
              >
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  
                    alt="linkedin"
                  />
                </li>
              </a>
              <a
                target="_blank"

                href="https://github.com/LuizzFelipe0"

                rel="noreferrer"
              >
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" 
                  
                  alt="github"
                
                  rel="noreferrer"
                  />
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
