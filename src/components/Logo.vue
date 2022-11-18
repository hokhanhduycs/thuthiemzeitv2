<template>
    <div class="logo">
        <router-link to="/">
            <img src="@/assets/logo.png" alt="logo">
        </router-link>
    </div>
</template>
<script>
export default {
    
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