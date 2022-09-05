<template>
    <v-card>
        <div v-if="success">
            <img src="" alt="Success icon" />
            <p>You have successfully added a {{ resource }}</p>
            <BaseBtn width="70%" xlarge light>Add another {{ resource}}</BaseBtn>
        </div>
        <div v-else>
            <img src="" alt="Error icon" />
            <p>{{ resource }} could not be added</p>
            <BaseBtn width="70%" xlarge light :to="path">Try again</BaseBtn>
        </div>
    </v-card>
</template>
<script>
import BaseBtn from '../base/BaseBtn.vue';
    export default {
    name: "DialogBox",
    data() {
        return {};
    },
    props: {
        success: {
            type: Boolean,
            default: true
        },
        resource: {
            type: String,
            default: "resource"
        },
        path: {
            type: String,
            default: '/'
        }
    },
    components: { BaseBtn }
}
</script>
<style>

</style>