import React from 'react';
import {
  FaUtensils,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaHandHoldingHeart,
  FaUsers
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: <FaUtensils />,
      title: 'Gıda Yardımı',
      description:
        'Filistin, deprem bölgeleri ve Afrika’da ihtiyaç sahibi ailelere düzenli gıda kolisi ve sıcak yemek yardımı ulaştırıyoruz.',
      stat: '2.000+ Aile / Ay'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Eğitim Desteği',
      description:
        'İhtiyaç sahibi öğrencilere burs, kırtasiye ve eğitim materyali desteği sağlıyoruz.',
      stat: '500+ Öğrenci'
    },
    {
      icon: <FaHeart />,
      title: 'Sağlık Yardımı',
      description:
        'Tedavi, ilaç ve sağlık hizmetlerine erişimi olmayan ihtiyaç sahiplerine destek oluyoruz.',
      stat: '1.000+ Hasta'
    },
    {
      icon: <FaHome />,
      title: 'Barınma Desteği',
      description:
        'Deprem bölgesinde barınma, kömür ve temel yaşam destekleriyle ailelerin yanında oluyoruz.',
      stat: '800+ Hane'
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Ramazan Yardımları',
      description:
        'Ramazan ayında iftar, sahur ve gıda paketleriyle binlerce aileye destek sağlıyoruz.',
      stat: '3.000+ Paket'
    },
    {
      icon: <FaUsers />,
      title: 'Kurban Organizasyonu',
      description:
        'Kurban Bayramı’nda kesilen kurbanları Filistin, deprem bölgeleri ve Afrika’daki ihtiyaç sahiplerine ulaştırıyoruz.',
      stat: '3.190 Kurban'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projelerimiz</h2>
      <p className="section-subtitle">
        Filistin, deprem bölgeleri ve Afrika’da yürüttüğümüz yardım çalışmalarımız
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-stats">
              <span className="project-stat">{project.stat}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;