import { useState } from 'react';
import { FaBriefcase, FaUsers, FaGraduationCap, FaHeart, FaCheck } from 'react-icons/fa';
import { restaurants } from '../data/restaurants';
import './Career.css';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    restaurant: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const positions = [
    'Server',
    'Host/Hostess',
    'Line Cook',
    'Sous Chef',
    'Head Chef',
    'Restaurant Manager',
    'Assistant Manager',
    'Bartender',
    'Dishwasher',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Please upload a PDF or DOC file' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.resume) newErrors.resume = 'Please upload your resume';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      restaurant: '',
      coverLetter: '',
      resume: null
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Careers</span>
          <h1 className="page-title">
            Join Our <em>Team</em>
          </h1>
          <p className="page-description">
            Build your career with BlueCilantro Hospitality Group. We're always
            looking for passionate individuals who share our love for great food and exceptional service.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-subtitle">
            Join a team that values your growth and celebrates your success.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaBriefcase />
              </div>
              <h3>Career Growth</h3>
              <p>Clear paths for advancement across our family of restaurant brands.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaUsers />
              </div>
              <h3>Great Team</h3>
              <p>Work alongside passionate professionals who love what they do.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaGraduationCap />
              </div>
              <h3>Training & Development</h3>
              <p>Continuous learning opportunities to enhance your skills.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaHeart />
              </div>
              <h3>Employee Benefits</h3>
              <p>Competitive wages, flexible schedules, and employee discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="application-section">
        <div className="container">
          <h2 className="section-title">Apply Now</h2>
          <p className="section-subtitle">
            Take the first step towards joining our team. Fill out the application below.
          </p>

          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <FaCheck />
              </div>
              <h3>Application Submitted Successfully!</h3>
              <p>
                Thank you for your interest in joining BlueCilantro Hospitality Group.
                We've received your application and will review it carefully.
                If your qualifications match our needs, we'll be in touch soon.
              </p>
              <button onClick={resetForm} className="btn btn-primary">
                Submit Another Application
              </button>
            </div>
          ) : (
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="position">
                    Position of Interest <span className="required">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option value="">Select a position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                  {errors.position && <div className="error-message">{errors.position}</div>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="restaurant">
                  Preferred Restaurant (Optional)
                </label>
                <select
                  id="restaurant"
                  name="restaurant"
                  className="form-control"
                  value={formData.restaurant}
                  onChange={handleChange}
                >
                  <option value="">Any location</option>
                  {restaurants.map((rest) => (
                    <option key={rest.id} value={rest.name}>{rest.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="resume">
                  Upload Resume <span className="required">*</span>
                </label>
                <div className={`file-upload ${errors.resume ? 'is-invalid' : ''}`}>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  <div className="file-upload-label">
                    {formData.resume ? (
                      <span className="file-name">{formData.resume.name}</span>
                    ) : (
                      <span>Drag & drop your resume or <strong>browse</strong></span>
                    )}
                    <span className="file-hint">PDF or DOC (Max 5MB)</span>
                  </div>
                </div>
                {errors.resume && <div className="error-message">{errors.resume}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="coverLetter">
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  className="form-control"
                  rows="5"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you'd be a great fit for our team..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Career;
