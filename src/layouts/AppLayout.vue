<template>
    <component :is="layout" class="app-layout">
        <slot />
    </component>
</template>

<script>
const defaultLayout = 'LoggedInLayout'
export default {
    name: "AppLayout",
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout
            
            return () => import(`@/layouts/${layout}.vue`);
        }
    }
}
</script>

<style>
    .app-layout {
        min-height: 100vh;
        background: #F2FBFE;
    }
</style>