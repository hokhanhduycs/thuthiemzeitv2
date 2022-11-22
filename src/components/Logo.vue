<template>
    <div class="logo" @click="handleLogo()">
        <router-link to="/">
            <img src="@/assets/logo.png" alt="logo">
        </router-link>
    </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
    methods:{
        ...mapMutations(["setPano"]),
        handleLogo(){
            console.log("logo");
            this.setPano('overview')
        }
    }
}
</script>
<style lang="scss" scoped>
    .logo{
        position: fixed;
        top: calc( var(--default-boder-bg)*3);
        left: calc( var(--default-boder-bg)*3);
        img{

            max-width: 300px;
        }
    }
</style>