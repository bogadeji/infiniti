<template>
    <v-container>
        <EmptyState 
            v-if="!merchants.length"
            :emptyStateData="emptyStateData"
        />
        <div v-else>
            <v-data-table
                :headers="headers"
                :items="merchants"
            >
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import EmptyState from '@/components/EmptyState'
export default {
    name: "MerchantList",
    data() {
        return {
            emptyStateData: {
                imgUrl: 'empty-merchant',
                message: 'You have not added any users',
                btn: true,
                btnMsg: 'Create new merchant',
                btnLink: '/merchants/new'
            },
            headers: [
                { text: 'merchant name', value: 'merchant_name' },
                { text: 'number of terminals', value: 'no_of_terminals' },
                { text: 'location', value: 'location' },
                { text: 'status', value: 'status' },
                { text: 'added by', value: 'added_by' },
                { text: 'action', },
            ],
            merchants: [],
            merchant: [
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    merchant_name: "Admiralty Branch",
                    no_of_terminals: "23",
                    location: "Lagos",
                    status: 'active',
                },
            ]
        }
    },
    components: {
        EmptyState
    }
}
</script>
<style scoped>

</style>