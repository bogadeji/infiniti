<template>
    <v-container>
        <StepForm @onComplete="onComplete(userDetails)" id="form-details" >
        <template v-slot="{formData}">
            <StepFormTab title="User details" info="Your name and Email" :formData="formData" :selected="true">
                <v-container class="mt-16 tab-container">
                    <v-row id="form-step-1" gutter="32">
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="First name"
                                v-model="userDetails.firstName"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Last name"
                                v-model="userDetails.lastName"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Email address"
                                v-model="userDetails.emailAddress"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Phone number"
                                v-model="userDetails.phoneNumber"
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
                                    v-model="userDetails.branch"
                                />
                            </v-col>
                            <v-col md="6" cols="12" class="pt-0">
                                <BaseInput
                                    label="Business name"
                                    v-model="userDetails.businessName"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </StepFormTab>
            <StepFormTab title="Submit" info="Finishing Up">
                <div id="form-step-3" class="mt-16">
                    <DetailsCard title="User details" info="Confirm the details of this user" >
                        
                        <div class="details__content">
                            <h5 class="details__heading">User details</h5>
                            <v-row>
                                <v-col cols="6">
                                    <h6 class="details__subheading">First name</h6>
                                    <p class="details__info" v-if="userDetails.firstName">{{ userDetails.firstName }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Last name</h6>
                                    <p class="details__info">{{ userDetails.lastName }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Email Address</h6>
                                    <p class="details__info">{{ userDetails.emailAddress }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Phone Number</h6>
                                    <p class="details__info">{{ userDetails.phoneNumber }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Type of user</h6>
                                    <p class="details__info">{{ userDetails.typeOfUser }}</p>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="details__content">
                            <h5 class="details__heading">Business details</h5>
                            <v-row>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Branch</h6>
                                    <p class="details__info">{{ userDetails.branch }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Business name</h6>
                                    <p class="details__info">{{ userDetails.businessName }}</p>
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
            formData: {},
            userDetails: {
                firstName: '',
                lastName: '',
                emailAddress: '',
                phoneNumber: '',
                typeOfUser: '',
                branch: '',
                businessName: '',
            },
            userType: [
                'Agent',
                'Merchant',
                'Other user'
            ]
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
    onComplete(details) {
    //   alert("Submitting Form ! Rock On");
        this.submitDetails(details)
    },
    submitDetails(details) {
        console.log(details)
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
    /* .theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step {
    border: 1px solid rgba(22, 48, 201, 0.25);;
    background: #fff !important;
}
.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step::before {

    content: "\F09DE";
    color: rgba(22, 48, 201, 0.25);
    font: normal normal normal 24px/1 "Material Design Icons";
                            font-size: 1.25rem;
                            text-rendering: auto;
                            line-height: inherit;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
}
.stepper .v-stepper__step__step {
    height: 15px;
    min-width: 15px;
    width: 15px;
} */
</style>