import React from 'react'



const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <a href="https://www.digitalhouse.com/" target="_blank" >
          <img src="./images/DH.png" alt='DH-logo' />
        </a>
      </div>
      
      <div className="icon-container">
      <a href="https://www.instagram.com/_digitalhouse/" target="_blank" >
          <img className="icon" src="./images/ico-instagram2.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/DigitalHousePeru/" target="_blank" >
          <img className="icon" src="./images/ico-facebook2.png" alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" >
          <img className="icon" src="./images/ico-tiktok2.png" alt="TikTok" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank">
          <img className="icon" src="./images/ico-whatsapp2.png" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
