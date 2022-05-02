<template>
    <div id="loggedin-layout">
        <AppBar />
        <AppDrawer />
        <div class="page-display">
            <slot />
        </div>
    </div>
</template>

<script>
import AppBar from '@/components/AppBar'
import AppDrawer from '@/components/AppDrawer'

export default {
    name: "LoggedInLayout",
    components: {
        AppBar,
        AppDrawer
    },
    computed: {
    }
}
</script>

<style>
    #loggedin-layout {
        min-height: 100vh;
        background: #fff
    }

</style>