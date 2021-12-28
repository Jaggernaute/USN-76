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
      <Contact email="bremy@hotmail.com" tel="0637670123"/>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  color: #000;

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
    background-color: #000;
    height: 1px;
  }

  &.underline:hover::after {
    width: 100%;
  }
}

.red-underline {
  border-bottom: .25em solid #FF1616;
}

.info {
  display: flex;
  gap: 2em;

  .news {
    width: clamp(340px, 50%, 640px);
  }

  .right {
    flex-grow: 1;
  }
}
</style>
