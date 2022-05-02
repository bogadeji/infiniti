<template>
    <component :is="layout" class="app-layout">
        <slot />
    </component>
</template>

<script>
const defaultLayout = 'AuthLayout'
export default {
    name: "AppLayout",
    computed: {
        layout() {
            const layout = this.$route.meta.layout || defaultLayout
            console.log(layout)
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