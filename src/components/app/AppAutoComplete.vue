<template>
    <v-autocomplete
        v-bind="$attrs"
        v-on="$listeners"
        :value="value"
        hide-no-data
        filled
        append-icon="mdi-chevron-down"
        @input="v => $emit('input', v)"
        class="app-autocomplete"
    >
    <slot />
    </v-autocomplete>
</template>
<script>
export default {
    name: 'AppAutoComplete',
    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>
<style>
    
    .v-text-field.v-autocomplete .v-label {
    /* left: -10px !important; */
        top: -25px
    }
    .v-text-field--is-booted.v-autocomplete > .v-input__control > .v-input__slot {
        min-height: unset;
        max-height: unset;
        height: unset;
    }
    .v-text-field--is-booted.v-autocomplete > .v-input__control > .v-input__slot > .v-select__slot input {
        min-height: 40px;
        max-height: 40px;
        height: 40px;
        color: #56586D;
        background: #f7f7f7;
        border: 1px solid #e7e7e7;
        border-radius: 5px;
        margin-top: 0  !important;
    }
    .app-autocomplete .v-input__append-inner {
        position: absolute;
        top: -25%;
        right: 0
    }
    .v-autocomplete__content {
        max-height: 40px;
    }
    /* .app-input.v-text-field input {
    padding: 0.5rem 1rem;
    }
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
    } */

    
</style>