import React, { FC } from 'react';

interface HypnoCardProps {
  name: string;
  title: string;
  phone: string;
  email: string;
}

const HypnoCard: FC<HypnoCardProps> = ({ name, title, phone, email }) => {
  return (
    <div className="hypno-card">
      <div className="hypno-card-header">
        <h2 className="hypno-card-name">{name}</h2>
        <p className="hypno-card-title">{title}</p>
      </div>
      <div className="hypno-card-content">
        <p className="hypno-card-phone">{phone}</p>        
        <a href={`mailto:${email}`} className="hypno-card-email">
          {email}
        </a>
      </div>
    </div>
  );
};

export default HypnoCard;
