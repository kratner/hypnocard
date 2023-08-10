import React, { FC } from "react";

interface HypnoCardProps {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
}

const HypnoCard: FC<HypnoCardProps> = ({
  name = "John Smith",
  title = "Title",
  phone = "123-456-7890",
  email = "john.smith@example.com",
}) => {
  return (
    <div className="hypno-card">
      <div className="hypno-card-header">
        <h2 className="hypno-card-name">{name}</h2>
        <p className="hypno-card-title">{title}</p>
      </div>
      <div className="hypno-card-content">
        <p className="hypno-card-phone">{phone}</p>
        <p className="hypno-card-email">{email}</p>
      </div>
    </div>
  );
};

export default HypnoCard;
