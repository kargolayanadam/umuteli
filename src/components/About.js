import React from 'react';
import { FaHeart, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Filistin’e Yardım',
      description:
        'Savaş ve abluka altında yaşam mücadelesi veren Filistinli kardeşlerimize gıda, sıcak yemek, sağlık ve acil insani yardım ulaştırıyoruz. Bağışlarınız doğrudan ihtiyaç sahiplerine güvenli şekilde ulaştırılır.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Deprem Bölgesine Yardım',
      description:
        'Depremden etkilenen bölgelerde barınma, gıda, hijyen ve temel ihtiyaç yardımları sağlıyor; zor günlerden geçen vatandaşlarımızın yeniden ayağa kalkmasına destek oluyoruz.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Afrika’ya Yardım',
      description:
        'Açlık ve susuzlukla mücadele eden Afrika’daki ihtiyaç sahiplerine gıda yardımı, temiz su projeleri ve yetim destek çalışmaları gerçekleştiriyoruz.'
    }
  ];

  return (
    <>
      {/* Yardım Alanları Section */}
      <section className="values-section">
        <h2 className="section-title">Yardım Alanlarımız</h2>
        <p className="section-subtitle">
          Bağışlarınızı en doğru yere, en hızlı şekilde ulaştırıyoruz.
        </p>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">Hakkımızda</h2>
          <p className="section-subtitle">
            İyiliği sınırların ötesine taşıyor, yardımı gerçek ihtiyaç sahipleriyle buluşturuyoruz.
          </p>

          <div className="about-content">
            <div className="about-text">
              <h3 className="about-subtitle">Biz Kimiz?</h3>
              <p className="about-paragraph">
                Umut Eli Yardımlaşma Derneği; Filistin, deprem bölgeleri ve Afrika başta
                olmak üzere, dünyanın farklı coğrafyalarındaki ihtiyaç sahiplerine umut
                olmak amacıyla kurulmuş bir sivil toplum kuruluşudur.
              </p>

              <p className="about-paragraph">
                Gönüllülerimiz ve bağışçılarımızın desteğiyle yardımları hızlı, şeffaf ve
                güvenilir şekilde yerine ulaştırıyor; yapılan her çalışmayı belgeleyerek
                kamuoyuyla paylaşıyoruz.
              </p>

              <h3 className="about-subtitle">Bağış Sonrası İletişim</h3>
              <p className="about-paragraph">
                Dileyen bağışçılarımız, yapılan yardımlar hakkında bilgilendirme alabilir;
                yardım ulaştırılan aileler ve projelerle ilgili fotoğraf, video ve raporlara
                erişebilir.
              </p>

              <p className="about-paragraph">
                Amacımız yalnızca yardım etmek değil; bağışçılar ile ihtiyaç sahipleri
                arasında güvene dayalı bir köprü kurmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;