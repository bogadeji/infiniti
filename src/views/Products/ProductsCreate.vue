<template>
    <v-container>
        <StepForm @onComplete="onComplete" id="form-details" >
        <template v-slot="{formData}">
            <StepFormTab title="Product details" info="Your name and Email" :formData="formData"  :selected="true">
                <v-container class="mt-16 tab-container">
                    <v-row id="form-step-3" gutter="32">
                        <v-col md="6" cols="12" class="pt-0">
                            <BaseInput
                                label="Product name"
                            />
                        </v-col>
                        <v-col md="6" cols="12" class="pt-0">
                            <AppAutoComplete
                                label="Type of business"
                                class="mt-0 pt-0"
                            />
                        </v-col>
                        <v-col cols="12" class="pt-0">
                            <BulkUpload text="Drag and drop image">
                                <p class="bulk-upload-text">Drag and drop image</p>
                                <p class="bulk-upload-text">or <span>browse</span></p>
                            </BulkUpload>
                        </v-col>
                    </v-row>
                </v-container>
            </StepFormTab>
            <StepFormTab title="set commission" info="Basic Info about you" data-vv-scope="step2">
                <div id="form-step-2">
                    <v-container class="mt-16 tab-container">
                        <v-row id="form-step-1" gutter="32">
                            <v-col md="6" cols="12" class="pt-0">
                                <BaseInput
                                    label="Commission value"
                                />
                            </v-col>
                            <v-col md="6" cols="12" class="pt-0">
                                <BaseInput
                                    label="Commission cap amount"
                                />
                            </v-col>
                            <v-col md="6" cols="12" class="pt-0">
                                <AppAutoComplete
                                    label="Commission cap value"
                                    class="mt-0 pt-0"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </StepFormTab>
            <StepFormTab title="Submit" info="Finishing Up">
                <div id="form-step-1" class="mt-16">
                    <DetailsCard title="Review" info="Review and confirm product details" >
                        
                        <div class="details__content">
                            <div class="product-logo">
                                <img src="" alt="product logo" />
                            </div>
                            <h5 class="details__heading">Product details</h5>
                            <v-row>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Product name</h6>
                                    <p class="details__info">MTN 500NGN voucher</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Type of business</h6>
                                    <p class="details__info">Telecommunications</p>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="details__content">
                            <h5 class="details__heading">Commission details</h5>
                            <v-row>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Commission value</h6>
                                    <p class="details__info">5%</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Commission cap amount</h6>
                                    <p class="details__info">2000</p>
                                </v-col>
                                <v-col cols="6">
                                    <h6 class="details__subheading">Commission cap value</h6>
                                    <p class="details__info">5%</p>
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
</style>