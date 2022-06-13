<template>
  <div class="news">
    <h1>Les <span class="red-underline">Actus</span></h1>
    <FacebookFeed/>
  </div>
</template>

<script>
import FacebookFeed from "@/components/FacebookFeed";

export default {
  name: "News",
  components: {FacebookFeed}
}
</script>

<style scoped>
@media (min-width: 794px) {
  h1 {
    text-align: right;
  }
}
</style>
