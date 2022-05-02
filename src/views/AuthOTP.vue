<template>
    <div class="auth-otp">
            <h1 class="font-weight-bold text-left">{{ title }}</h1>
            <p class="my-0 text-left">Enter OTP that was sent to your email to login</p>
            <form class="auth-form">
                <AppInput
                    type="number"
                    label="OTP"
                />
                <AppBtn width="100%" x-large light >Login</AppBtn>
            </form>
    </div>
</template>
<script>
import AppBtn from '@/components/app/AppBtn';
import AppInput from '@/components/app/AppInput';
export default {
    name: "AuthOTP",
    props: {
        title: {
            type: String,
            default: 'Enter OTP'
        }
    },
    components: {
        AppBtn,
        AppInput
    }
}
</script>
<style>
    .auth-otp p {
        font-size: 14px;
    }
</style>