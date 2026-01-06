import { TECHNOLOGIES_DATA } from '../../data';
import TechCard from './TechCard';
import './Technologies.css';

export default function Technologies() {
  return (
    <section className="technologies-section">
      <h1 className="title">Tecnologías</h1>

      <div className="technologies-grid">
        {TECHNOLOGIES_DATA.map((item) => (
          <TechCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
