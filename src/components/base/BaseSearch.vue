<template>
    <v-text-field
      placeholder="Search"
      color="secondary"
      hide-details
      style="max-width: 230px"
      prepend-inner-icon="mdi-magnify"
      class="default-search"
    >
        <v-btn
          class="mt-n2 ml-n2"
          fab
          small
          elevation="2"
          height="44"
          width="44"
        >
        </v-btn>
    </v-text-field>
  </template>
  
  <script>
    export default {
      name: 'DefaultSearch',
    }
  </script>
  <style lang="scss" >
      .default-search.v-text-field input {
        padding: 0.5rem 0;
      }
      .v-application--is-ltr .v-text-field .v-input__prepend-inner {
          align-self: center;
  
          .v-icon.v-icon {
            font-size: unset;
            height: 12px;
            width: 12px;
          }
      }
  </style>
  