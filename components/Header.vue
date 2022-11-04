<template>
  <div>
    <section
      id="home"
      title="Awecode is a software development company specializing in Information Systems and Software as a Service."
    >
      <div class="aweLogo">
        <img
          itemprop="logo"
          src="/img/logo.svg"
          alt="Awecode"
          width="270"
          height="270"
          class="initial loading"
          data-was-processed="true"
        />
      </div>

      <h1 itemprop="name">AWECODE</h1>
      <meta itemprop="url" content="https://awecode.com/" />
      <div class="arrow">
        <span></span>
      </div>
    </section>
  </div>
</template>
<style>
#home {
  font-family: Titillium Web, sans-serif;
  color: #444;
  padding: 1rem 1rem 4rem;
  text-align: center;
  flex-wrap: wrap;
  height: 99vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Awecode logo */
/* @keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
} */
/* 
@keyframes heartbeat {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.8);
  }
  55% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(0.8);
  }
  65% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
} */

.aweLogo {
  box-sizing: border-box;
  border-radius: 50%;
  height: 269px;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  /* transform: rotate(45deg); */
  /* animation: heartbeat 6s ease-in-out infinite; */
}
/* .aweLogo:hover {
  transform: scale(1.1);
  transform: rotate(180deg);
} */

/*Down Arrow */

.arrow {
  position: absolute;
  bottom: 7%;
  left: 51%;
  transform: translate(-50%, -50%);
}
.arrow span {
  display: block;
  width: 15px;
  height: 15px;
  border-bottom: 3px solid #222;
  border-right: 3px solid #222;
  transform: rotate(45deg);
  margin: auto;
  animation: animate 2s infinite;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-10px, -10px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(10px, 10px);
  }
}
</style>
