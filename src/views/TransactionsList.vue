<template>
    <v-container>
        <EmptyState 
            v-if="!transactions.length"
            resource="transaction"
            imgUrl="../assets/vector/empty-transaction.svg"
        >
            <p>Transactions will appear here</p>
        </EmptyState>
        <div v-else>
            <v-row>
                <v-col class="d-flex justify-md-end col-md-8">
                    <FilterByDate
                        class=""
                        :dropdownList="filterByDate"
                    />
                    <FilterByType 
                        :filterList="filterByType"
                    />
                </v-col>
                <v-col class="d-flex justify-end col-md-4">
                    <v-btn outlined color="primary" class="share">Share</v-btn>
                </v-col>
            </v-row>
            <TransactionsTable
                :headers="headers"
                :items="transactions"
            />
        </div>
    </v-container>
</template>

<script>
import EmptyState from '@/components/EmptyState'
import FilterByDate from '@/components/filters/FilterByDate'
import FilterByType from '@/components/filters/FilterByType'
import TransactionsTable from '@/components/widgets/TransactionsTable'
export default {
    name: "TransactionsList",
    data() {
        return {
            headers: [
                { text: 'product', value: 'product' },
                { text: 'sequence', value: 'sequence' },
                { text: 'agent', value: 'agent' },
                { text: 'terminal', value: 'terminal' },
                { text: 'channel', value: 'channel' },
                { text: 'amount', value: 'amount' },
                { text: 'status', value: 'status' },
                { text: 'date', value: 'date' },
                { text: 'issuer', value: 'issuer' },
                { text: 'action', },
            ],
            transactions: [],
            transaction: [
                {
                    product: "MTN voucher",
                    sequence: "934848398",
                    agent: "Bella Hadid",
                    terminal: '934848398',
                    channel: "Android POS",
                    amount: "20000",
                    amountType: "cash",
                    status: "completed",
                    seconds: '',
                    date: 'JAN 16 2022',
                    issuer: 'N/A',
                },
                {
                    product: "MTN voucher",
                    sequence: "934848398",
                    agent: "Bella Hadid",
                    terminal: '934848398',
                    channel: "Android POS",
                    amount: "20000",
                    amountType: "cash",
                    status: "pending",
                    seconds: '',
                    date: 'JAN 16 2022',
                    issuer: 'N/A',
                },
                {
                    product: "MTN voucher",
                    sequence: "934848398",
                    agent: "Bella Hadid",
                    terminal: '934848398',
                    channel: "Android POS",
                    amount: "20000",
                    amountType: "cash",
                    status: "declined",
                    seconds: '',
                    date: 'JAN 16 2022',
                    issuer: 'N/A',
                },
                {
                    product: "MTN voucher",
                    sequence: "934848398",
                    agent: "Bella Hadid",
                    terminal: '934848398',
                    channel: "Android POS",
                    amount: "20000",
                    amountType: "cash",
                    status: "completed",
                    seconds: '',
                    date: 'JAN 16 2022',
                    issuer: 'N/A',
                },
                {
                    product: "MTN voucher",
                    sequence: "934848398",
                    agent: "Bella Hadid",
                    terminal: '934848398',
                    channel: "Android POS",
                    amount: "20000",
                    amountType: "cash",
                    status: "completed",
                    seconds: '',
                    date: 'JAN 16 2022',
                    issuer: 'N/A',
                },
            ],
            filterByDate: [
                'Last 90 days',
                'Last 30 days',
                'Last 7 days',
                'Last 24 hours'
            ],
            filterByType: {
                "Channel": [
                    'LINUX POS',
                    'Android POS',
                    'Web OS'
                ],
                'Account type': [
                    'Savings',
                    'Current'
                ],
                'Product': [],
                'Method': [],
                'NIP providers': [],
                'Vendor type': [],
                'Status': [
                    'completed',
                    'pending',
                    'failed'
                ]
            },
        }
    },
    components: {
        EmptyState,
        FilterByDate,
        FilterByType,
        TransactionsTable
    }
}
</script>
<style lang="scss" scoped>
    .share {
        &.v-btn:not(.v-btn--round).v-size--default {
            height: 24px;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 11px;
        }
    }
</style>