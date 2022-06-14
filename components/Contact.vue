<script>

export default {
  name: "Contact",
  props: {
    email: {
      type: String,
      required: true
    },
    tel: {
      type: String,
      required: true
    },
  }
}
</script>

<template>
  <div id="contact" class="contact">
    <h1>C<span class="red-underline">ontac</span>t</h1>
    <div class="contact-wrapper">
      <p class="mail">
        <a class="underline" v-bind:href="'mailto:' + email">
          {{ email }}
        </a>
      </p>
      <p class="phone">
        <a class="underline" v-bind:href="'tel:' + tel">
          {{ tel }}
        </a>
      </p>
    </div>
    <iframe
        title="google map" src="https://maps.google.com/maps?q=Le+Mesnil-Rhéaume&amp;output=embed">
    </iframe>
  </div>
</template>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      margin: 0.5em;

      a {
        color: var(--text-color);
        text-decoration: none;
      }
    }
  }

  iframe {
    width: 100%;
    aspect-ratio: 69/42;
  }
}

</style>

