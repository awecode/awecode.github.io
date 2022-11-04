<template>
  <div id="inHouse">
    <div class="projects">
      <h1 class="headText"><b>In-house Projects</b></h1>
      <!-- <ContentDoc path="/inhouseprojects"></ContentDoc> -->
      <div class="eachImg" v-for="each in data" :key="each.title">
        <a :href="each.src" target="_blank">
          <img
            height="50"
            :alt="each.title"
            class="initial loaded"
            :src="each.image"
            data-was-processed="true"
          />
          <span
            v-if="each.name"
            style="
              font-size: 1.8rem;
              font-weight: bold;
              vertical-align: top;
              margin-top: 0.3rem;
              display: inline-block;
            "
            >{{ each.name }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data } = await useAsyncData('', () =>
  queryContent('/inhouseprojects').find()
)
</script>

<style>
.projects {
  padding-bottom: 3rem;
}
#inHouse {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  font-weight: bold;
  vertical-align: top;
  margin-top: 0.3rem;
  display: inline-block;
  padding-bottom: 1rem;
}

.headText {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
#inHouse a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: left;
}
#inHouse .eachImg {
  display: inline-block;
  margin: 2rem;
  text-align: center;
}
/* #inHouse .eachImg:hover {
  transform: scale(1.3);
} */
#inHouse .customText {
  color: #48382d;
  vertical-align: top;
  margin-top: 0.8rem;
  line-height: 1.1rem;
  display: inline-block;
  margin-left: -1rem;
}
@media screen and (max-width: 660px) {
  #inHouse .eachImg {
    display: inline-block;
    margin: 2rem 0;
    text-align: center;
  }
}
</style>
