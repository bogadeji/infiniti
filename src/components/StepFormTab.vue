<template>
    <div v-show="isActive"><slot></slot></div>
</template>


<script>
export default{
    name: 'StepFormTab',
    props: {
        title: {
            typeof: String,
            required: true
        },
        info:{
            typeof: String,
            required: false
        },
        selected: {
            typeof: Boolean,
            default: false
        }
    },
    data(){
        return{
            isActive: false,
            
        }
    },
    created(){
        this.isActive = this.selected
    },
}
</script>


<style>
</style>