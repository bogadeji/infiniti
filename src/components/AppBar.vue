<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline pr-16"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    flat
  >
    <v-toolbar-title
      class=" page-title"
      
    >
      {{ currentRouteName }}
      <span class="amount">0</span>
    </v-toolbar-title>

    <v-spacer />

    <AppSearch class="hidden-sm-and-down" />

    <BaseBtn v-if="resourcePage">Add {{ resource }}</BaseBtn>
  
  </v-app-bar>
</template>

<script>
  import BaseBtn from '@/components/base/BaseBtn'
  import AppSearch from '@/components/app/AppSearch'


  export default {
    name: 'DefaultBar',
    data() {
        return {
            name: 'Default App Bar'
        }
    },
    components: {
        BaseBtn,
        AppSearch
    },

    computed: {
        currentRouteName() {
            return this.$route.meta.name;
        },
        resourcePage() {
          return this.$route.meta.resourcePage
        }
    },
  }
</script>
<style lang="scss" scoped>
    #default-app-bar{
        background: #f7f7f7;

        .page-title {
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          color: #121826;

          .amount {
            font-style: normal;
            font-weight: 400;
            color: rgba(86, 88, 109, 0.75);
          }
        }
    }
</style>
