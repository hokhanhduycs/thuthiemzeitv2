<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
    <Menu></Menu>
    <Logo/>

  </div>
</template>
<script>
import Menu from "@/components/Menu.vue"
import Logo from "@/components/Logo.vue"
export default {
    components: {
      Menu,
     Logo
    }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
   font-family: SVNGotham;
  //  src: url('@/assets/fonts/SVN-Gotham Black.otf');
   src: url('@/assets/fonts/SVN-Gotham Regular.otf');
   font-weight: 700;
}

:root{
  --primary: #0082a1;
   --primary-bg: #0082a15e;
   --black: #000;
   --white: #fff;
   --text-color: #161823;
   --primary-hover: #fff;
   --white-hover: #0082a1;

   --font-family: 'SVNGotham', sans-serif;
   // Default layout
   --default-layout-header-height: 60px;
   --default-layout-width: 1150px;
   --default-layout-horizontal-spacer: 24px;
   --default-boder-bg: 8px;

   --width-card: 170px;
   --height-card: 240px;
}

//Scrollbar CSS
html *::-webkit-scrollbar {
   border-radius: 0;
   width: 8px;
}

html *::-webkit-scrollbar-thumb {
   border-radius: 4px;
   background-color: rgba(22, 24, 35, 0.06);
}

html *::-webkit-scrollbar-track {
   border-radius: 0;
   background-color: rgba(0, 0, 0, 0);
}


.router-link-exact-active .button {
    background-color: var(--primary-hover);
      color: var(--primary)
    }

</style>
