<template>
    <v-container>
        <EmptyState 
            v-if="!users.length"
            resource="users"
            btn    
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
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'Type of User', value: 'userType' },
                { text: 'Status', value: 'status' },
                { text: '', },
            ],
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