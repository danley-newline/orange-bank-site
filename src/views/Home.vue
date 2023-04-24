<template>
  <div>
      <div class="header-block-image home-page text-white">
        <div class="container">
            <div class="bienvenue-block w-75">
                <h1 class="font-weight-bold text-shad-2 fs-75">Bienvenue chez vous !</h1>
                <p class="font-weight-bold text-shad-2">DÉMARRER PAS À PAS</p>
                    <div class="card-news-info bord-rad-10 p-3 w-100">
                        <div>
                            <img class="w-100" src="../assets/images/pret-tik.png" alt="" />
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
    <div class="mt-5 pt-5"> </div>
    <div class="container my-5 pt-5">
        
            <div class="row ">
                <div class="col-md-7 col-sm-12">
                    <h1 class="fs-50  fw-bold mt-4 mb-5">Orange Bank </h1>
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aspernatur quaerat commodi nulla sint excepturi dolorem aut reiciendis, quisquam, quia, repudiandae deleniti eligendi modi amet illo temporibus delectus quasi distinctio impedit aperiam eum. Explicabo optio eveniet odit, id maiores, laudantium, facilis qui iste dolorem inventore fugiat odio delectus. Reprehenderit quo numquam commodi animi beatae quidem, similique, quaerat minus tempora dignissimos reiciendis aut doloribus ut quod. Tenetur dignissimos nemo aspernatur est nam ex itaque harum voluptatem ullam eligendi alias vitae quibusdam accusamus eius temporibus rem, maxime molestiae architecto, eum ipsam? Maiores eveniet iure quis culpa itaque doloremque quod officiis delectus autem.</p>
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aspernatur quaerat commodi nulla sint excepturi dolorem aut reiciendis, quisquam, quia, repudiandae deleniti eligendi modi amet illo temporibus delectus quasi distinctio impedit aperiam eum. Explicabo optiimi beatae quidem, similique, quaerat minus tempora dignissimos reiciendis aut doloribus ut quod. Tenetur dignissimos nemo aspernatur est nam ex itaque harum voluptatem ullam eligendi alias vitae quibusdam accusamus eius tempo.</p>

                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4 right-propos-bg">
                    <!-- I PUT A BACKGROUND IMG HERE IN CSS -->
                </div>
            </div>


            <div class="block-suites my-5 py-5">
                <div class="d-flex justify-content-between align-items-center my-4" >
                    <div>
                    <h1 class="fs-20 mb-0">Nos Packs</h1>

                    </div>
                    <div>
                        <p class="mb-0"> <strong class="mx-2">TOUT AFFICHER </strong> <img width="10" src="../assets/images/menu.png" alt="" /> </p>
                    </div>
                </div>
                <div class="py-5">
                     <carousel
                :perPageCustom="[
                    [200, 1],
                    [768, 2],
                    [1100, 3],
                ]"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >
                <slide v-for="(items, i) in retpackList" :key="i" >
                    

                    <div class="image-container parent-packs-blocks" >
                        <div v-if="packStockImg[i] != undefined">
                        <img  :src="require(`../assets/images/${packStockImg[i].imgPrim}`)" class="head-img" alt="" /> 
                        </div>
                        <div v-else>
                        <img  :src="require(`../assets/images/${packStockImg[0].imgPrim}`)" class="head-img" alt="" /> 
                        </div>
                        <img width="70" src="../assets/images/heart.png"  class="icon-absolute" alt="" />
                        <div class="overlay">
                            <div class="block-text">

                            <p class="fw-bold">{{items.code}}</p>
                            <button class="pack-btn" @click="seeDetail(items, i)">Acceder au pack</button>
                            </div>

                            
                        </div>
                        <div class="packs-blocks p-4">
                                <div class="d-flex justify-content-between">
                                    <p>
                                    <img width="10" src="../assets/images/menu.png" alt="" />
                                    <span class="mx-3 gray-light">{{items.code}}</span>
                                    </p>
                                    <p>
                                        <small class="color-bl-dark ">Orange Bank</small>
                                    </p>

                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>
                                    <img width="10" src="../assets/images/menu.png" alt="" />
                                    <span class="mx-3 gray-light">Demander Jusqu'à </span>
                                    </p>
                                    <p>
                                        <small class="color-bl-dark ">{{ Number(items.maxAmount).toLocaleString() }} Fcfa</small>
                                    </p>

                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>
                                    <img width="10" src="../assets/images/menu.png" alt="" />
                                    <span class="mx-3 gray-light">Sur une periode de </span>
                                    </p>
                                    <p>
                                        <small class="color-bl-dark ">{{ items.durationInDays }} Jours</small>
                                    </p>

                                </div>
                                

                            </div>
                    </div>
                </slide>
                
            
                     </carousel>
                    
                </div>
            </div>
        
    </div>


  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            packStockImg:[
                {
                    imgPrim:'christina-wocintechchat.jpg',
                },
                {
                    imgPrim:'le-buzz-studio.jpg',
                },
                {
                    imgPrim:'wilson-ye.jpg',
                },
                {
                    imgPrim:'seth-doyle.jpg',
                },
                {
                    imgPrim:'richmond-osei.jpg',
                },
            ],
        }
    },
    components:{
        Carousel, 
        Slide
    },


  computed:{
   ...mapGetters([
      'retpackList',
    ]),
  },
    methods:{
        seeDetail(e, i){

            let data = e;
            let imgPrim = this.packStockImg[i] == undefined ? this.packStockImg[0] : this.packStockImg[i];
            Object.assign(data, imgPrim);

            this.$store.commit("MutClickedPack",data);
            this.$router.push('/details-pack')
            
            
        }
    },
    mounted(){
        this.$store.dispatch("getPacksList");
    }
}
</script>

