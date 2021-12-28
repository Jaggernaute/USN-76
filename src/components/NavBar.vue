<template>
  <header>
    <div class="header-container">
      <nav :class="{'hamburger-open': isOpen}">
        <ul>
          <li>
            <a class="underline" href="">Accueil</a>
          </li>
          <li>
            <a class="underline" href="">Equipe</a>
          </li>
          <li>
            <a class="underline" href="">Actus</a>
          </li>
          <li>
            <a class="underline" href="">Tarifs</a>
          </li>
          <li>
            <a class="underline" href="">Contact</a>
          </li>
        </ul>
      </nav>

      <div class="mobile-header">
        <a class="word-mark">
          <img src="../assets/logo.png" alt="The logo of USN76 football club.">
          USN76
        </a>
        <a class="hamburger-menu" @click="toggleMenu()" :class="{ 'rotated' : isOpen }">
          <svg width="32" height="27" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg">
            <g fill="black">
              <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H30.5C31.3284 0 32 0.671573 32 1.5V1.5C32 2.32843 31.3284 3 30.5 3H1.5C0.671573 3 0 2.32843 0 1.5V1.5Z"/>
              <path d="M0 13.5C0 12.6716 0.671573 12 1.5 12H30.5C31.3284 12 32 12.6716 32 13.5V13.5C32 14.3284 31.3284 15 30.5 15H1.5C0.671573 15 0 14.3284 0 13.5V13.5Z"/>
              <path d="M0 25.5C0 24.6716 0.671573 24 1.5 24H30.5C31.3284 24 32 24.6716 32 25.5V25.5C32 26.3284 31.3284 27 30.5 27H1.5C0.671573 27 0 26.3284 0 25.5V25.5Z"/>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1
}

nav {
  ul {
    margin: 0;
    padding: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4vh;

    li {
      list-style: none;
    }
  }
}

.word-mark {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Oswald", Helvetica, Arial, sans-serif;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
}

@media only screen and (max-width: 639px) {
  nav {
    position: fixed;
    box-shadow: 0.5rem 0 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;

    top: 4rem;
    width: 100%;
    bottom: 0;

    ul {
      flex-direction: column;
    }

    li {
      font-size: 1.2rem;
      padding: 10px 20px;
    }

    transform: translateX(calc(-100% - .5rem));
    transition: transform 0.3s ease-in-out;

    &.hamburger-open,
    &:focus-within {
      transform: translateX(0);
    }
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    background-color: #fff;
    height: 4rem;

    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 0 20px;
  }

  .hamburger-menu {
    display: flex;
    transition: 0.3s ease-in-out;
    user-select: none;
    cursor: pointer;

    svg g {
      transition: all 0.3s ease;

      path {
        transition: all 0.3s ease;

        &:nth-child(3) {
          transform-origin: bottom left;
        }
      }
    }

    &.rotated {
      svg g {
        transform: translateX(3px);

        path {
          &:nth-child(1) {
            transform: rotate(45deg)
          }

          &:nth-child(2) {
            transform: scaleX(0)
          }

          &:nth-child(3) {
            transform: rotate(-45deg) translateY(-1.5px) translateX(0.5px)
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 640px) {
  header {
    width: 100%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .hamburger-menu {
    display: none;
  }

  .header-container {
    margin: 0 auto;
    width: clamp(280px, 80%, 1440px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }
}

</style>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
