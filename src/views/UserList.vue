<template>
    <v-container>
        <EmptyState 
            v-if="!users.length"
            resource="user"
            message="You have not added any users"
            btn    
            btnMsg="Add new user"
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
            users: 0,
            user: [
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