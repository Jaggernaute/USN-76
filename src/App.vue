<script>
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Teams from '@/components/Teams';
import Prices from '@/components/Prices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import News from "@/components/News";

export default {
  name: 'App',
  components: {
    News,
    NavBar,
    Hero,
    Prices,
    Teams,
    Contact,
    Footer
  },
}
</script>

<template>
  <div id="app">
    <Nav-bar/>
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
