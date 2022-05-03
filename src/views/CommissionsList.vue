<template>
    <v-container>
        <EmptyState 
            v-if="!commissions.length"
            resource="commissions"
            message="You have not earned any commissions yet"
        >
            <p>Commissions will appear here</p>
        </EmptyState>
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
    name: "CommissionsList",
    data() {
        return {
            headers: [
                { text: 'product', value: 'product' },
                { text: 'commission', value: 'commission' },
                { text: 'date created', value: 'date_created' },
                { text: 'qty sold', value: 'qty_sold' },
                { text: 'added by', value: 'added_by' },
                { text: 'action', },
            ],
            commissions: [],
            commission: [
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Jon Snow'
                },
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Ade Michael'
                },
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Tiwa Savage'
                },
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Titilayo Oguns'
                },
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Chuks Emma'
                },
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Akan Ubong'
                },
                {
                    product: "MTN voucher",
                    commission: "15",
                    date_created: "Lagos",
                    qty_sold: '456789',
                    added_by: 'Hassan Ola'
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