<template>
  <div class="hero">
    <div class="left">
      <h1><span class="red-underline">Le clu</span>b</h1>
      <p>
        L'US Normande 76 a été créé en 2016 et regroupe les communes de St Pierre en Val, St Remy Boscrocourt,
        Baromesnil, Bouvaincourt sur Bresle et Le Mesnil Réaume.
      </p>
      <p>
        Les principaux objectifs sont de maintenir et d'amplifier la pratique du football dans nos communes rurales, de
        participer à l'éducation des jeunes, de maintenir un tissu social et associatif et de garantir l'utilisation des
        équipements sportifs mis à disposition par les municipalités.
      </p>
      <p>
        Notre objectif est d’offrir aux adhérents un accueil chaleureux et convivial dans un cadre familial mais
        néanmoins ambitieux.
      </p>
      <p>
        Nous souhaitons en effet jouer un rôle social et fédérateur dans nos villages et promouvoir ainsi le football
        local dans un esprit sportif aux valeurs éducatives affirmées.
      </p>
      <p>
        L’US Normande se développe constamment et organise régulièrement des tournois pour les jeunes (en salle en
        extérieur), propose des stages pendant les vacances scolaires à destination des jeunes de 4 à 16 ans totalement
        gratuits et ouverts aux licenciés et aux non licenciés, effectue chaque année un tournoi de sixte (adulte) en
        juillet ainsi que différentes autres manifestations (soirées à thème, marche dinatoire, loto de Noël, vente de
        calendrier par exemple).
      </p>
      <p>
        Par ailleurs, le club recrute et forme chaque année ses éducateurs bénévoles auprès de la Fédération Française
        de Football.
      </p>
    </div>
    <div class="right">
      <div class="zoom">
        <img src="../assets/team.png" alt="L'équipe de football de USN76 à Eu.">
      </div>
      <p>E<span class="red-underline">nsemble</span> pour aller plus loin</p>
      <div class="partners">
        <a href="https://dfsm.fff.fr/" target="_blank">
          <img src="../assets/partner0.png" alt="Logo du district de football de Seine-Maritime">
        </a>
        <a href="https://normandie.fff.fr/" target="_blank">
          <img src="../assets/partner1.png" alt="logo de la ligne de football de Normandie">
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background-image: url(../assets/baballe.png);
    background-size: min(69%, 42vw, 280px);
    background-position: center;
    background-repeat: no-repeat;
  }

  p {
    text-indent: 1em;
  }
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
}

.partners {
  display: flex;
  gap: 2em;

  img {
    height: 64px;
  }
}


.zoom {
  position: relative;
  overflow: hidden;

  &::after {
    content: 'Notre équipe';
    color: white;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    transform: translateY(100%);
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: translateY(0);
  }

  img {
    transition: all 0.5s;
  }

  &:hover img {
    transform: scale(1.1);
    filter: brightness(0.69);
  }
}

@media only screen and (min-width: 1280px) {
  .hero {
    margin-top: 4rem;
    display: flex;
    gap: 2em;

    .left, .right {
      width: 100%;
    }
  }
}
</style>
<script>
export default {
  name: 'Hero'
}
</script>
