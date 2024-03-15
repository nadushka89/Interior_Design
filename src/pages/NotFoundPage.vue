<template>
  <div>
    <HeaderComponent />
    <div class="notfound center">
        <div class="notfound__content">
            <h1 class="notfound__title">404</h1>
            <p class="notfound__text">We are sorry, but the page you requested was not found</p>
            <router-link class="notfound__button" to="/">
                <div class="notfound__button-text">
                    <p>Back To Home</p>
                    <img src="@/assets/vector_arrow.svg" alt="vector_arrow">                    
                </div>
            </router-link>
        </div>
        <img class='notfound__img' src="../assets/404.jpeg" alt="404">
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue'
export default {
    components: {HeaderComponent, FooterComponent},
    name: 'NotFoundPage',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
.notfound{
    display: flex;
    gap: 81px;
    align-items: center;
    &__img{
      border-end-start-radius: 353px;
    }
    &__button-text {
      width: 253px;
      padding: 26px 0;
      background-color: #292f36;
      border-radius: 18px;
      display: flex;
      gap: 10px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }  
    & p {
        color: #fff;
        font-family: DM Serif Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
    }
    &__title {
      color: #CDA274;
      font-family: DM Serif Display;
      font-size: 250px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
  
    &__text {
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.35px;
      margin-top: 15px;
      margin-bottom: 23px;
    }
}



</style>