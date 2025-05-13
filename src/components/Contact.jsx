import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: "50px 20px", backgroundColor: "#e2e8f0", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", color: "hotpink", marginBottom: "20px" }}>
        <strong>Contactez-nous :</strong>
      </h1>
      <p>Faculté des Sciences Ben M'Sick, Casablanca.</p>
      
      <p> 
        Email : <a href="mailto:enactus24.25fsbm@gmail.com" style={{ color: "blue", textDecoration: "underline" }}>
          enactus24.25fsbm@gmail.com
        </a>
      </p>
      
      <p>
        Tel : <a href="tel:+212639380894" style={{ color: "blue", textDecoration: "underline" }}>
          +212 639 380 894
        </a>
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px", marginBottom: "10px" }}>
        <strong>Restez connectés :</strong>
      </h2>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "8px" }}>
          <a href="https://www.linkedin.com/company/enactus-fsbmc/" style={{ color: "blue", textDecoration: "underline" }}>
            LinkedIn
          </a>
        </li>
        <li style={{ marginBottom: "8px" }}>
          <a href="https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo" style={{ color: "blue", textDecoration: "underline" }}>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@enactus.fsbmposting" style={{ color: "blue", textDecoration: "underline" }}>
            TikTok
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
