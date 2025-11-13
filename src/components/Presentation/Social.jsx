import './Social.css';

export default function Social({ url, imagePath, social }) {
  return (
    <a href={url}>
      <img src={imagePath} alt={`Logo de ${social}`} className={`logo-${social}`} />
    </a>
  );
}
