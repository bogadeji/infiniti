<template>
    <div
        class="filters mx-2"
        id="filter-by-date--btn"
    >
        <v-btn 
            v-on:click="show=!show"
            outlined 
            id="filter-by-date"
            color="primary"
        >
            {{ listItem}}
            <i v-if="!show" class="mdi mdi-chevron-down dropdown--select"></i>
            <i v-if="show" class="mdi mdi-chevron-up dropdown--select"></i>
        </v-btn>
        <div class="dropdown--list" v-if="show">
            <ul v-for="(list, index) in dropdownList" :key="index">
                <li class="list--item" v-on:click="selectListItem(list)">
                    {{ list }}
                </li>
            </ul>
            <ul id="custom">
                <li v-on:click="selectListItem('custom')">
                    <p>Custom</p>
                    <div class="from date-picker">
                        <label for="from">From</label>
                        <input type="date" id="from" name="from" v-model="from">
                    </div>
                    <div class="to date-picker">
                        <label for="to date-picker">To</label>
                        <input type="date" id="to" name="to" v-model="to">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FilterByDate',
    data() {
        return {
            show: false,
            from: '',
            to: '',
            listItem: 'Filter By Date'
        }
    },
    props: {
        dropdownList: {
            typeof: Array,
            default: () => []
        },
    },
    methods: {
        selectListItem(item) {
            if(item === 'custom') {
                this.listItem = `${this.from} - ${this.to}`
            } else {
                this.listItem = item
            }
        }
    }
}
</script>
<style lang="scss">
    .filters {
        position: relative;

        .v-btn:not(.v-btn--round).v-size--default {
            height: 24px;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 11px;
            &:hover,
            &:focus,
            &:focus-within,
            &:active {
                background: #1630C9;
                .v-btn__content {
                    color: #fff
                }
            }
        }

        i.mdi {
            font-size: 20px;
        }

        .dropdown--list {
            background: #fff;
            box-shadow: 0px 4px 25px rgba(86, 88, 109, 0.2);
            border-radius: 5px;
            padding: 10px 0 14px;
            position: absolute;
            min-width: 100%;
            width: 120px;
            margin-top: 10px;
            z-index: 10;

            &:after{
                content:'';
                position: absolute;
                top: 0;
                margin-left: -10px;
                margin-top:-10px;
                width: 0;
                z-index:1;
                height: 0;
                border-bottom: solid 10px #FFF;
                border-left: solid 10px transparent;
                border-right: solid 10px transparent;
            }

            ul {
                width: 100%;
                text-align: left;
                padding: 0;

                &#custom {
                    border-top: 1px solid rgba(86, 88, 109, 0.1);

                    div.date-picker {
                        color: #1630C9;
                        display: flex;
                        align-content: center;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 8px;
                        line-height: 9px;
                        border: 1px solid #1630C9;
                        border-radius: 3px;
                        margin: 21px 0;
                        &:where(:last-child) {
                            margin-bottom: 0;
                        }

                        label {
                            padding: 4px 7px 6px 7px;
                            background: #EDF1F8;
                            border-radius: 3px 0 0 3px;
                            width: 30px;
                        }
                    }
                    
                    input[type="date"] {
                        border: none;
                        outline: none;
                        color: inherit;

                        &:hover,
                        &:focus,
                        &:focus-within,
                        &:active {
                            border: none;
                            outline: none;
                        }
                        &::before {
                            color: #1630C9;
                            content: '\F0E18';
                            margin: 0 4px;
                            font: normal normal normal 24px/1 "Material Design Icons";
                            font-size: inherit;
                            text-rendering: auto;
                            line-height: inherit;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                        }
                        &::-webkit-calendar-picker-indicator {
                            background: transparent;
                            bottom: 0;
                            color: transparent;
                            cursor: pointer;
                            height: auto;
                            left: 0;
                            position: absolute;
                            right: 0;
                            top: 0;
                            width: auto;
                        }
                    }
                }
            }

            li {
                width: 100%;
                padding: 6px 10px;
                list-style: none;
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                line-height: 11px;
                color: #56586D;

                &:hover {
                    background: #f7f7f7;
                    color: #1630C9;
                }
            }
        }
    }

</style>