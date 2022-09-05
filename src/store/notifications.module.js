export default {
    state: {
        notifications: []
    },

    mutations: {
        PUSH_NOTIFICATION: function(state, notification) {
            state.notifications.push({
                ...notification,
                id: (Math.random() .toString(36) + Date.now().toString(36)).substr(2)
            })
            // console.log(state)
            // console.log(notification)
        },

        REMOVE_NOTIFICATION: function(state, notificationToRemove) {
            state.notifications = state.notifications.filter( notification => {
                return notification.id != notificationToRemove.id
            })
        }
    },

    actions: {
        addNotification: function (context, notification) {
            context.commit('PUSH_NOTIFICATION', notification)
        },

        removeNotification: function (context, notification) {
            context.commit('REMOVE_NOTIFICATION', notification)
        }
    },
    
    getters: {
        getNotifications: function (state) {
            return state.notifications
        }
    }
}