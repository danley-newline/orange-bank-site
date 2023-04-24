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
                v-model="credit.numeroClient"
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
                v-model.number="credit.montant"
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

      <div v-if="showLoader" class="loader">Chargement...</div>
        

    </div>
  </div>
</template>

<script>
import moment from 'moment';
import axios from "../services/index.js";

export default {
  props:{
    packChoose:{
      type: Object,
    }
  },
  data(){
    return{

      packData:{
        phoneNumber:'',
        creditMount:0,
      },

      credit:{
        pack:'',
        numeroClient: '',
        montant: '',
      },

      showLoader: false

      

    }
  },

  mounted(){
  },
  methods:{

    checkCreditValue(){
      if (this.credit.montant < 0) {
        this.credit.montant = 0;
      }
    },

    subscribeToPack(){
      this.credit.pack = this.packChoose;
      delete this.credit.pack.imgPrim;

      this.showLoader = true;

      const today = new Date();
      const limitDate = moment(today).add(this.credit.pack.durationInDays, 'days').format('YYYY-MM-DD');
      const toRepay = this.credit.montant + (this.credit.pack.interestRate * this.credit.montant) / 100 + this.credit.pack.creditFeesAmount;

      let subscribeCredit = {
        numeroClient: this.credit.numeroClient,
        montant: this.credit.montant,
        limitDate: limitDate,
        amountToRepay: toRepay,
        productId: this.credit.pack._id
      }

      axios
          .post("/credit", subscribeCredit)
          .then((res) => {
            if (res.data.isGranted == true) {
             this.$fire({
                      text: `Cher client, votre crédit est accordé. \n 
                        Vous devez le rembourser au plus tard le ${ moment(res.data.limitDate).format('DD-MM-YYYY')} . \n
                        Le montant à rembourser est de ${Number(res.data.amountToRepay).toLocaleString()} FCFA.`,
                      type: "success",
                      confirmButtonText:'ok',
                    });

                  setTimeout(() => {
                    location.reload();
                  }, 8000);
            }
            else
            {
              this.$fire({
                      text: `Cher client vous ne pouvez pas prendre ce crédit de ${Number(res.data.montant).toLocaleString()} FCFA , \n
                            parce que le montant maximal offert par le pack ${res.data.product.code} est de ${Number(res.data.product.maxAmount).toLocaleString()} FCFA`,
                      type: "warning",
                      confirmButtonText:'ok',
                    });

                    setTimeout(() => {
                    location.reload();
                  }, 8000);
            }

             

          })
          .catch((error) => {
            this.$fire({
                      text: `${error}`,
                      type: "error",
                      confirmButtonText:'ok',
                      timer: 5000,
                    });
          }); 

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