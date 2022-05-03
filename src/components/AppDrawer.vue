<template>
  <v-navigation-drawer
    id="default-drawer"
    app
    disable-route-watcher
    fixed
    floating
    class="text-left"
    v-model="drawer"
    :mini-variant.sync="mini"
    mini-variant-width="64"
    width="250"
  >
    <v-list-item class="logo">
      <v-list-item-icon class="text-h6 mx-0">
        <img
          src="@/assets/logo.svg"
        />
      </v-list-item-icon>
      <v-list-item-title class="logo-name"><span>infinity</span></v-list-item-title>
    </v-list-item>
   
    <v-list-item class="company" @click.stop="mini = !mini" >
      <v-list-item-avatar class="">
        <span class="first-letter">P</span>
      </v-list-item-avatar>

      <v-list-item-title class="company-name"><span>Peak Bank</span></v-list-item-title>
    </v-list-item>
    
    
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        class="px-0"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="(item, index) in userItems"
        :key="index"
        class="px-0"


        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'AppDrawer',
    data() {
      return {
        drawer: true,
        mini: true,
        navItems: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard-outline',
            to: '/dashboard',
          },
          {
            title: 'Transactions',
            icon: 'mdi-credit-card-outline',
            to: '/transactions',
          },
          {
            title: 'Users',
            icon: 'mdi-account-outline',
            to: '/users',
          },
          {
            title: 'Branch',
            icon: 'mdi-account-group-outline',
            to: '/branch',
          },
          {
            title: 'Merchants',
            icon: 'mdi-home-city-outline',
            to: '/merchants',
          },
          {
            title: 'Agents',
            icon: 'mdi-wallet-travel',
            to: '/agents',
          },
          {
            title: 'Commissions',
            icon: 'mdi-cash-multiple',
            to: '/commissions',
          },
          {
            title: 'Terminals',
            icon: 'mdi-source-merge',
            to: '/terminals',
          },
          {
            title: 'System Settings',
            icon: 'mdi-cog-outline',
            to: '/system-settings',
          },
        ],
        userItems : [
          {
            title: 'Products',
            icon: 'mdi-cube-outline',
            to: '/products',
          },
          {
            title: 'API',
            icon: 'mdi-source-fork mdi-flip-v',
            to: '/api',
          },
        ],
      }
    },

    components: {
    },

    computed: {
    },
  }
</script>

<style lang="sass">

.v-navigation-drawer__content::-webkit-scrollbar-track
  -webkit-box-shadow: inset 0 0 6px #5d5d5d
  background-color: #5d5d5d

.v-navigation-drawer__content::-webkit-scrollbar
  width: 0px

.v-navigation-drawer__content::-webkit-scrollbar-thumb
  -webkit-box-shadow: inset 0 0 6px #424242
  background-color: #424242

#default-drawer
  padding: 12px 0
  background: #f2fbfe
  .v-list--nav.v-list--dense .v-list-item:not(:last-child):not(:only-child)
    margin-bottom: 0
  .v-list-item
    padding: 0
    margin: 0 12px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-left: 0
    margin-right: 11px
    font-size: 12px

  .v-list--dense .v-list-item .v-list-item__icon
    margin-top: 0
    margin-bottom: 0
    height: 20px
    align-self: center
    
  .v-icon.v-icon
    font-size: 20px

  .v-list-item.logo
    gap: 4px
    
  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
  
    .v-list-item.logo
        justify-content: center !important

    .v-list-item.company
      background: unset
      padding: 0

  .logo-name
    font-weight: 500
    font-size: 32px
    line-height: 37px
    letter-spacing: -0.05em
    color: #1630C9

  .v-list-item.company
    background: #EDF1F8
    padding: 0 8px
    border-radius: 10px
    .company-name
      display: flex
      flex-direction: row
      gap: 8px
      align-items: center
      color: #121826
      font-size: 12px
      line-height: 14px
      font-weight: 400
      margin-bottom: 0
    
  .first-letter
    background: #FD1733
    width: 36px
    height: 36px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    color: #fff
    font-size: 16px
    line-height: 18px
</style>
