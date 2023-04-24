<template>
  <div>
    <div class="card-blue-bord h-100 bor-rad-10 p-4">
      <div class="bord-btm-ccc pb-4 mb-4">
        <p class="mb-0 custom-size-title text-center">
          <span class="gray-light">Souscrit à l'offre</span>
        </p>
      </div>

      <form @submit.prevent="subscribeToPack">
        <label for="">Numéro téléphone</label>
        <div class="input-group mb-2">
        <input
                v-model="packData.phoneNumber"
                type="tel"
                class="form-control"
                placeholder="Tel: 0700000700"
                maxlength="10"
                minlength="10"
                required
                
              />
        </div>
        <label for="">Prêt souhaité</label>
        <div class="input-group mb-0">
        <input
                v-model.number="packData.creditMount"
                @input="checkCreditValue"
                type="number"
                class="form-control"
                placeholder="Montant"
                maxlength="10"
                minlength="10"
                required
                
              />
        </div>


      <button class="btn btn-dark-or w-100 mt-4 py-3" type="submit">Soumettre</button>

      </form>

      <div v-if="showLoader" class="loader">Loading...</div>
        

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  props:{
    chambreChoose:{
      type: Object,
    }
  },
  data(){
    return{

      packData:{
        phoneNumber:'',
        creditMount:0,
      },
      showLoader: false

      

    }
  },

  mounted(){
    console.log("mounted chambre", this.chambreChoose);
    // this.reserveChambre.total_price = this.chambreChoose.price;
    // this.pricePerNight = this.chambreChoose.price;
  },
  methods:{

    checkCreditValue(){
      if (this.packData.creditMount < 0) {
        this.packData.creditMount = 0;
      }
    },

    subscribeToPack(){


      console.log("LES INFOS DU FORM ", this.packData);
      const today = new Date();
      const limitDate = moment(today).add(30, 'days').format('YYYY-MM-DD');

      const toRepay = this.packData.creditMount + (1.8 * this.packData.creditMount) / 100 + 500;


      let data = {
        phoneNumber: this.packData.phoneNumber,
        creditMount: this.packData.creditMount,
        durationInDays: limitDate,
        amountToRepay: toRepay,
        created: moment(today).format("YYYY-MM-DD")

      }


      this.showLoader = true;

      
      return console.log("le click a été lancé", data);
      axios.post("http://127.0.0.1:8000/api/post", data)
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
.card-blue-bord{
  label{
    font-weight: bold;
    color: orange;
    font-size: 14px;
    font-style: italic;
    margin-bottom: 5px;
  }
}
</style>