import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
  return (
    <footer className="bg-[#000017] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-8 md:px-24">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="rounded bg-zinc-300 w-full h-72 md:w-72 md:h-72 xl:w-96 xl:h-96">
            {/* Map Embed */}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.203336047934!2d67.26210887401167!3d24.856903945402394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1727465448702!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left ml-0 md:ml-4">
          <div className="mb-4">
            <p className="mb-4 text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
              Follow Us
            </p>
            <div className="flex space-x-4 mb-4 justify-center items-center flex-row">
              <a 
                href="https://www.linkedin.com/company/acmnuceskhi" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
              </a>
              <a 
                href="https://www.facebook.com/acmnuceskhi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
              </a>
              <a 
                href="https://www.instagram.com/acmnuceskhi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
              </a>
            </div>

            <h1>About the Developers</h1>
            <ul className="mt-4 space-y-1 mb-4 text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
              <li>
                <a 
                  href="https://www.linkedin.com/in/owais-rafiq-639494253/" 
                  className="hover:underline" 
                  aria-label="Owais Rafiq's LinkedIn profile"
                >
                  Owais Rafiq
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/sunnyallana/" 
                  className="hover:underline" 
                  aria-label="Sunny Shaban Ali's LinkedIn profile"
                >
                  Sunny Shaban Ali
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ali-nazir-74b909275/" 
                  className="hover:underline" 
                  aria-label="Ali Nazir's LinkedIn profile"
                >
                  Ali Nazir
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-col justify-center md:justify-start items-center gap-y-1 md:items-start">
              <p className="text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
                Contact Us
              </p>
              <p className="flex items-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
                <a href="tel:+9221341005416" className="flex items-center text-white" aria-label="Call us at (+92-213) 410-0541-6">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> (+92-213) 410-0541-6
                </a>
              </p>
              <p className="flex items-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
                <a href="mailto:info@nu.edu.pk" className="flex items-center text-white" aria-label="Email us at info@nu.edu.pk">
                  <span className="mr-2">✉️</span> info@nu.edu.pk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-2 border-t border-black mt-auto">
        <p className="text-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-normal">
          &copy; 2024 ACM | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;