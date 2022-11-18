<template>
        <button class="button" :class="type">
            {{ true && <div>
                sdaf
                </div>}}
            <slot></slot>
        </button>
</template>
<script>
export default {
    props: {
        type: String,

    }
}
</script>
<style lang="scss" scoped>
    .button{
        height: 44px;
        width: 44px;
        padding: auto;
        background-color: var(--primary);
        color: var(--white);
        font-family: var(--font-family);
        border: none;
        font-size: 16px;
        cursor: pointer;
        line-height: 100%;
    }
    .button.menu-btn{
        min-width: 130px;
    }
</style>