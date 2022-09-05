<template>
      <div class="auth-div">
          <h1 class="font-weight-bold text-left">Reset Password</h1>
          <p class="my-0 text-left">Enter your email to reset your password</p>
          <form @submit.prevent="resetPassword(form)" class="auth-form">
                <BaseInput
                    v-model="email"
                    type="text"
                    label="Email"
                />
              <BaseBtn width="100%" x-large light class="" >Reset Password</BaseBtn>
          </form>
      </div>
  </template>
  <script >
    import BaseInput from '@/components/base/BaseInput.vue'
    import BaseBtn from '@/components/base/BaseBtn.vue'
   
    export default {
        name: 'ResetPassword',
        data () {
            return {
                email: ''
            }
        },
      components: {
        BaseInput,
        BaseBtn
      },
      methods: {
        resetPassword(values) {
          this.$store.dispatch('resetPassword', values)
        }
      }
    };
  </script>
  

  <style scoped>
    body {
      background: #F2FBFE;
    }
    #app {
      text-align: center;
    }
  </style>
  