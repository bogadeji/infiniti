import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/views/NotFound';
import AuthLogin from '@/views/AuthLogin';
import AuthRegister from '@/views/AuthRegister';
import AuthOTP from '@/views/AuthOTP';
import Dashboard from '@/views/Dashboard';
import UserList from '@/views/UserList.vue'
import UserCreate from '@/views/UserCreate.vue'
import UserDetails from '@/views/UserDetails.vue'
import TransactionsList from '@/views/TransactionsList.vue'
import BranchList from '@/views/BranchList.vue'
import MerchantsList from '@/views/MerchantsList.vue'
import AgentsList from '@/views/AgentsList'
import CommissionsList from '@/views/CommissionsList.vue'
import TerminalsList from '@/views/TerminalsList.vue'
import ProductList from '@/views/ProductList.vue'
import ApiList from '@/views/ApiList'
import SystemSettings from '@/views/SystemSettings'

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
                name: 'Current Transacting Users'
            }
        },
        {
            path: '/transactions',
            name: 'TransactionsList',
            component: TransactionsList,
            meta: {
                name: 'Transactions'
            }
        },
        {
            path: '/users',
            component: {
                // render router-view into parent
                render(c) { 
                    return c('router-view'); 
                }

            },
            children: [
                {
                    path: '',
                    name: 'UserList',
                    component: UserList,
                    // meta: {
                    //     name: 'Users'
                    // }
                },
                {
                    path: 'new',
                    name: 'UserCreate',
                    component: UserCreate,
                    // meta: {
                    //     name: 'Users'
                    // }
                },
                {
                    path: ':id',
                    name: 'UserDetails',
                    component: UserDetails,
                    // meta: {
                    //     name: 'User Details'
                    // }
                }
            ],
            meta: {
                name: 'Users'
            }
        },
        {
            path: '/branch',
            name: 'BranchList',
            component: BranchList,
            meta: {
                name: 'Branches'
            }
        },
        {
            path: '/merchants',
            name: 'Merchants',
            component: MerchantsList,
            meta: {
                name: 'Merchants'
            }
        },
        {
            path: '/agents',
            name: 'AgentsList',
            component: AgentsList,
            meta: {
                name: 'Agents'
            }
        },
        {
            path: '/commissions',
            name: 'CommissionList',
            component: CommissionsList,
            meta: {
                name: 'Commissions'
            }
        },
        {
            path: '/terminals',
            name: 'TerminalsList',
            component: TerminalsList,
            meta: {
                name: 'Terminals'
            }
        },
        {
            path: '/products',
            name: 'ProductList',
            component: ProductList,
            meta: {
                name: 'Products'
            }
        },
        {
            path: '/api',
            name: 'ApiList',
            component: ApiList,
            meta: {
                name: 'API'
            }
        },
        {
            path: '/system-settings',
            name: 'SystemSettings',
            component: SystemSettings,
            meta: {
                name: 'Settings'
            }
        },
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