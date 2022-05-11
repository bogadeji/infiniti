<template>
    <v-container>
        <EmptyState 
            v-if="!users.length"
            :emptyStateData="emptyStateData"
        />
        <div v-else>
            <v-data-table
                :headers="headers"
                :items="users"
            >
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import EmptyState from '@/components/EmptyState'
export default {
    name: "UserList",
    data() {
        return {
            emptyStateData: {
                message: 'You have not added any users',
                btn: true,
                btnMsg: 'Add new user',
                btnLink: '/users/new'
            },
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'Type of User', value: 'userType' },
                { text: 'Status', value: 'status' },
                { text: '', },
            ],
            user: 0,
            users: [
                {
                    name: "John Brown",
                    email: "johnbrown@peakbank.com",
                    userType: "Agent",
                    status: 'Active'
                },
                {
                    name: "John Brown",
                    email: "johnbrown@peakbank.com",
                    userType: "Agent",
                    status: 'Pending'
                },
                {
                    name: "John Brown",
                    email: "johnbrown@peakbank.com",
                    userType: "Agent",
                    status: 'Active'
                },
                {
                    name: "John Brown",
                    email: "johnbrown@peakbank.com",
                    userType: "Agent",
                    status: 'Pending'
                },
                {
                    name: "John Brown",
                    email: "johnbrown@peakbank.com",
                    userType: "Agent",
                    status: 'Active'
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