<template>
  <main>
    <div>
      <!-- <ContentDoc id="home" /> -->
      <Header></Header>
      <!-- <AllSolutionHeading></AllSolutionHeading> -->
      <AllSolutionDevelopments></AllSolutionDevelopments>
      <AllSolutionSolutions></AllSolutionSolutions>
      <ProjectsInHouse></ProjectsInHouse>
      <ProjectsTechnicalPartners></ProjectsTechnicalPartners>
      <Clients></Clients>
      <ProjectsGovernment></ProjectsGovernment>
      <Expertise></Expertise>
      <Team></Team>
      <Footer></Footer>
    </div>
  </main>
</template>

<script setup>
// useHead({
//   title: 'Awecode',
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
//   charset: 'utf-8',
//   meta: [
//     {
//       name: 'description',
//       content:
//         'Awecode is a software development company specializing in Information Systems and Software as a Service.',
//     },
//   ],
// })
</script>

<style>
body,
body > div,
html {
  height: 100%;
}
body {
  font-family: Titillium Web, sans-serif;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100vw;
  overflow-x: hidden;
}
a,
body {
  color: #444;
}
a {
  text-decoration: none;
}
h1 {
  font-size: 2rem;
}

/* 
  #home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0;
    text-align: center;
  }
  
  #home h1 {
    margin-top: 0;
  }
  
  .aweLogo {
    width: 270px;
    height: 270px;
  }*/
.bg-darkk {
  background-color: #222;
}
ul {
  padding-left: 0px;
}
</style>
