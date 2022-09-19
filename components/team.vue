<template>
  <div>
    <div id="team">
      <h1 class="teamHeading"><b>Team</b></h1>
      <div class="teamImages">
        <div v-for="each in data" :key="each.title">
          <a
            v-if="each.href"
            itemprop="url"
            :href="each.href"
            target="_blank"
            rel="nofollow"
          >
            <img
              itemprop="image"
              class="lazy loaded"
              :alt="each.title"
              :src="each.src"
              data-was-processed="true"
            />
            <div itemprop="name" class="name">{{ each.name }}</div>
          </a>
          <div v-else>
            <img
              itemprop="image"
              class="lazy"
              :src="each.src"
              :alt="each.title"
            />
            <div itemprop="name" class="name">{{ each.name }}</div>
            <meta itemprop="jobtitle" content="Mobile App Engineer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#team img {
  display: flex;
  border-radius: 50%;
  border: 10px solid #e4e3e3;
  height: 6rem;
  width: 6rem;
}
.teamHeading {
  padding: 1rem 0;
}
#team {
  padding: 1rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.teamImages > div {
  display: inline-block;
  padding: 2rem;
  /* width: 200px; */
  text-align: center;
}

#team.alt {
  background: #222;
  color: #ddd;
}
#team.alt a {
  color: #ddd;
}
.name {
  padding-left: 0;
}
</style>

<script setup>
const { data } = await useAsyncData('teams', () =>
  queryContent('/teams').find()
)
</script>
