import React, { useState } from "react";

function Home() {
  const [joined, setJoined] = useState(false);
  /*joined = une variable d’état (qui dit si la personne a rejoint le club ou pas).
setJoined = une fonction pour changer la valeur de joined.
false = valeur initiale : par défaut, la personne n’a pas encore rejoint le club.*/

  return (
    <section id="home" style={{ height: "100vh", marginTop: "80px", position: "relative" }}>
    <video
  src="/vidclub.mp4"
  autoPlay
  muted
  loop
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  }}
></video>

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}><strong>Bienvenue au Club Créatif :</strong></h1>

        {!joined ? (
          <button
            onClick={() => setJoined(true)} 
            style={{
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}                          
           
          >
            Rejoindre le club
          </button>
        ) : (
          <p style={{ color: "lightgreen", fontSize: "1rem", marginTop: "1rem" }}>
            ✔ Vous avez rejoint le club !
          </p>
        )}
      </div>
    </section>
  );
}
export default Home;

