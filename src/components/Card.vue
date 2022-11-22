<template>
        <div @click="handleCard(pano)" class="card">
            <div class="card-img">
                <img :src='img' alt="mau">
                <!-- <img src="" alt="mau"> -->
            </div>
            <div class="card-title">
                <slot></slot>
            </div>
        </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {

    props:{
        img: String,
        pano: String
    },
    computed: {
        // ...mapGetters([]),
    },
    methods:{
        ...mapMutations(["setPano", "setIsFac"]),
        handleCard(pano){
            // console.log(img);
            this.setPano(pano)
            this.setIsFac(false)
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .card {
        background-color: var(--primary);
        color: var(--white);
        width: var(--width-card);
        height: var(--height-card);
        display: inline-block;
        margin-right: 8px;
        margin-top: 8px;
        position: relative;
        cursor: pointer;

        &:hover {
            background-color: var(--primary-hover);
            color: var(--white-hover);
        }
        .card-img {
            width: 100%;
            height: 70%;
            //   position: absolute;
            //   top: var(--default-boder-bg);
            //   left: 50%;
            //   transform: translateX(-50%);
            //   transform: translate(-50%, -50%);
            //   background-color: red;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                margin: 8px;
                width: calc( 100% - var(--default-boder-bg) * 2);
                height: calc( 100% - var(--default-boder-bg) * 2);
                object-fit: cover;
            }
        }
        .card-title {
            //   background-color: red;
            margin-top: var(--default-boder-bg);
            display: flex;
            align-items: center;
            justify-content: center;
        }
}

</style>