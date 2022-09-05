<template>
    <v-container>
        <EmptyState 
            v-if="!agents.length"
            :emptyStateData="emptyStateData"
        />
        <div v-else>
            <v-data-table
                :headers="headers"
                :items="agents"
            >
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import EmptyState from '@/components/EmptyState'
export default {
    name: "AgentList",
    data() {
        return {
            emptyStateData: {
                imgUrl: 'empty-agent',
                message: 'You do not have any agents yet',
                btn: true,
                btnMsg: 'Create new agent',
                btnLink: '/agents/new'
            },
            headers: [
                { text: 'merchant name', value: 'merchant_name' },
                { text: 'number of terminals', value: 'no_of_terminals' },
                { text: 'location', value: 'location' },
                { text: 'status', value: 'status' },
                { text: 'action', },
            ],
            agents: [
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