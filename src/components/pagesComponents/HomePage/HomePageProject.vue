<template>
  <section class="project center">
    <h2 class="project__title">Follow Our Projects</h2>
    <p class="project__text">It is a long established fact that a reader will be distracted by the of readable content
      of page lookings at its layouts points.</p>
    <div class="project__item-wrap">
      <div class="project__item" v-for="project in projectList" :key="project.id">
        <img :src="require('@/assets/' + project.img)" :alt="project.img" :class="project.class">
        <div class="project__item-content">
          <div class="project__text-wrap">
            <h2 class="project__item-title">{{ project.title }}</h2>
            <p class="project__item-text">{{ project.text }}</p>
          </div>
          <router-link to="/project">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 53 53" fill="none">
              <circle cx="26.5" cy="26.267" r="26" fill="#F4F0EC" />
              <path d="M24.271 32.9525L30.2139 26.2668L24.271 19.5811" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'HomePageProject',

    data() {
        return {
          projectList: [
                {
                    id: 0,
                    img: 'interier_1.jpeg',
                    class:  'project__item-img-1',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                },
                {
                    id: 1,
                    img: 'interier_2.jpeg',
                    class: 'project__item-img-2',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                },
                {
                    id: 2,
                    img: 'interier_3.jpeg',
                    class: 'project__item-img-3',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                },
                {
                    id: 3,
                    img: 'interier_4.jpeg',
                    class: 'project__item-img-4',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                }
       ]
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
 .project {
    margin-top: 96px;
    margin-bottom: 96px;
  
    &__title {
      margin-bottom: 8px;
      color: #292f36;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
    }
  
    &__text {
      padding-left: calc((50% - 737px) / 2);
      padding-right: calc((50% - 737px) / 2);
      color: #4d5053;
      text-align: center;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  
    &__item-wrap {
      margin-top: 93px;
      display: grid;
      column-gap: 100px;
      row-gap: 56px;
      grid-template-columns: repeat(2, 550px);
    }
  
    &__item-img-1 {
      border-top-right-radius: 75px;
    }
  
    &__item-img-2 {
      border-top-left-radius: 75px;
    }
  
    &__item-img-3 {
      border-bottom-right-radius: 75px;
    }
  
    &__item-img-4 {
      border-bottom-left-radius: 75px;
    }
  
    &__item-content {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    &__item-title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
  
    &__item-text {
      color: #4d5053;
      font-family: DM Serif Display;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
</style>