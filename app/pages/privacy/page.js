import React from "react";

const PrivacyPolicy = () => {
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0a0a0a",
    color: "#666",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#2c3e50",
  };

  const subHeadingStyle = {
    fontSize: "1.5rem",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#2980b9",
  };

  const paragraphStyle = {
    marginBottom: "15px",
    fontSize: "1rem",
    color: "#777",
  };

  const listStyle = {
    marginLeft: "20px",
    listStyleType: "disc",
  };

  const emailStyle = {
    color: "#3498db",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>

      <p style={paragraphStyle}>
        This Privacy Policy explains how your personal data is collected and
        processed by the company when you use the website{" "}
        <a
          href="https://jiotvos.com/"
          style={{ color: "#3498db", textDecoration: "none" }}
        >
          https://jiotvos.com/
        </a>
        . The Cookie Policy explains what cookies are and how we use them on the
        website.
      </p>

      <h2 style={subHeadingStyle}>Information We Collect</h2>
      <p style={paragraphStyle}>
        When you access or use the website, we automatically collect general
        information about you using cookies.
      </p>
      <ul style={listStyle}>
        <li>Personal identification information (Name, Email address)</li>
        <li>IP address</li>
        <li>
          Analytics: We may allow third-party service providers to use cookies
          or similar technologies to collect information about your browsing
          activities over time and across different websites.
        </li>
      </ul>

      <h2 style={subHeadingStyle}>How We Collect Information</h2>
      <ul style={listStyle}>
        <li>
          You directly provide the company with most of the data we collect.
        </li>
        <li>
          Register online or place an order for any of our products or services.
        </li>
        <li>
          Voluntarily complete a customer survey or provide feedback via message
          boards or email.
        </li>
        <li>Use or view our website via your browser’s cookies.</li>
        <li>
          If you fill out a contact form on the website or send us an email, the
          data you provide will be retained for as long as necessary to fully
          answer and handle your message or email.
        </li>
      </ul>

      <h2 style={subHeadingStyle}>Our Use of Your Personal Data</h2>
      <ul style={listStyle}>
        <li>To manage your account.</li>
        <li>
          To email you with special offers on other products and services we
          think you might like.
        </li>
      </ul>

      <h2 style={subHeadingStyle}>How We Store Your Data</h2>
      <p style={paragraphStyle}>
        The company will store your personal data for as long as necessary in
        order to provide you with the Website or fulfill the purposes described
        above. Personal data will be deleted or anonymized when no longer
        needed, and in any case no later than 12 months after your interaction
        with the company has ceased.
      </p>

      <h2 style={subHeadingStyle}>Children</h2>
      <p style={paragraphStyle}>
        The company does not knowingly collect personal data from children under
        the age of 13. If such data has been processed without the company's
        knowledge, reasonable measures will be taken to stop the processing and
        delete the data.
      </p>

      <h2 style={subHeadingStyle}>Your Data Protection Rights</h2>
      <ul style={listStyle}>
        <li>
          The right to access – Request copies of your personal data. We may
          charge a small fee for this service.
        </li>
        <li>
          The right to rectification – Request corrections to inaccurate
          information.
        </li>
        <li>
          The right to erasure – Request the erasure of your personal data,
          under certain conditions.
        </li>
        <li>
          The right to restrict processing – Request the restriction of
          processing, under certain conditions.
        </li>
        <li>
          The right to object to processing – Object to the processing of your
          data under certain conditions.
        </li>
        <li>
          The right to data portability – Request the transfer of your data to
          another organization, under certain conditions.
        </li>
      </ul>

      <h2 style={subHeadingStyle}>Cookies</h2>
      <p style={paragraphStyle}>
        Cookies are text files placed on your computer to collect standard
        Internet log information and visitor behavior information. When you
        visit our website, we may collect information through cookies or similar
        technology.
      </p>
      <p style={paragraphStyle}>We use cookies to:</p>
      <ul style={listStyle}>
        <li>Keep you signed in.</li>
        <li>Understand how you use our website.</li>
      </ul>
      <p style={paragraphStyle}>
        You can set your browser to not accept cookies. However, some website
        features may not function as a result.
      </p>

      <h2 style={subHeadingStyle}>Privacy Policy Changes</h2>
      <p style={paragraphStyle}>
        The company keeps its privacy policy under regular review and updates
        this page accordingly. Last updated on October 5, 2024.
      </p>

      <h2 style={subHeadingStyle}>Contact</h2>
      <p style={paragraphStyle}>
        If you have any questions about the company’s privacy policy or wish to
        exercise your data protection rights, please contact us at:{" "}
        <span style={emailStyle}>email@example.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
