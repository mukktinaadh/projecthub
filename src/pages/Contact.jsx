import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const courseOptions = [
  "B.Tech",
  "BCA",
  "MCA",
  "MBA",
  "BBA",
  "Other",
];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  course: "",
  requirement: "New project enquiry",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[\d+\-\s()]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.course) {
    errors.course = "Please select your course.";
  }
  if (!values.message.trim()) {
    errors.message = "Please tell us about your project requirement.";
  }
  return errors;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const enquiryProject = searchParams.get("project") ?? "";

  const [values, setValues] = useState({
    ...initialValues,
    message: enquiryProject
      ? `Hi, I'm interested in the "${enquiryProject}" project. Please share more details.`
      : "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setSubmitted(true);
    setValues(initialValues);
  };

  const inputClass = (name) =>
    `form-input ${errors[name] ? "form-input-invalid" : ""}`;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Contact ProjectHub</h1>
          <p>
            Tell us about your project requirement and we&apos;ll get back to
            you with ideas, timelines and pricing.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <ul className="info-list">
              <li>
                <span className="info-icon" aria-hidden="true">
                  ✉️
                </span>
                <div>
                  <h3>Email</h3>
                  <p>hello@projecthub.example</p>
                </div>
              </li>
              <li>
                <span className="info-icon" aria-hidden="true">
                  📞
                </span>
                <div>
                  <h3>Phone</h3>
                  <p>+91 1800 000 000 (Mon–Sat)</p>
                </div>
              </li>
              <li>
                <span className="info-icon" aria-hidden="true">
                  📍
                </span>
                <div>
                  <h3>Location</h3>
                  <p>2nd Floor, Innovation Center, Baner Road, Pune 411045</p>
                </div>
              </li>
              <li>
                <span className="info-icon" aria-hidden="true">
                  🕘
                </span>
                <div>
                  <h3>Working hours</h3>
                  <p>Mon–Sat, 9:30 AM – 6:30 PM IST</p>
                </div>
              </li>
            </ul>

            <div className="info-note">
              <h3>What happens next?</h3>
              <ol>
                <li>We review your requirement within one working day.</li>
                <li>You get a shortlist of matching project options.</li>
                <li>Book a free 15-minute guidance call to decide.</li>
              </ol>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-panel" role="status">
                <span className="success-icon" aria-hidden="true">
                  ✓
                </span>
                <h2>Thanks! Your project enquiry has been received.</h2>
                <p>
                  Our team will reach out to you within one working day with
                  matching project options.
                </p>
                <div className="success-actions">
                  <Link to="/projects" className="btn btn-primary">
                    Explore Projects
                  </Link>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={inputClass("name")}
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClass("email")}
                      value={values.email}
                      onChange={handleChange}
                      placeholder="you@college.edu"
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputClass("phone")}
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone}</p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="course">Course</label>
                    <select
                      id="course"
                      name="course"
                      className={inputClass("course")}
                      value={values.course}
                      onChange={handleChange}
                    >
                      <option value="">Select your course</option>
                      {courseOptions.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="form-error">{errors.course}</p>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="requirement">Project requirement</label>
                  <select
                    id="requirement"
                    name="requirement"
                    className="form-input"
                    value={values.requirement}
                    onChange={handleChange}
                  >
                    <option>New project enquiry</option>
                    <option>Documentation support</option>
                    <option>Viva / presentation help</option>
                    <option>Something else</option>
                    {enquiryProject && (
                      <option value={enquiryProject}>{enquiryProject}</option>
                    )}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={inputClass("message")}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project requirement, deadline and college format…"
                  />
                  {errors.message && (
                    <p className="form-error">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Submit Enquiry
                </button>
                <p className="form-note">
                  This is a demo form — submissions are not sent anywhere.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