<style lang="scss">

.packs-blocks{
    .color-bl-dark, .gray-light{
        font-weight: bold;
    }
}
.my-special-a,.my-special-a:hover  {
    color: #000;
    text-decoration: none;
}
.block-suites{
button.VueCarousel-navigation-button {
    width: 50px;
    height: 50px;
    margin: 0 -1rem;
    box-shadow: 0px 1px 7px #0000003b;

}
}


.parent-packs-blocks {
    border-radius: 10px;
    box-shadow: 0px 1px 11px #ccccccba;
    margin:2rem;
    position: relative;

    .head-img{
        border-radius: 10px 10px 0 0;
        height: 314px;
        width: 100%;

    }
    &:hover{
        cursor: pointer;
    }

    .icon-absolute {
    position: absolute;
    top: 4%;
    left: 4%;
    
}
   
}
.header-block-image {
  height: 600px !important;
  background: url(../assets/images/daniela-cuevas.jpg);
  background-size: 100% 142%;
  background-repeat: no-repeat;
  position: relative;
}
.right-propos-bg{
    background: url(../assets/images/mobile_phone.png);
    background-size: contain;
    background-repeat: no-repeat;
}
.text-shad-2{
        text-shadow: 2px 3px 5px #000;
}
.fs-75 {
    font-size: 75px;
}
.gray-light {
    color: #cacaca;
}
.font-weight-normal{
    font-weight: normal;
}

.fs-50{
    font-weight: normal;
    font-size: 50px;
}
.card-news-info {
    background: #fff;
    box-shadow: 0px 2px 8px #7c7a7a6b;
}
.bienvenue-block {
    position: absolute;
    bottom: -105px;
    left: 20%;
    transform: translate(-10%, 10px);
}
.bord-rad-10{
    border-radius: 10px;
}
.bord-rad-5{
    border-radius: 5px;
}
.date-block {
    background: #f7f7f7;
    color: #000;
    span.number{
        font-size: 50px !important;
    }
}


@media screen and (min-width:1339px) {
   .content-bienvenue button{
        height: 50px;
            font-size: 14px;
    } 
}
@media screen and (max-width:1338px) {
  .content-bienvenue button{
        font-size: 14px;
    }  
    .home-page {
        .card-news-info{
                padding: 1rem !important;

        }
    } 
}

@media screen and (max-width:1132px) {
    .special-sm-invite{
        display: block !important;
        padding: 10px 25px !important;
        p{
            margin: 0 !important;
        }
    }

    
}

@media screen and (min-width:1132px) {
    .block-suites{
        .VueCarousel-navigation {
            position: absolute !important;
            top: -16% !important;
            right: 28% !important;
        }
    }
}



.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: #ff6701e3;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

.image-container:hover .overlay {
  opacity: 1;
}

.overlay h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.overlay p {
  font-size: 1.2rem;
  text-align: center;
}

.block-text{
    text-align: center;
    width: 100%;
   
    
}

 .pack-btn{
        background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 7px 20px;
    width: 80%;

    &:hover{
        background: #fff;
        color: #000;
    }
    }
</style>