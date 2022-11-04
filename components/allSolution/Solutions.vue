<template>
  <div>
    <ContentDoc
      path="/solutions"
      id="solutionss"
      class="bg-darkk mt-none"
    ></ContentDoc>
  </div>
</template>

<style>
@media screen and (max-width: 900px) {
  #solutionss li {
    width: 80% !important;
  }
}
#solutionss {
  padding: 1rem 1rem 4rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#solutionss ul {
  position: relative;
  padding: 0;
  max-width: 900px;
}
#solutionss li,
#solutionss li:before {
  transition: all 0.4s;
}
#solutionss ul:hover li {
  opacity: 0.4;
}
#solutionss li {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  color: #aaa;
  background: #333;
  text-decoration: none;
  text-transform: uppercase;
  width: 49%;
  min-height: 4rem;
  padding: 1rem;
  font-weight: 700;
  cursor: default;
}
#solutionss li:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 20px;
  background: #444;
}
#solutionss li + li {
  border-top: 2px solid #222;
}
#solutionss ul li:focus,
#solutionss ul li:hover {
  opacity: 1;
  padding-left: 55px;
}
#solutionss ul li:focus:before,
#solutionss ul li:hover:before {
  width: 30px;
}
</style>
