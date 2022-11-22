<template>
        <button  :disabled="disabled" class="button" :class="type">
            <slot></slot>
        </button>
</template>
<script>
export default {
    props: {
        type: String,
        disabled: Boolean
    },
    methods:{
      test(){
        console.log("call fn test in button");
      }
    }
}
</script>
<style lang="scss" scoped>
    .button{
        height: 44px;
        width: 44px;
        background-color: var(--primary);
        color: var(--white);
        font-family: var(--font-family);
        border: none;
        font-size: 15px;
        cursor: pointer;
        line-height: 100%;
        transition: .2s;
        text-transform: uppercase;
        &:hover{
            background-color: var(--primary-hover);
            color: var(--white-hover)
        }
        &[disabled]{
            pointer-events: none;
            cursor: context-menu;
            opacity: .7;
        }
    }
    .button.menu-btn{
        min-width: 150px;
    }
    .button.icon{
        font-size: 26px;
    }
    .button.text-btn{
        min-width: 300px;
    }
    .button.active{
        background-color: var(--primary-hover);
        color: var(--white-hover);
        // &:hover{
        //     background-color: var(--primary);
        //     color: var(--white)
        // }
    }
</style>