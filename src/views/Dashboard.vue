<template>
    <div>
        <v-container class="">
            <v-row class="summary--statistics .flex-sm-column-reverse">
                <v-col class="summary--numbers col-md-8 col-sm-12">
                    <div class="d-flex">
                        <p class="dashboard--title mb-0 d-flex align-center">
                            Transaction Summary
                        </p>
                        <v-spacer />
                        <FilterByDate
                            class=""
                            :dropdownList="filterByDate"
                        />
                        <FilterByType 
                            :filterList="filterByType"
                        />
                    </div>
                    <v-row class="d-flex align-center    transaction-summary">
                        <v-col class="transaction-summary--card total col-md-3 col-sm-6 col-xs-12 flow">
                            <div class="transaction-summary--status-icon"><i class="mdi mdi-credit-card total"></i></div>
                            <h4 class="transaction-summary--title">Total transactions</h4>
                            <p class="transaction-summary--amount">N136,765,875</p>
                            <p class="transaction-summary--transactions">1876</p>
                        </v-col>
                        <v-col class="transaction-summary--card approved col-md-3 col-sm-6 col-xs-12 flow">
                            <div class="transaction-summary--status-icon"><i class="mdi mdi-check-circle approved"></i></div>
                            <h4 class="transaction-summary--title">Approved transactions</h4>
                            <p class="transaction-summary--amount">N136,765,875</p>
                            <p class="transaction-summary--transactions">1489</p>
                        </v-col>
                        <v-col class="transaction-summary--card pending col-md-3 col-sm-6 col-xs-12 flow">
                            <div class="transaction-summary--status-icon"><i class="mdi mdi-alert-circle pending"></i></div>
                            <h4 class="transaction-summary--title">Pending transactions</h4>
                            <p class="transaction-summary--amount">N136,765,875</p>
                            <p class="transaction-summary--transactions">250</p>
                        </v-col>
                        <v-col class="transaction-summary--card declined col-md-3 col-sm-6 col-xs-12 flow">
                            <div class="transaction-summary--status-icon"><i class="mdi mdi-close-circle declined"></i></div>
                            <h4 class="transaction-summary--title">Declined transactions</h4>
                            <p class="transaction-summary--amount">N136,765,875</p>
                            <p class="transaction-summary--transactions">34</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="summary--doughnut-chart col-md-4 col-sm-12">
                    <p class="dashboard--title text-left mb-0 mt-1">Summary chart</p>
                    <div class="doughnut-chart chart-div">
                        <DoughnutChart :chartData="doughnutChartData" :options="doughnutChartOptions" />
                    </div>
                </v-col>
            </v-row>
            <section class="summary--barchart">
                <div class="bar-chart chart-div mt-16 mb-8">
                    <Bar :chartData="barChartData" :chartOptions="barChartOptions" />
                </div>
            </section>
            <section class="mt-5">
                <TransactionsTable
                    :headers="headers"
                    :items="items"
                />
            </section>
        </v-container>
        
    </div>
</template>
<script>
import FilterByDate from '@/components/filters/FilterByDate'
import FilterByType from '@/components/filters/FilterByType'
import DoughnutChart from '@/components/charts/DoughnutChart'
import Bar from '@/components/charts/StackedBar'
import TransactionsTable from '@/components/widgets/TransactionsTable'

