import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { leadership } from '../data/restaurants';
import './Leadership.css';

const Leadership = () => {
  return (
    <div className="leadership-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Our Team</span>
          <h1 className="page-title">
            Visionary <em>Leadership</em>
          </h1>
          <p className="page-description">
            Meet the visionary leaders driving BlueCilantro Hospitality Group's mission
            to create extraordinary dining experiences.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="leadership-grid">
          {leadership.map((leader) => (
            <div key={leader.id} className="leader-card">
              <div className="leader-image">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} />
                ) : (
                  <div className="leader-placeholder">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="leader-info">
                <h2 className="leader-name">{leader.name}</h2>
                <span className="leader-title">{leader.title}</span>
                <p className="leader-bio">{leader.bio}</p>
                <div className="leader-social">
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide our leadership and inspire our team every day.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <span>01</span>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every dish we serve and every experience we create.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <span>02</span>
              </div>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <span>03</span>
              </div>
              <h3>Community</h3>
              <p>We believe in building strong relationships with our communities and giving back.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <span>04</span>
              </div>
              <h3>Innovation</h3>
              <p>We embrace creativity and continuously seek new ways to delight our guests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
