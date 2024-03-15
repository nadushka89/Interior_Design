<template>
    <div class="top">
      <div class="header center">
        <div class="header_left">
          <img src="../assets/logo.png" alt="logo" class="header_logo" />
        </div>
        <div class="header_right">
          <div class="header_menu">
            <router-link class="header_menu_nav" to="/">Home</router-link>
            <router-link class="header_menu_nav" to="/project">Project</router-link>
            <router-link class="header_menu_nav" to="/blog">Blog</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            
        };
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.top {
  margin-top: 53px;
  margin-bottom: 44px;
  &_details {
    margin-top: 44px;
    margin-bottom: 45px;
  }
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  &_logo {
    max-width: 177px;
    height: 50px;
  }
  &_menu {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    gap: 50px;
    max-width: 243px;
    height: 25px;
    align-items: center;
  &_nav{
    text-decoration: none;
    color: rgb(77, 80, 83);
  }
  }
}

</style>