<template>
  <v-app>
    <AppLayout>
        <!-- <v-main> -->
      <!-- <h1>Time to get serious</h1> -->
        <v-main>
          <router-view></router-view>
        </v-main>
      <!-- <HelloWorld/> -->
      <!-- </v-main> -->
      </AppLayout>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
  body {
    background: #F2FBFE;
  }
  #app {
    text-align: center;
  }
</style>