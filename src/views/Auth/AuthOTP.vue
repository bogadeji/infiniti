<template>
    <div class="auth-div">
            <h1 class="font-weight-bold text-left">{{ title }}</h1>
            <p class="my-0 text-left">Enter OTP that was sent to your email to login</p>
            <form class="auth-form">
                <BaseInput
                    type="number"
                    label="OTP"
                />
                <BaseBtn width="100%" x-large light >Login</BaseBtn>
            </form>
    </div>
</template>
<script>
import BaseBtn from '@/components/base/BaseBtn';
import BaseInput from '@/components/base/BaseInput';
export default {
    name: "AuthOTP",
    props: {
        title: {
            type: String,
            default: 'Enter OTP'
        }
    },
    components: {
        BaseBtn,
        BaseInput
    }
}
</script>
<style>
    .auth-div p {
        font-size: 14px;
    }
</style>