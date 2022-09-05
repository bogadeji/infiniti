<template>
    <v-container class="mt-16" id="form-details">
        <v-row gutter="32">
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Terminal ID"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppAutoComplete
                    label="Terminal type"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Terminal model"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Add merchant to terminal"
                />
            </v-col>
        </v-row>
        
        <BaseBtn width="150px">Add terminal</BaseBtn>
    </v-container>
</template>
<script>
import BaseInput from '@/components/base/BaseInput'
import AppAutoComplete from '@/components/app/AppAutoComplete'
import BaseBtn from '@/components/base/BaseBtn'

export default {
    data() {
        return {
            e1: 1,
            formData: {}
        }
    },
    components: {
        BaseInput,
        AppAutoComplete,
        BaseBtn,
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