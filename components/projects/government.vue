<template>
  <div id="govoffices">
    <div
      class="gov-header"
      style="display: flex; justify-content: center; align-items: end"
    >
      <img
        src="http://www.nepal.gov.np/splash/nepal-govt.png"
        class="coatOfArms"
        alt="Coat of Arms"
        title="Nepali Government Offices"
      />
      <p><b>Nepali Governmental Bodies:</b></p>
    </div>
    <ContentDoc path="/governmentbodies" id="COA"></ContentDoc>
  </div>
</template>

<style>
.gov-header {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.gov-header h4 {
  display: inline-block;
  vertical-align: top;
}
.gov-header p {
  align-items: end;
}

#govoffices {
  text-align: center;
}
#govoffices ul {
  position: relative;
  padding: 0;
  margin-bottom: 65px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

#govoffices li {
  width: 30%;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  text-align: left;
}
@media screen and (max-width: 1500px) {
  #govoffices li {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
    width: 40%;
    text-align: left;
  }
  #govoffices ul {
    margin: auto;
    /* max-width: 90%; */
    margin-bottom: 65px;
  }
}
@media screen and (max-width: 1100px) {
  #govoffices ul {
    position: relative;
    /* padding-left: 50px; */
    margin-bottom: 65px;
    flex-wrap: wrap;
    width: 90%;
  }

  #govoffices li {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
    width: 85%;
    text-align: left;
  }
}

#COA img {
  height: 20px;
  width: 20px;
  margin-right: 3px;
}
.coatOfArms {
  height: 70px;
  width: 70px;
  margin: 0;
  margin-right: 5px;
}
.gov-header {
  padding-bottom: 20px;
}
</style>
