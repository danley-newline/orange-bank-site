<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body{
  box-sizing: border-box;
  overflow-x: hidden;
}
.bord-btm-ccc{
    border-bottom: 1px solid #ccc;
}
.bord-ccc{
    border: 1px solid #ccc;
}
.font-weight-bold{
    font-weight: bold;
}

.btn-dark-or{
    background: #000;
    color: #fff;
    font-weight: bold;

    &:hover{
      color: #fe7901;
    }
}
.color-violet{
    color: #3d3074;
}

.color-bl-dark{
            color: #0e4d8a ;

}
.bg-violet{
    background: #3d3074;
    color: #fff;
}
.btn-blue{
    background: #0e4d8a;
    color: #fff;
}
.bor-rad-10{
  border-radius: 10px;
}





.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader:before {
  content: "";
    width: 50px;
    height: 50px;
    border-radius: 53%;
    border: 6px solid #f3f3f3;
    border-top: 6px solid #fe7800;
    animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
