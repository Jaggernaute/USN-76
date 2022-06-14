<template>
  <div class="news">
    <h1>Les <span class="red-underline">Actus</span></h1>
	  <client-only>
		  <FacebookFeed/>
	  </client-only>
  </div>
</template>

<style scoped>
@media (min-width: 794px) {
  h1 {
    text-align: right;
  }
}
</style>
