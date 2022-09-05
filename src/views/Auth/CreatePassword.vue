<template>
    <div>
            <h1 class="font-weight-bold text-left">Create new password</h1>
            <form class="auth-form">
                <BaseInput
                    type="password"
                    label="Password"
                />
                <BaseBtn width="100%" x-large light to="/dashboard" >Create new password</BaseBtn>
            </form>
    </div>
</template>
<script>
import BaseBtn from '@/components/base/BaseBtn';
import BaseInput from '@/components/base/BaseInput';
export default {
    name: "CreatePassword",
    components: {
        BaseBtn,
        BaseInput
    },
    methods: {
        changePassword(values) {
            values.password = btoa(values.password)
            this.$store.dispatch('changePassword', values)
        }
    }
}
</script>
<style>
</style>