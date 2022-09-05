<script>
    import NotificationsMessage from './NotificationsMessage.vue';
    import { mapGetters } from 'vuex';
        export default {
            name: 'NotificationsList',
            components: {
                NotificationsMessage,
            },
            computed: {
                ...mapGetters({ notifications: 'getNotifications' }),
            }
        }
    </script>
    <template>
        <div class="notifications-list" >
    
            <NotificationsMessage
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification" />
        </div>
    </template>
    <style>
        .notifications-list {
            position: fixed;
            top: 0;
            right: 0;
            margin-right: 15px;
            widows: 450px;
        }
    </style>