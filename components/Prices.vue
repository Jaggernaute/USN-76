<template>
  <div id="tarifs" class="prices">
  <h1><span class="red-underline">Les tar</span>ifs</h1>

  <div class="container">
    <div class="item">
      <p>U7 de (XY à XZ ans)</p>
      <p>U9 (de XY à XZ ans)</p>
    </div>
    <div class="price">
      <p>45€</p>
    </div>

    <div class="item">
      <div class="item">
        <p>U11 de (XY à XZ ans)</p>
        <p>U13 (de XY à XZ ans)</p>
      </div>
    </div>
    <div class="price">
      <p>55€</p>
    </div>

    <div class="item">
      <div class="item">
        <p>U15 de (XY à XZ ans)</p>
        <p>U18 (de XY à XZ ans)</p>
      </div>
    </div>
    <div class="price">
      <p>65€</p>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  vertical-align: center;
  grid-gap: 10px;
}
.item{
  p{
    text-align: right
  }
}

.price{
  p{
    text-align: center;
    font-size: 1.5em;
  }
}
</style>