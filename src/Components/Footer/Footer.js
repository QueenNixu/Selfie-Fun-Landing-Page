import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      
        <div class="footer-links">

            <div class="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Acerca de</h2>
                    <Link to="/acerca_de">¿Quienes somos?</Link>
                    <Link to="/acerca_de">¿Como funciona?</Link>
                    <Link to="/acerca_de">¿Precio?</Link>
                </div>
                <div class="footer-link-items">
                    <h2>Contactanos</h2>
                    <Link to="https://wa.me/+541169397184?text=Hola%20quiero%20más%20información" target='_blank'>
                        <i class="fa-brands fa-whatsapp" /> Whatsapp
                    </Link>
                    <Link to="https://ig.me/m/espejo_magico_selfie_fun" target='_blank'>
                        <i class="fa-brands fa-instagram"></i> Instagram
                    </Link>
                    <Link to="https://m.me/espejo.magico.selfie.fun?text=Hola%2C%20queria%20mas%20informacion%20sobre%20el%20producto" target='_blank'>
                        <i class="fa-brands fa-facebook"></i> Facebook
                    </Link>

                </div>
            </div>

            <div class="footer-link-wrapper">
                <div class="footer-link-items">
                    <h2>Servicios</h2>
                    <Link to="/servicios/espejo_magico">
                        <i className="fa fa-light fa-camera"></i> Espejo Magico
                    </Link>
                    <Link to="/servicios/plataforma_360">
                        <i className="fa fa-refresh"></i> Plataforma 360°
                    </Link>
                    <Link to="/servicios/shimmer_wall">
                        <i class="fa fa-regular fa-star"></i> Shimmer Wall
                    </Link>
                </div>
                <div class="footer-link-items">
                    <h2>Redes Sociales</h2>
                    <Link to="https://www.instagram.com/espejo_magico_selfie_fun/" target='_blank'>
                        <i class='fab fa-instagram' /> Instagram
                    </Link>
                    <Link to="https://www.facebook.com/espejo.magico.selfie.fun/" target='_blank'>
                        <i class='fab fa-facebook-f' /> Facebook
                    </Link>
                    <Link to="https://www.tiktok.com/@espejo_magico_selfie_fun" target='_blank'>
                        <i class="fab fa-brands fa-tiktok"></i> Tik Tok
                    </Link>
                </div>
            </div>
        </div>

        <section class="social-media">
            <div class="social-media-wrap">

                <div class="social-logo-wrapper">
                    <div class="footer-logo">
                        <Link to="/" class="social-logo">
                            <img src="/images/selfie-fun-logo-1.png" alt="SelfieFun Logo"/>
                        </Link>
                    </div>
                    <small class="website-rights">
                        © Selfie Fun, 2024.
                    </small>
                </div>

                <div class='social-icons'>
                    <Link
                    class='social-icon-link instagram'
                    to='https://www.instagram.com/espejo_magico_selfie_fun/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link facebook'
                    to='https://www.facebook.com/espejo.magico.selfie.fun/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link tiktok'
                    to='https://www.tiktok.com/@espejo_magico_selfie_fun'
                    target='_blank'
                    aria-label='Tik Tok'
                    >
                    <i class="fab fa-brands fa-tiktok"></i>
                    </Link>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Footer
