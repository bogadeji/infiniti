<template>
    <v-container class="mt-16" id="form-details">
        <v-row gutter="32">
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Terminal ID"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppAutoComplete
                    label="Terminal type"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Terminal model"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Add merchant to terminal"
                />
            </v-col>
        </v-row>
        
        <AppBtn width="150px">Add terminal</AppBtn>
    </v-container>
</template>
<script>
import AppInput from '@/components/app/AppInput'
import AppAutoComplete from '@/components/app/AppAutoComplete'
import AppBtn from '@/components/app/AppBtn'

export default {
    data() {
        return {
            e1: 1,
            formData: {}
        }
    },
    components: {
        AppInput,
        AppAutoComplete,
        AppBtn,
    },
    methods: {
        onComplete() {
        alert("Submitting Form ! Rock On");
        }
    }
}
</script>
<style>
</style>