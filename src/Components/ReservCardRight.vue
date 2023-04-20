<template>
  <div>
    <div class="card-blue-bord h-100 bor-rad-10 p-4">
      <div class="bord-btm-ccc pb-4 mb-4">
        <p class="mb-0 custom-size-title">
          <span class="gray-light">Souscrit a l'offre</span>
        </p>
      </div>


      <button class="btn btn-dark-or w-100 mt-4 py-3" @click="sendReservation">RESERVER</button>
        

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:{
    chambreChoose:{
      type: Object,
    }
  },
  data(){
    return{

      reserveChambre:{
            name:'',
            price:0,
            date_arrive:'',
            date_depart:'',
            adultes:2,
            enfants:null,
            reduction:0.0,
            total_price:0,
            moyen_paiement:'cash',
            nombre_of_night:1,
            lieu:''
        },

    }
  },

  mounted(){
    console.log("mounted chambre", this.chambreChoose);
    // this.reserveChambre.total_price = this.chambreChoose.price;
    // this.pricePerNight = this.chambreChoose.price;
  },
  methods:{

    sendReservation(){
      
      return console.log("le click a été lancé", this.reserveChambre);
      axios.post("http://127.0.0.1:8000/api/post",this.reserveChambre)
              .then(response => {
                
                this.SuccesRe = true;
                setTimeout(()=>{
                this.SuccesRe = false;
              },2000);

              setTimeout(()=>{
                this.$router.push('/');
                window.location.reload();
              },2000);
                
              }).catch(err => {
              // console.log("Erreur coté serveur");

              this.ErreurServeur = true;
                setTimeout(()=>{
                this.ErreurServeur = false;
              },4000);

              // console.log(err);
          });
      
      // console.log("total info ", this.reserveChambre);
    }
  },

   watch: {
  }

};
</script>

<style lang="scss">
.invite-input{
  width: 75%;
  input{
    border: none;
    border-bottom: 2px solid #ccc;
  }
} 
.card-payement{
  input:hover{
    cursor: pointer;

  }
}
</style>