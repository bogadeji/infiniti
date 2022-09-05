<template>
    <v-container>
        <EmptyState 
            v-if="!products.length"
            resource="products"
            btn
        />
        <div v-else>
            <v-data-table
                :headers="headers"
                :items="products"
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
                { text: 'products', value: 'products' },
                { text: 'terminal type', value: 'terminal_type' },
                { text: 'terminal model', value: 'terminal_model' },
                { text: 'qty sold', value: 'qty_sold' },
                { text: 'added by', value: 'added_by' },
                { text: 'action', },
            ],
            products:  [
                {
                    products: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    products: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    products: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    products: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    products: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    products: "MTN voucher",
                    terminal_type: "15",
                    terminal_model: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    products: "MTN voucher",
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