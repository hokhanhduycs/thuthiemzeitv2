<template>
    <div class="minimap">
        <div class="control-bnt">
            <Btn type="icon" ><font-awesome-icon icon="bars" /></Btn>
            <Btn type="icon" ><font-awesome-icon icon="bars" /></Btn> 
            <Btn type="icon" ><font-awesome-icon icon="bars" /></Btn> 
            <Btn type="icon" ><font-awesome-icon icon="bars" /></Btn> 
            <Btn type="icon" ><font-awesome-icon icon="bars" /></Btn> 
        </div>
        <div class="select-minimap">
           <Btn type="text-btn">Over view</Btn>
           <div class="item-select-minimap">
            <Btn type="text-btn">Floor 5</Btn>
            <Btn type="text-btn">Floor 5</Btn>
           </div>
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