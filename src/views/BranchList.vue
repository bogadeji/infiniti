<template>
    <v-container>
        <EmptyState 
            v-if="!branches.length"
            resource="branch"
            btn
        />
        <div v-else>
            <v-data-table
                :headers="headers"
                :items="branches"
            >
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import EmptyState from '@/components/EmptyState'
export default {
    name: "BranchList",
    data() {
        return {
            headers: [
                { text: 'branch name', value: 'branch_name' },
                { text: 'number of agents', value: 'no_of_agents' },
                { text: 'location', value: 'location' },
                { text: 'status', value: 'status' },
                { text: 'action', },
            ],
            branches: [],
            branch: [
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                },
                {
                    branch_name: "MTN voucher",
                    no_of_agents: "23",
                    location: "Lagos",
                    status: 'active',
                }
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