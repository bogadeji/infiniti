<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="transactions-table"
    >
        <!-- <template v-slot:[`item.status`]="{ item }">
            <Status :status="item.status" />
        </template>
        
            <v-dialog v-model="viewDetails" max-width="300px">
                <template v-slot:activator="{ on, attrs }">
                    <button v-bind="attrs" v-on="on" @click.stop="viewDetails = true">View details</button>
                </template>
                <v-card>

                    <v-card-title class="text-h6">Transaction details</v-card-title>
                    <v-divider></v-divider>
                        <p>{{ item.sequence }}</p>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <BaseBtn color="" text @click.stop="viewDetails = false">Close</BaseBtn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <template v-slot:[`item.actions`]="{ item}">
            <v-icon
                small
                class="mr-2"
                @click="showMore(item)"
            >
                mdi-dots-vertical
            </v-icon>
            <button @click="showMore(item)">View details</button>
        </template> -->
        
        <template v-slot:[`item.status`]="{ item }">
                    <Status :status="item.status" />
                </template>
        <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-dialog
                    v-model="viewDetails"
                    max-width="300px"
                >
                <!-- <template v-slot:activator="{ on, attrs }">
                    <BaseBtn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                    >
                        
                    </BaseBtn>
                </template> -->
                <v-card class="p-5 transaction__details">
                    
                    <v-spacer></v-spacer>
                    <v-card-title class="text-h6">Transaction details</v-card-title>
                    <v-divider></v-divider>
                    <div class="py-3">
                        <div class="details">
                            <p class="details__title">Sequence</p>
                            <p class="details__text">{{ viewedItem.sequence }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Ref</p>
                            <p class="details__text">{{ viewedItem.sequence }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Agent</p>
                            <p class="details__text">{{ viewedItem.agent }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Terminal</p>
                            <p class="details__text">{{ viewedItem.terminal }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Channel</p>
                            <p class="details__text">{{ viewedItem.channel }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Amount</p>
                            <p class="details__text">{{ viewedItem.amount }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Status</p>
                            <p class="details__text">{{ viewedItem.status }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Date</p>
                            <p class="details__text">{{ viewedItem.sequence }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Time</p>
                            <p class="details__text">{{ viewedItem.sequence }}</p>
                        </div>
                        <div class="details">
                            <p class="details__title">Issuer</p>
                            <p class="details__text">{{ viewedItem.issuer }}</p>
                        </div>
                    </div>
                    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <BaseBtn color="primary" width="60%" @click.stop="viewDetails = false">Close</BaseBtn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    
                    <v-spacer></v-spacer>
                </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item}">
        <v-icon
          small
          class="mr-2"
          @click="showMore(item)"
        >
          mdi-dots-vertical
        </v-icon>
      </template>
    </v-data-table>
</template>
<script>
import Status from '@/components/widgets/Status'
import BaseBtn from '@/components/base/BaseBtn'

export default {
    data() {
        return {
            viewDetails: false,
            viewedItem: {}
        }
    },
    components: {
    Status,
    BaseBtn,
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
    },
    methods: {
        showMore(item) {
            this.viewDetails = true
            this.viewedItem = Object.assign({}, item)
        },
        close () {
            this.viewDetails = false
            this.viewedItem = Object.assign({}, {})
        },
    },
    watch: {
      viewDetails (val) {
        val || this.close()
      },
    },
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
.transaction__details.v-card.v-sheet.theme--light {
        padding: 1.5rem 2rem;

        .v-card__title {
            padding: 0 0 0.4rem;
        }
        .details {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 15px;
            text-align: left;
            margin: 0.5rem 0;

          .details__title {
            font-weight: 500;
            font-size: 11px;
            line-height: 13px;
            color: #56586D;
            margin: 0;
          }

          .details__text {
            font-weight: 600;
            font-size: 13px;
            line-height: 22px;
            color: #121826;
            margin: 0;
            text-transform: capitalize;
          }
        }
    }
</style>