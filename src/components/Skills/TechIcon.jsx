import './TechIcon.css';

export default function TechIcon({ imagePath, technologieName }) {
  return (
    <div className="tech-icon">
      <img src={imagePath} alt={`${technologieName} image`} className="tech-icon" />
    </div>
  );
}
