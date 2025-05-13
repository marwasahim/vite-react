import React from 'react';

function About() {
    return (
        <section id="about" className="px-6 py-12 text-left">
          <h1 className="text-3xl text-pink-500 mb-4">
            <strong>À propos de Enactus FSBM :</strong>
          </h1>
          <p className="text-lg font-semibold text-justify max-w-3xl">
        Enactus est un réseau mondial qui regroupe des étudiants, des enseignants et des chefs d'entreprise
        autour de projets d'entrepreneuriat social. Enactus FSBM représente la Faculté des Sciences Ben M'Sick,
        avec pour mission de créer un impact positif à travers l'innovation et l'action.⇒ Enactus FSBM, fondée en mars 2014 par Abderazak Bouhram, est l'héritière d'initiatives lancées en 2009 sous l'appellation SIFE. Depuis sa création, l’équipe développe des projets à impact social et économique, mobilisant chaque année 50 à 100 membres. Enactus FSBM a récemment été classée parmi le top 12 du Maroc et a été demi-finaliste lors des compétitions 2023-2024.<br/><br/>
      <h2 className="text-3xl text-pink-500 mb-4" ><strong>Fondation : 2014 </strong></h2>
        Jeunes mobilisés : +1000 étudiants impactés<br />
        Projets développés : +40 projets réalisés<br />
        Bénéficiaires impactés : +500 personnes<br />
        Heures de formations et d’accompagnement dispensées : +3000 heures<br />
        13 Objectifs du développement durable touchés
      </p>

      <h2 className="text-2xl  text-pink-500 mt-8 mb-4"><strong>Achievements :</strong></h2>
      <p className="text-left text-lg font-semibold">
        • Top 12 du Maroc<br />
        • Demi-finaliste 2023-2024<br />
        • Lauréat du prix "Enactus Got Impact"
      </p>
    </section>
  );
}

export default About;