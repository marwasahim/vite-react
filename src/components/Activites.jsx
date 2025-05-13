import React from 'react';

function Activites() {
  return (
    <section id="activites" className="px-6 text-left py-12">
      <h1 className="text-3xl text-left text-pink-500 mb-6">
        <strong>Événements et Activités :</strong>
      </h1>
      
      {/* Container aligné à gauche */}
      <div className="max-w-4xl  text-left space-y-6">
        <p className="text-lg  font-semibold text-justify">
          <strong>Journée d'intégration/lancement (2024-2025) :</strong><br />
          La journée de lancement a permis de présenter le club tout en facilitant l'intégration des nouveaux membres.
          Jeux, activités de cohésion, et moments de convivialité ont marqué le début de cette aventure collective.
        </p>
     

        <p className="text-lg  font-semibold text-justify">
          <strong className='text left'>Compétition – Demi-finale :</strong><br />
          Nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM.
          The journey is ongoing.
        </p>

        <img src="\Demi.JPG" alt="Demi-finale" className="w-500 max-w-auto mx-auto my-4 rounded shadow" />
        
        <p className="text-lg font-semibold text-justify">
          <strong>Phase des ligues – 29 juin 2024 :</strong><br />
          En compétition à UIT Kenitra, Enactus FSBM s’est démarqué par sa cohésion et sa détermination.
          L’esprit d’équipe a porté ses fruits, ouvrant la voie vers de nouveaux défis.
        </p>

        <img src="/ligues.JPG" alt="Ligues" className="w-500 max-w-auto mx-auto my-4 rounded shadow" />

        <p className="text-lg  font-semibold text-justify">
          <strong>Journée du 8 mars – 09/03/2024 :</strong><br />
          L'événement "L'innovation au féminin" a mis en lumière les femmes leaders dans les sciences et l'entrepreneuriat.
          Des panels et un atelier de Brand Building ont enrichi cette journée inspirante.
        </p>

        <p className="text-lg  font-semibold text-justify">
          <strong>Hackathon – 15/12 au 17/12/2023 :</strong><br />
          Participation au Méga Hackathon Panafricain. Un week-end d'innovation, de créativité et de travail d’équipe pour relever des défis concrets.
        </p>

        <img src="/comp.JPG" alt="Compétition Hackathon" className="w-500 max-w-auto mx-auto my-4 rounded shadow" />
      </div>
    </section>
  );
}

export default Activites;