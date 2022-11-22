<template>
    <div class="minimap">
        <div class="control-bnt">
            <Btn @click.native="handleFullScreen()" type="icon" ><font-awesome-icon icon="expand" /></Btn> 
            <Btn  @click.native="handlezoomOut()" type="icon" ><font-awesome-icon icon="magnifying-glass-plus" /></Btn> 
            <Btn  @click.native="handlezoomIn()" type="icon" ><font-awesome-icon icon="magnifying-glass-minus" /></Btn>
            <Btn @click.native="handleRotation()" :class="{active: rotation}" type="icon" ><font-awesome-icon icon="arrows-spin" /></Btn> 
            <Btn @click.native="handleIsMap()" :class="{active: isMap}" type="icon" ><font-awesome-icon icon="street-view" /></Btn> 
        </div>
        <div v-show="isMap" class="select-minimap">
            <div class="item-select-minimap">
                <Btn @click.native="handleMinimap(0)" type="text-btn">{{ selectMinimap[0][lang] }}</Btn>
                <Btn @click.native="handleMinimap(1)" type="text-btn">{{  selectMinimap[1][lang]}}</Btn>
            </div>
            <Btn type="text-btn">{{ selectMinimap[optionMinimap][lang] }}</Btn>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex"
import Btn from '@/components/Button.vue'
import { log } from 'three'
export default {
    components: {
        Btn
    },
    data(){
        return{
            fullScreen: false,
            optionMinimap: 0,
            selectMinimap: [
                {
                    vn: "Toàn Cảnh",
                    en: "Overview"
                },
                {
                    vn: "Tầng 5",
                    en: "Floor 5"
                }
            ]
        }
    },
    computed: {
        ...mapGetters(["lang", "zoom", "rotation", "isMap"]),
    },
    methods:{
        ...mapMutations(["setMinimap", "setRotation", "setZoom", "setRotation", "setIsMap"]),
        handleMinimap(map){
            // console.log(map);
            this.optionMinimap = map
            this.setMinimap(map)
        },
        handlezoomIn(){
            this.zoom < 0 ? this.setZoom(0) : ""
            this.setZoom(this.zoom + 1)
        },
        handlezoomOut(){
            this.zoom > 0 ? this.setZoom(0) : ""
            this.setZoom(this.zoom - 1)
        },
        handleRotation(){
            this.setRotation(this.rotation = !this.rotation)
        },
        handleIsMap(){
            this.setIsMap(!this.isMap)
            // console.log(this.isMap);
        },
        handleFullScreen(){
            // if(!this.fullScreen){
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen()
                } else if (document.documentElement.webkitRequestFullscreen) {
                    /* Safari */
                    document.documentElement.webkitRequestFullscreen()
                } else if (document.documentElement.msRequestFullscreen) {
                    /* IE11 */
                    document.documentElement.msRequestFullscreen()
                }
                this.fullScreen = ! this.fullScreen
            // }else{
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.webkitExitFullscreen) {
                    /* Safari */
                    document.webkitExitFullscreen()
                } else if (document.msExitFullscreen) {
                    /* IE11 */
                    document.msExitFullscreen()
                }
                this.fullScreen = ! this.fullScreen
            // }
        }
    }
}
</script>
<style lang="scss">
    .control-bnt{
        position: fixed;
        bottom: var(--default-boder-bg);
        right: var(--default-boder-bg);
        border: var(--default-boder-bg) transparent solid;
        background-color: var(--primary-bg);
        .button{

            display: block;

            & ~ .button{
                margin-top: var(--default-boder-bg);
            }
        }
    }

    .select-minimap{
        position: fixed;
        bottom: var(--default-boder-bg);
        right: calc( var(--default-boder-bg)* 4 + 44px);
        border: var(--default-boder-bg) transparent solid;
        background-color: var(--primary-bg);

        .item-select-minimap{
            flex-direction: column;
            bottom: calc( var(--default-boder-bg) + 44px);
            display: none;
            
        }
        &:hover .item-select-minimap{
            display: flex;
            // position: relative;
        }
    }
</style>