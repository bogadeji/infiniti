<template>
    <v-container>
        <EmptyState 
            v-if="!terminals.length"
            resource="terminals"
            imgUrl="empty-terminal"
            message="You do not have any terminals yet"
            btn
            btnMsg="Create new terminal"
        />
        <div v-else>
            <v-data-table
                :headers="headers"
                :items="terminals"
            >
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import EmptyState from '@/components/EmptyState'
export default {
    name: "CommissionsList",
    data() {
        return {
            headers: [
                { text: 'terminal id', value: 'terminal_id' },
                { text: 'terminal type', value: 'terminal_type' },
                { text: 'terminal model', value: 'terminal_model' },
                { text: 'qty sold', value: 'qty_sold' },
                { text: 'added by', value: 'added_by' },
                { text: 'action', },
            ],
            terminals: [],
            agents: [
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    terminal_id: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
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