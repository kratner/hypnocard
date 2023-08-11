import { FC } from "react";
import QRCode from "react-qr-code"; // Import the QRCode component

interface Link {
  url: string;
  target?: string;
  title?: string;
  linkname: string;
}

interface HypnoCardProps {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
  cardUrl: string; // New prop for the card's URL
  links?: Link[];
}

const HypnoCard: FC<HypnoCardProps> = ({
  name = "John Smith",
  title = "Title",
  phone = "123-456-7890",
  email = "john.smith@example.com",
  cardUrl,
  links,
}) => {
  return (
    <div className="hypno-card">
      <div className="hypno-card-content">
        <div className="hypno-card-column">
          <h2 className="hypno-card-name">{name}</h2>
          <p className="hypno-card-title">{title}</p>
          <p className="hypno-card-phone">{phone}</p>
          <p className="hypno-card-email">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className="hypno-card-column">
          <div className="hypno-card-qrcode">
            <QRCode value={cardUrl} size={100} />
          </div>
        </div>
        <div className="hypno-card-column">
          {links &&
            links.map((link, index) => (
              <p className="hypno-card-link" key={index}>
                <a href={link.url} target={link.target} title={link.title}>
                  {link.linkname}
                </a>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HypnoCard;
