<template>
    <div>
            <h1 class="font-weight-bold text-left">Sign in to your account</h1>
            <form class="auth-form">
                <BaseInput
                    type="text"
                    label="Email"
                />
                <BaseInput
                    type="password"
                    label="Password"
                />
                <BaseBtn width="100%" x-large light to="/dashboard" >Sign in</BaseBtn>
            

            <p><router-link to="/reset-password">Forgot password</router-link></p>
            <!-- <p>Don't have an account? <router-link to="/register">Sign up</router-link></p> -->
            </form>
    </div>
</template>
<script>
import BaseBtn from '@/components/base/BaseBtn';
import BaseInput from '@/components/base/BaseInput';
export default {
    name: "AuthLogin",
    components: {
        BaseBtn,
        BaseInput
    }
}
</script>
<style>
</style>