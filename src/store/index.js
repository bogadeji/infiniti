import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './user.module.js'
import TransactionsModule from './transactions.module.js'
import NotificationsModule from './notifications.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: UserModule,
        transactions: TransactionsModule,
        NotificationsModule
    }
})
