<template>
    <div class="factilities">
        <div class="fac-content">
            <div class="fac-title">Facilities</div>
            <div  class="fac-item">
                <Card v-for="(item) in facs" :pano="item.pano" :key="item.id" :img="item.img">{{item.title["en"]}}</Card>
      
            </div>
        </div>
        
    </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    components:{
        Card
    },
    data (){
        return{
            facs:[
                {
                    pano: "h1",
                    img: "imgs/fac/mau.jpg",
                title: {
                        vn: "View 1",
                        en: "View 1"
                    }

                },
                {
                    pano: "h2",
                    img: "imgs/fac/mau.jpg",
                title: {
                        vn: "View 2",
                        en: "View 2"
                    }

                },
                {
                    pano: "h3",
                    img: "imgs/fac/mau.jpg",
                title: {
                        vn: "View 3",
                        en: "View 3"
                    }

                }
            ]
        }
    }
    
}
</script>
<style lang="scss" scoped>

.factilities{


    .fac-content{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -40%);
        background-color: var(--primary-bg);
        border: var(--default-boder-bg) transparent solid;
        width: calc(var(--width-card) * 5 + var(--default-boder-bg) * 6);
       

        .fac-title{
            height: 44px;
            width: 100%;
            background-color: var(--primary);
            color: var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
        }
        .fac-item{
            height: calc(var(--height-card) * 2 + var(--default-boder-bg) * 2);
            overflow-y: overlay;
            //  padding-right: 8px;
            padding-top: -16px;
            display: flex;
            justify-content: flex-end;
            align-items: stretch;
            background-color: #ebebeb79;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            padding-left: var(--default-boder-bg);
            // margin-right:  calc(var(--default-boder-bg) );
            // margin-left: calc(var(--default-boder-bg) *2);
        }
    }
}
    
</style>