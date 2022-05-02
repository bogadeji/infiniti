<template>
    <div>
        <span></span>
        <div>
            <ul>
                <li>
                </li>
            </ul>
            <ul>
                <li>Delete {{ resource.name }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ViewTableDetails',
    data() {
        return {
            resource: {
                name: 'user'
            }
        }
    }
}
</script>
<style lang="scss">

</style>