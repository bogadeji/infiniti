<template>
    <v-container class="mt-16" id="form-details">
        <v-row id="form-step-3" gutter="32">
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Branch name"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Branch code"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Branch address"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="Local government area"
                />
            </v-col>
            <v-col md="6" cols="12" class="pt-0">
                <BaseInput
                    label="State"
                />
            </v-col>
            <v-col cols="12" class="pt-0">
                <BulkUpload />
            </v-col>
        </v-row>
        <div class="d-flex justify-end mt-3">
            <BaseBtn class="align-right " width="100px">Next</BaseBtn>
        </div>
    </v-container>
</template>
<script>
import BaseInput from '@/components/base/BaseInput'
import BulkUpload from '@/components/widgets/BulkUpload'
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
        BulkUpload,
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