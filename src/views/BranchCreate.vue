<template>
    <v-container class="mt-16" id="form-details">
        <v-row id="form-step-3" gutter="32">
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Branch name"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Branch code"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Branch address"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="Local government area"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <AppInput
                    label="State"
                />
            </v-col>
            <v-col cols="12" class="pt-0">
                <BulkUpload />
            </v-col>
        </v-row>
        <div class="d-flex justify-end mt-3">
            <AppBtn class="align-right " width="100px">Next</AppBtn>
        </div>
    </v-container>
</template>
<script>
import AppInput from '@/components/app/AppInput'
import BulkUpload from '@/components/widgets/BulkUpload'
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
        BulkUpload,
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