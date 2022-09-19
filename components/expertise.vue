<template>
  <div id="expertise" class="bg-darkk">
    <div class="imageContainer">
      <h1 class="text-color expertiseHeadingText"><b>Expertise</b></h1>
      <!-- <content-doc path="/tech"></content-doc> -->
      <div v-for="each in data" :key="each.title" class="eachTech">
        <img
          class="lazy loaded"
          :alt="each.title"
          :title="each.title"
          :src="each.src"
          data-was-processed="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('expertise', () =>
  queryContent('/expertise').find()
)
</script>

<style>
#expertise {
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  vertical-align: top;
  display: inline-block;
  margin-top: 3rem;
  padding-bottom: 3rem;
}

#expertise img {
  display: inline-block;
  /* padding: 0 1rem; */
  height: 50px;
  margin: 2rem 2rem;
}
/* #expertise img:hover {
  transform: scale(1.3);
} */
/* .imageContainer{
  width: 90%;
  margin: auto;
} */

#expertise ul {
  padding-bottom: 4rem;
  max-width: 90%;
  margin: auto;
}
.expertiseHeadingText {
  padding-bottom: 1rem;
}

#expertise .eachTech {
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: left;
  margin: 0;
}
</style>
