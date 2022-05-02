<template>
    <v-btn
        v-bind="$attrs"
        v-on="$listeners"
        class="btn"
        :color="color"
    >
    <slot />
  </v-btn>
</template>
<script>
export default {
    name: 'AppBtn',
    props: {
        color: {
            type: String,
            default: 'primary'
        }
    }
}
</script>
<style>
    .v-btn.btn {
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 18px;
    }

    .v-btn {
        text-transform: none !important;
        border-radius: 35px;
        margin: 2px 0;
    }
    
</style>