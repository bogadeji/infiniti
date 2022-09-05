<template>
    <div>
        <!-- <v-card> -->
            <h1 class="font-weight-bold text-left">Create your account</h1>
            <form class="auth-form">
                <div class="flex input-flex">
                    <BaseInput
                        type="text"
                        label="First name"
                    />
                    <BaseInput
                    type="text"
                        label="Last name"
                    />
                </div>
                <BaseInput
                type="text"
                    label="Email address"
                />
                <BaseInput
                type="text"
                    label="Phone number"
                />
                <BaseInput
                    type="password"
                    label="Password"
                    class="password"
                />
                <v-checkbox
                    class="accept"
                    type="checkbox"
                    label="I accept terms and conditions"
                    value="accept"
                />
                    <BaseBtn width="100%" x-large light color="primary">Sign up</BaseBtn>
                

                <p>Have an account? <router-link to="/">Sign in</router-link></p>
            </form>
                <a></a>
        <!-- </v-card> -->
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
<style lang="scss">
    .auth-form {
        .input-flex {
            flex-direction: row;

            @media (max-width: 767px) {
                flex-direction: column;
            }
        }
        .password {
            &.v-text-field.v-text-field--enclosed {
                margin: 0 !important;
            } 
        }
    }

    .accept {
        &.v-input--selection-controls {
            margin-top: 0;
        }
    }
</style>