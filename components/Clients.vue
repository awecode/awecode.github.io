<template>
  <div id="clients">
    <div id="clientImages">
      <h1><b>Clients</b></h1>
      <!-- <ContentDoc path="/clients"></ContentDoc> -->
      <div v-for="each in data" :key="each.title" class="eachClientImage">
        <img
          data-original="img/clients/awecountant.png"
          :height="each.height"
          :alt="each.title"
          class="loaded"
          style="margin: 0"
          :src="each.image"
          data-was-processed="true"
        />
        <span
          v-if="each.name"
          :style="
            'color:' +
            each.color +
            '; vertical-align: top; margin-top: 0.8rem; line-height: 1.1rem; display: inline-block; margin-left:' +
            each.marginLeft +
            ';'
          "
          v-html="each.name"
        ></span>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data } = await useAsyncData('clients', () =>
  queryContent('/clients').find()
)
</script>

<style>
#clients img {
  /* height: 60px; */
  margin: 2rem;
  width: auto;
  max-width: 80%;
}

#clientImages {
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 99%;
  justify-content: center;
  vertical-align: top;
  display: inline-block;
  margin: auto;
  margin-top: 3rem;
}

#clientImages h1 {
  padding-bottom: 1rem;
}
#clientImages > div {
  display: inline-block;
  padding: 2rem;
  /* width: 200px; */
  text-align: center;
}
#clients img {
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: left;
  margin: 0;
}
/* #clients .eachClientImage:hover {
  transform: scale(1.3);
} */

/* #clients ul {
  
  } */
.customText {
  color: #48382d;
  vertical-align: top;
  margin-top: 0.8rem;
  line-height: 1.1rem;
  display: inline-block;
  margin-left: -1rem;
}
</style>
