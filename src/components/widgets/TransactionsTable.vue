<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="transactions-table"
    >
        <template v-slot:[`item.status`]="{ item }">
            <Status :status="item.status" />
        </template>
    </v-data-table>
</template>
<script>
import Status from '@/components/widgets/Status'

export default {
    data() {
        return {

        }
    },
    components: {
        Status
    },
    props: {
        headers: {
            type: Array,
            default: () => {}
        },
        items: {
            type: Array,
            default: () => {}
        }
    }
}
</script>
<style lang="scss">
    th {
        text-transform: uppercase;
        font-weight: 700;
        font-weight: bolder;
        font-size: 10px;
        line-height: 22px;
        color: #56586D !important;
    }
    td {
        color: #56586D !important;
    }
    .transactions-table {
        &.theme--light.v-data-table {
            .v-data-table__wrapper {
                table tbody {
                    tr {
                        &:not(:last-child) {
                            td:not(.v-data-table__mobile-row) {
                                border-color: rgba(86, 88, 109, 0.1) !important;
                            }
                        }
                        td {
                            font-weight: 400;
                            font-size: 10px;
                            line-height: 22px;
                        }
                    }
                }
            }
        }
        tbody {
            tr {
                height: 54px;
                border-color: rgba(86, 88, 109, 0.1) !important;
                &:nth-child(2n+1) {
                    background: #F7F7F9;
                }

                
            }
        }
    }
</style>