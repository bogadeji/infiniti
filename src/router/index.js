import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/views/NotFound';
import AuthLogin from '@/views/AuthLogin';
import AuthRegister from '@/views/AuthRegister';
import AuthOTP from '@/views/AuthOTP';
import Dashboard from '@/views/Dashboard';
import UserList from '@/views/UserList.vue'
import TransactionsList from '@/views/TransactionsList.vue'
// import BranchList from '@/views/BranchList.vue'
// import MerchantsList from '@/views/MerchantsList.vue'
// import AgentsList from '@/views/AgentsList'
// import CommissionsList from '@/views/CommissionsList.vue'
// import TerminalsList from '@/views/TerminalsList.vue'
// import ProductList from '@/views/ProductList.vue'
// import ApiList from '@/views/ApiList'
// import SystemSettings from '@/views/SystemSettings'

Vue.use(Router);

export default new Router({
    mode: 'history',
    // history: createWebHistory(),
    routes: [
        {
            path: '/register',
            name: 'AuthRegister',
            component: AuthRegister,
            meta: {
                layout: 'AuthLayout',
                name: 'Register'
            }
        },
        {
            path: '/verify-email',
            name: 'AuthOTP',
            component: AuthOTP,
            meta: {
                layout: 'AuthLayout',
                name: 'Verify Email'
            }
        },
        {
            path: '/',
            name: 'AuthLogin',
            component: AuthLogin,
            meta: {
                layout: 'AuthLayout'
            }
        },
        // {
        //     path: '/login',
        //     name: 'AuthLogin',
        //     component: AuthLogin,
        //     meta: {
        //         layout: 'AuthLayout'
        //     }
        // },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                layout: 'LoggedInLayout',
                name: 'Current Transacting Users'
            }
        },
        {
            path: '/transactions',
            name: 'TransactionsList',
            component: TransactionsList,
            meta: {
                layout: 'LoggedInLayout',
                name: 'Transactions'
            }
        },
        {
            path: '/users',
            name: 'UserList',
            component: UserList,
            meta: {
                layout: 'LoggedInLayout',
                name: 'Users'
            }
        },
        // {
        //     path: '/branch',
        //     name: 'BranchList',
        //     component: BranchList,
        //     meta: {
        //         layout: 'LoggedInLayout', 
        //         name: 'Branches'
        //     }
        // },
        // {
        //     path: '/merchants',
        //     name: 'Merchants',
        //     component: MerchantsList,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'Merchants'
        //     }
        // },
        // {
        //     path: '/agents',
        //     name: 'AgentsList',
        //     component: AgentsList,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'Agents'
        //     }
        // },
        // {
        //     path: '/commissions',
        //     name: 'CommissionList',
        //     component: CommissionsList,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'Commissions'
        //     }
        // },
        // {
        //     path: '/terminals',
        //     name: 'TerminalsList',
        //     component: TerminalsList,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'Terminals'
        //     }
        // },
        // {
        //     path: '/products',
        //     name: 'ProductList',
        //     component: ProductList,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'Products'
        //     }
        // },
        // {
        //     path: '/api',
        //     name: 'ApiList',
        //     component: ApiList,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'API'
        //     }
        // },
        // {
        //     path: '/system-settings',
        //     name: 'SystemSettings',
        //     component: SystemSettings,
        //     meta: {
        //         layout: 'LoggedInLayout',
        //         name: 'Settings'
        //     }
        // },
        {
            path: '/:pathMath(.*)',
            name: 'NotFound',
            component: NotFound,
            meta: {
                layout: 'AuthLayout',
                name: ''
            }
        },

    ]
})