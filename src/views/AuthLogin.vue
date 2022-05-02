<template>
    <div>
            <h1 class="font-weight-bold text-left">Sign in to your account</h1>
            <form class="auth-form">
                <AppInput
                    type="text"
                    label="Email"
                />
                <AppInput
                    type="password"
                    label="Password"
                />
                <AppBtn width="100%" x-large light >Sign in</AppBtn>
            

            <p><a>Forgot password</a></p>
            <p>Don't have an account? <router-link to="/register">Sign up</router-link></p>
            </form>
    </div>
</template>
<script>
import AppBtn from '@/components/app/AppBtn';
import AppInput from '@/components/app/AppInput';
export default {
    name: "AuthLogin",
    components: {
        AppBtn,
        AppInput
    }
}
</script>
<style>
</style>