<template>
    <div>
        <!-- <v-card> -->
            <h1 class="font-weight-bold text-left">Create your account</h1>
            <form class="auth-form">
                <div class="flex input-flex">
                    <AppInput
                        type="text"
                        label="First name"
                    />
                    <AppInput
                    type="text"
                        label="Last name"
                    />
                </div>
                <AppInput
                type="text"
                    label="Email address"
                />
                <AppInput
                type="text"
                    label="Phone number"
                />
                <AppInput
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
                    <AppBtn width="100%" x-large light color="primary">Sign up</AppBtn>
                

                <p>Have an account? <router-link to="/">Sign in</router-link></p>
            </form>
                <a></a>
        <!-- </v-card> -->
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