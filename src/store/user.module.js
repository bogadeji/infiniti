import router from '@/router/index.js'

export default {
    state: {
        loggedInUser: null
    },

    mutations: {
        UPDATE_USER: function(state, user) {
            state.loggedInUser = user
        }
    },

    actions: {
        loginUser: function (context, payload) {
            context.commit('UPDATE_USER', payload)
            // if () {
            //     this.$router.push('/verify-otp')
            // } else {
            //     context.dispatch('addNotification', {
            //         type: 'error',
            //         message: 'Error',
            //         typeClass: 'error'
            //     } )
            // }
            router.push('/verify-otp')
            context.dispatch('addNotification', {
                type: 'success',
                message: 'User logged in successfully',
                typeClass: 'success'
            } )
        },
        logOutUser: function (context) {
            context.commit('UPDATE_USER', [])
        },
        sendOTP: function (context, payload) {
            context.dispatch('addNotification', {
                type: 'success',
                message: 'User logged in successfully'
            })
            router.push('/dashboard')
            console.log(payload)
        },
        resetPassword: function (context, payload) {
            context.dispatch('addNotification', {
                type: 'success',
                message: 'User logged in successfully'
            })
            router.push('/verify-email')
            console.log(payload)
        },
        changePassword: function (context, payload) {
            context.dispatch('addNotification', {
                type: 'success',
                message: 'User logged in successfully'
            })
            router.push('/dashboard')
            console.log(payload)
        }
    },
    
    getters: {
        getUser: function (state) {
            return state.loggedInUser
        }
    }
}