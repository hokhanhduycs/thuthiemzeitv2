<template >
    <div class="menu">
        <div class="menu-toggle">
            <Btn @click.native="isMenu =! isMenu" :class="{active: isMenu}" type="icon" ><font-awesome-icon icon="bars" /></Btn> 
        </div>
        <div v-show="isMenu" class="menu-item">
            <nav>
                <router-link to="/">
                    <Btn type="menu-btn">360</Btn>
                </router-link>
    
                <!-- <router-link to="/floorplan"> -->
                    <Btn :disabled="true" type="menu-btn">{{lang == "vn" ? "Mặt bằng": "Floorplans"}}</Btn>
                <!-- </router-link> -->
    
                <router-link to="/location">
                    <Btn type="menu-btn">{{lang == "vn" ? "Vị Trí": "Location Map"}}</Btn>
                </router-link>
                <Btn @click.native="handleBtnFac()" :class="{active: isFac}" type="menu-btn">{{lang == "vn" ? "Tiện ích": "Faccitilies"}}</Btn>
                
                <Btn  @click.native="handleLang()">{{lang}}</Btn> 
            </nav>
        </div >
        <div v-show="isFac"><div  @click="handleFac()" class="fac"></div>
        <Facilities/>
        </div>
    </div>
</template>
<script>

import Btn from '@/components/Button.vue'
import Facilities from "@/components/Facilities.vue"
import { mapGetters, mapMutations } from 'vuex'
export default {
    components: {
        Btn,
        Facilities
    },
    data() {
       return{
        isMenu: true,
       }
    },
    computed: {
        ...mapGetters(["isFac", "lang"]),
    },
    methods:{
        ...mapMutations(["setIsFac", "setLang"]),
        handleBtnFac(){
            this.setIsFac(true)
            this.$router.push('/')
        },
        handleFac(){
            this.setIsFac(false)
        },
        handleLang(){
            this.lang == "vn" ? this.setLang('en'): this.setLang("vn")
        }
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
    .fac{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #86d3f175;
    }
</style>