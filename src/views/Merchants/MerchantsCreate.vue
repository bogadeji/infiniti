<template>
    <v-container>
        <StepForm @onComplete="onComplete" id="form-details" >
        <template v-slot="{formData}">
            <StepFormTab title="Merchant details" info="Your name and Email" :formData="formData" :selected="true">
                <v-container class="mt-16 tab-container">
                    <v-row id="form-step-3" gutter="32">
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="First name"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Last name"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Email address"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Phone number"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <AppAutoComplete
                                label="Type of user"
                                class="mt-0 pt-0"
                            />
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <BulkUpload btn="true">
                                <p class="bulk-upload-text">Or bulk upload users from <span>csv</span> or <span>xls</span> file</p>
                            </BulkUpload>
                        </v-col>
                    </v-row>
                </v-container>
            </StepFormTab>
            <StepFormTab title="business details" info="Basic Info about you" data-vv-scope="step2">
                <div id="form-step-2">
                    <v-container class="mt-16 tab-container">
                        <v-row id="form-step-1" gutter="32">
                            <v-col md="6" cols="12" class="pt-0">
                                <BaseInput
                                    label="Branch"
                                />
                            </v-col>
                            <v-col md="6" cols="12" class="pt-0">
                                <BaseInput
                                    label="Business name"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </StepFormTab>
            <StepFormTab title="Submit" info="Finishing Up">
                <div id="form-step-1" class="mt-16">
                    <DetailsCard title="Merchant details" info="Confirm the details of this user" >
                        
                        <div class="details__content">
                            <h5 class="details__heading">Merchant details</h5>
                            <v-row>
                                <v-col cols="6">
                                    <h6 class="details__subheading">First name</h6>
                                    <p class="details__info">Jason</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">First name</h6>
                                    <p class="details__info">Jason</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">First name</h6>
                                    <p class="details__info">Jason</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">First name</h6>
                                    <p class="details__info">Jason</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">First name</h6>
                                    <p class="details__info">Jason</p>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="details__content">
                            <h5 class="details__heading">Business details</h5>
                            <v-row>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Branch</h6>
                                    <p class="details__info">Jason</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Business name</h6>
                                    <p class="details__info">Derulo</p>
                                </v-col>
                            </v-row>
                        </div>
                    </DetailsCard>           
                </div>
            </StepFormTab>
            </template>
        </StepForm>
    </v-container>
</template>
<script>
import StepForm from '@/components/StepForm'
import StepFormTab from '@/components/StepFormTab'
import BaseInput from '@/components/base/BaseInput'
import AppAutoComplete from '@/components/app/AppAutoComplete'
import BulkUpload from '@/components/widgets/BulkUpload'
import DetailsCard from '@/components/DetailsCard'

export default {
    data() {
        return {
            e1: 1,
            formData: {}
        }
    },
    components: {
    StepForm,
    StepFormTab,
    BaseInput,
    AppAutoComplete,
    BulkUpload,
    DetailsCard,
  },
  methods: {
    onComplete() {
      alert("Submitting Form ! Rock On");
    }
  }
}
</script>
<style>
    #form-details {
        width: 80%;
        max-width: 900px;
        margin: 0 auto;
    }
    div.tab-container {
        padding: 0;
    }
</style>