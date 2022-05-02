<template>
    <v-text-field
        v-bind="$attrs"
        v-on="$listeners"
        :value="value"
        outlined
        @input="v => $emit('input', v)"
    >
    <slot />
    </v-text-field>
</template>
<script>
export default {
    name: 'AppInput',
    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>
<style>
    .v-text-field.v-text-field--enclosed {
        margin: 0 0 1rem !important;
    } 

    .theme--light.v-text-field--outlined > .v-input__control > .v-input__slot fieldset {
        color: #56586D;
        background: #f7f7f7;
        border-color: #e7e7e7;
    }

    .theme--light.v-text-field--is-booted > .v-input__control > .v-input__slot  {
        color: #56586D;
        background: #efefef;
        border-color: #efefef;
        border-radius: 5px;
        padding: 10px
    }

    .v-text-field input {
    padding: 0.5rem 1rem;
    }

    .theme--light.v-text-field--outlined.v-input--is-focused.v-input--has-state > .v-input__control > .v-input__slot fieldset:active,
    .theme--light.v-text-field--outlined.v-input--is-focused.v-input--has-state > .v-input__control > .v-input__slot fieldset:focus,
    .theme--light.v-text-field--outlined.v-input--is-focused.v-input--has-state > .v-input__control > .v-input__slot fieldset:focus-within {
        border-color: #1630C9;
    }

    .v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
        border-radius: 5px;
    }

    
</style>