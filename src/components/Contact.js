import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        Siz de Bize Katılın!
      </h2>
      <p className="contact-text">
        Gönüllü olmak veya bağışta bulunmak için bizimle iletişime geçin. Birlikte daha fazla hayata dokunalım!
      </p>
      <a 
        href="https://wa.me/905545373053?text=Merhaba, sizinle iletişime geçmek istiyorum." 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-contact"
      >
        İletişime Geç
      </a>
    </section>
  );
};

export default Contact;