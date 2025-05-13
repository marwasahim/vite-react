import React from 'react';

function Membres() {
  const membres = ["abdelwadoud", "younes", "wiam", "imane", "maryam", "basma", "hind", "ammar"];

  return (
    <section id="membres" style={{ padding: "50px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", color: "hotpink", marginBottom: "30px" }}>
        <strong>Les membres principaux de notre club :</strong>
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {membres.map((name, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={`img${index + 1}.jpeg`}
              alt={`Membre ${name}`}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #3b82f6", // bleu
              }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold", textTransform: "capitalize" }}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membres;

