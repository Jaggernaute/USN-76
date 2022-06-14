<template>
	<Head>

		<Meta name="language" content="fr-FR" />
		<Meta name="author" content="Jaggernaute"/>
		<Meta name="description"
		      content="L'USN76 est un club de foot basé sur la communauté de commune des villes soeurs région normandie, avec des équipes allant de la U7 au senior en passant par l'équipe feminine."/>
		<Meta name="keywords" content="Foot, foot normandie, foot villes soeurs, foot district de normandie, USN76"/>

		<!-- for the robot -->
		<Meta name="robots" content="index,follow"/>
		<Meta name="googlebot" content="index,follow"/>
		<Meta name="google" content="nositelinkssearchbox"/>
		<Meta name="google" content="notranslate"/>

		<!-- Géo-tags-->
		<Meta name="geo.region" content="FR-76" />
		<Meta name="geo.placename" content="Le Mesnil-R&eacute;aume" />
		<Meta name="geo.position" content="49.97074;1.446716" />
		<Meta name="ICBM" content="49.97074, 1.446716" />


		<!-- Facebook Open Graph markup -->
		<Meta property="og:locale" content="fr_FR" />
		<Meta property="og:url" content="" />
		<Meta property="og:type" content="website" />
		<Meta property="og:title" content="USN76 équipe de foot sur les villes soeurs" />
		<Meta name="og:email" content=""/>
		<Meta property="og:description"
		      content="L'USN76 est un club de foot basé sur la communauté de commune des villes soeurs région normandie, avec des équipes allant de la U7 au senior en passant par l'équipe feminine."/>
		<Meta property="og:image"
		      content="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.6435-0/p480x480/119037958_3210507175670134_232499023177774034_n.png?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Wpyvke9Lw4IAX8uTTpu&_nc_ht=scontent-mrs2-1.xx&tp=30&oh=fdc97dfff748c5da86fe5357eaa9b9fe&oe=60CCECD6"/>

		<Meta name="language" content="fr-FR"/>
		<Meta name="author" content="Jaggernaute"/>
		<Meta name="description"
		      content="L'USN76 est un club de foot basé sur la communauté de commune des villes soeurs région normandie, avec des équipes allant de la U7 au senior en passant par l'équipe feminine."/>
		<Meta name="keywords" content="Foot, foot normandie, foot villes soeurs, foot district de normandie, USN76"/>

		<!-- for the robot -->
		<Meta name="robots" content="index,follow"/>
		<Meta name="googlebot" content="index,follow"/>
		<Meta name="google" content="nositelinkssearchbox"/>
		<Meta name="google" content="notranslate"/>

		<!-- Facebook Open Graph markup -->
		<Meta property="og:locale" content="fr_FR"/>
		<Meta property="og:url" content=""/>
		<Meta property="og:type" content="website"/>
		<Meta property="og:title" content="USN76 équipe de foot sur les villes soeurs"/>
		<Meta name="og:email" content=""/> <!--TODO add email address -->
		<Meta property="og:description"
		      content="L'USN76 est un club de foot basé sur la communauté de commune des villes soeurs région normandie, avec des équipes allant de la U7 au senior en passant par l'équipe feminine."/>
		<Meta property="og:image"
		      content="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.6435-0/p480x480/119037958_3210507175670134_232499023177774034_n.png?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Wpyvke9Lw4IAX8uTTpu&_nc_ht=scontent-mrs2-1.xx&tp=30&oh=fdc97dfff748c5da86fe5357eaa9b9fe&oe=60CCECD6"/>
		<Title>USN 76 - Club de foot de commune des villes soeurs région normandie</Title>
	</Head>
	
  <div id="app">
	  <client-only>
		  <Header/>
	  </client-only>
    <main>
      <hero/>
      <div class="info">
        <News/>
        <div class="right">
          <teams/>
          <prices/>
        </div>
      </div>
      <Contact email="bremy@hotmail.com" tel="0769183925"/>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss">
@media (prefers-color-scheme: dark) {
	:root {
		--background-color: #000;
		--text-color: #fff;
		--accent-color: #FF1616;

		--box-shadow-color: #FF161622;
	}
}

@media (prefers-color-scheme: light) {
	:root {
		--background-color: #fff;
		--text-color: #000;
		--accent-color: #FF1616;

		--box-shadow-color: #0002;
	}
}

[data-theme="dark"] {
	--background-color: #000;
	--text-color: #fff;
	--accent-color: #FF1616;

	--box-shadow-color: #FF161622;
}

[data-theme="light"]{
	--background-color: #fff;
	--text-color: #000;
	--accent-color: #FF1616;

	--box-shadow-color: #0002;
}


body {
  margin: 0;
  background-color: var(--background-color);
  color: var(--text-color);

  #app {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(12px, 1vw, 16px);
  }

  main {
    display: grid;
    gap: 2rem;

    width: clamp(320px, 80%, 1440px);
    margin: 4rem auto;
  }
}

h1 {
  font-family: Oswald, sans-serif;
}

p {
  text-align: justify;
}

a {
  color: inherit;
  text-decoration: none;
  position: relative;

  &.underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    transition: all 0.3s ease-in-out;
    background-color: var(--text-color);
    height: 1px;
  }

  &.underline:hover::after{
    width: 100%;
  }
}

.red-underline {
  border-bottom: .25em solid var(--accent-color);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

@media (min-width: 794px) {
  .info {
    flex-direction: row;
    .news {
      width: clamp(340px, 50%, 640px);
    }

    .right {
      flex-grow: 1;
    }
  }
}

button {
  z-index: -1 !important;
}
</style>
