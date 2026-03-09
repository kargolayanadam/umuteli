import React from 'react';
import { FaUsers, FaHandsHelping, FaGlobe, FaHandHoldingHeart } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      number: '5.000+',
      label: 'Yardım Ulaştırılan Aile',
      icon: <FaHandsHelping />
    },
    {
      number: '1.200+',
      label: 'Kayıtlı Üye',
      icon: <FaUsers />
    },
    {
      number: '3',
      label: 'Aktif Yardım Bölgesi (Filistin • Deprem Bölgesi • Afrika)',
      icon: <FaGlobe />
    },
    {
      number: '3.190',
      label: 'Kesilen Kurban Sayısı',
      icon: <FaHandHoldingHeart />
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;