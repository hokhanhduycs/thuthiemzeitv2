<template >
    <div class="menu">
        <div class="menu-toggle">
            <Btn >Vn</Btn> 
        </div>
        <div class="menu-item">
            <nav>
                <router-link to="/">
                    <Btn type="menu-btn">360</Btn>
                </router-link>
    
                <router-link to="/floorpaln">
                    <Btn type="menu-btn">Floorplan</Btn>
                </router-link>
    
                <router-link to="/location">
                    <Btn type="menu-btn">Location Map</Btn>
                </router-link>
                
                <Btn type="menu-btn">Factilites</Btn> 
    
                <Btn></Btn> 
    
            </nav>
        </div>
    </div>
</template>
<script>
import Btn from '@/components/Button.vue'
export default {
    components: {
        Btn
    }
}
</script>
<style lang="scss" scoped>
    .menu-toggle{
        position: fixed;
        top:  var(--default-boder-bg);
        right:   var(--default-boder-bg);
        background-color: var(--primary-bg);
        border:  var(--default-boder-bg) transparent solid;
    }
    .menu-item{
        background-color: var(--primary-bg);
        border:  var(--default-boder-bg) transparent solid;
        position: fixed;
        top: calc( var(--default-boder-bg)*3 + 44px );
        right: calc( var(--default-boder-bg)*3 + 44px );
        a ~ a{
            margin-left: var(--default-boder-bg);
        }
        a ~ .button{
            margin-left:  var(--default-boder-bg);
        }

    }
</style>