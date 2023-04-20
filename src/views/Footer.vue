<template>
  <div>
      <div class="container-fluid footer-bg">
          <div class="p-5">
              <div class="d-flex justify-content-between align-items-center">
                  <div>
                      <img src="../assets/images/obk_logo.png" height="50" alt="">
                  </div>

                  <div class="contact-number"> 
                    <p class="light">Contactez Nous : </p>
                    <p class="orange-p">07 07</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer-bg{
    background: #000;
    z-index: 15;
    position: relative;
}

.contact-number {
    display: flex;
    gap: 10px;

    p{
        font-weight: bold;
        margin: 0;
       &.light{
        color: #fff;
       }
       &.orange-p{
        color: #ff7901;
       }
    }
}

    
</style>