export default {
    name: 'AppDashboard',
    components: {
        FilterByDate,
        FilterByType,
        DoughnutChart,
        Bar,
        TransactionsTable
    },
    data() {
        return {
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
            barChartData: {
                labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                 datasets: [
                    {
                        label: 'Approved',
                        backgroundColor: '#1630C9',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    },
                    {
                        label: 'Pending',
                        backgroundColor: '#AAB3C5',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    },
                    {
                        label: 'Declined',
                        backgroundColor: '#272262',
                        data: [20, 10, 12, 33, 22, 4, 0]
                    }
                ]
            },
            barChartOptions: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                    stacked: true,
                    },
                    y: {
                    stacked: true
                    }
                }
            },
            doughnutChartData: {
                labels: [ '4% - PENDING', '1% - DECLINED', '95% - COMPLETED' ],
                datasets: [{
                    data: [4, 1, 95],
                    backgroundColor: [
                        '#AAB3C5',
                        '#272262',
                        '#1630C9'
                    ]
                }],
            },
            doughnutChartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            boxWidth: 10,
                        },
                        position: 'right'
                    },
                },
                cutout: '60%',
            },
            headers: [
                {text: "product", value: "product"},
                {text: "sequence", value: "sequence"},
                {text: "agent", value: "agent"},
                {text: "terminal", value: "terminal"},
                {text: "channel", value: "channel"},
                {text: "amount", value: "amount"},
                {text: "status", value: "status"},
                {text: "date", value: "date"},
                {text: "issuer", value: "issuer"},
                {text: "", value: ""}
            ],
            items: [
                {
                    product: 'MTN voucher',
                    sequence: '934848398',
                    agent: 'Bella Hadid',
                    terminal: '934848398',
                    channel: 'Android POS',
                    amount: '20000',
                    status: 'completed',
                    date: 'JAN 16 2022', 
                    issuer: 'N/A'
                },
                {
                    product: 'MTN voucher',
                    sequence: '934848398',
                    agent: 'Bella Hadid',
                    terminal: '934848398',
                    channel: 'Android POS',
                    amount: '20000',
                    status: 'pending',
                    date: 'JAN 16 2022', 
                    issuer: 'N/A'
                },{
                    product: 'MTN voucher',
                    sequence: '934848398',
                    agent: 'Bella Hadid',
                    terminal: '934848398',
                    channel: 'Android POS',
                    amount: '20000',
                    status: 'declined',
                    date: 'JAN 16 2022', 
                    issuer: 'N/A'
                },
                {
                    product: 'MTN voucher',
                    sequence: '934848398',
                    agent: 'Bella Hadid',
                    terminal: '934848398',
                    channel: 'Android POS',
                    amount: '20000',
                    status: 'completed',
                    date: 'JAN 16 2022', 
                    issuer: 'N/A'
                },
                {
                    product: 'MTN voucher',
                    sequence: '934848398',
                    agent: 'Bella Hadid',
                    terminal: '934848398',
                    channel: 'Android POS',
                    amount: '20000',
                    status: 'completed',
                    date: 'JAN 16 2022', 
                    issuer: 'N/A'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .barchart.chart-div {
        max-width: 100%;
        width: 80vw;
        margin: 0 auto;
    }
    .dashboard--title {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: #56586D;
    }

    .summary--statistics {
        padding-top: 20px;
    }

    .summary--statistics,
    .summary--barchart {
        border-bottom: 1px solid rgba(86, 88, 109, 0.1);
    }

    .summary--numbers {
        border-right: 1px solid rgba(86, 88, 109, 0.1);
    }

    .transaction-summary {
        font-style: normal;
        text-align: left;
        padding: 30px;
        padding-left: 0;
        height: 100%;

        .transaction-summary--card {
            margin: 0 auto;
            --flow-space: 0.5em;

            &:first-child {
                margin-left: 0;
            }
            &:where(:not(:first-child)) {
                padding-left: 30px;
            }
            &:where(:not(:last-child)) {
                border-right: 1px solid rgba(86, 88, 109, 0.1);
            }
        }
        .transaction-summary--status-icon {

            i.mdi {
                width: 15px;
                height: 15px;
                padding: 0;
                text-align: center;
                background: #E8EAFA;
                border: 5px solid #E8EAFA;
                border-radius: 50%;
            
                &.total,
                &.approved {
                    color: #1630C9;
                }
                &.pending {
                    color: #919AAB;
                }
                &.declined {
                    color: #272262;;
                }
            }
        }
        .transaction-summary--title {
            font-weight: 400;
            font-size: 9px;
            line-height: 10px;
            color: #56586D;
            text-transform: uppercase;
        }
        .transaction-summary--amount {
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            color: #121826;
        }
        .transaction-summary--transactions {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #121826;
        }
    }

    .doughnut-chart {
        height: 100%;
        width: 100%;
        max-width: 270px;

        > canvas,
        #doughnut-chart {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
        }
    }

</style>