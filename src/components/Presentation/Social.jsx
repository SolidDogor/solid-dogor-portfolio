import './Social.css';

export default function Social({ url, imagePath, social }) {
  return (
    <a href={url}>
      <img src={imagePath} alt={`${social} logo`} className={`logo-${social}`} />
    </a>
  );
}
