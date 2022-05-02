<template>
    <div
        class="filters mx-2" 
        id="filter-by-type"
    >
        <v-btn
            outlined
            v-on:click="show=!show"
            id="filter-by-type--btn"
            color="primary"
        >
            Filters <i class="mdi mdi-filter"></i>
        </v-btn>
        
        <div class="dropdown--list" v-if="show">
            <ul v-for="(value, name) in filterList" :key="name">
                <template v-if="value.length <= 1">
                    <li class="list--item">
                        {{ name }}
                    </li>
                </template>
                <template v-else>
                    <li
                        class="list--item"
                        v-on:click="openSublist(name)"
                    >
                        <span>{{ name }}</span>
                        <i v-if="openFilter == name" class="mdi mdi-chevron-up dropdown--select"></i>
                        <i  v-else class="mdi mdi-chevron-down dropdown--select"></i>
                    </li>
                    <ul
                        v-if="openFilter == name"
                    >
                        <li
                             v-for="(item, index) in value"
                            :key="index"
                            class="list--item list--subitem"
                            v-on:click="checkFilter(item)"
                        >   <input type="checkbox" class="mr-4"/>
                            {{ item }}
                        </li>
                    </ul>
                </template>
            </ul>
            <ul >
                <li class="clear-filters list--item">Clear all filters</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FilterByType',
    data() {
        return {
            show: false,
            filters: {},
            openFilter: null
        }
    },
    props: {
        filterList: {
            typeof: Array,
            default: () => []
        },
    },
    methods: {
        openSublist(item) {
            if (this.openFilter === item) {
                this.openFilter = null
            } else {
                this.openFilter = item
            } 
        },
        checkFilter(filter) {
            console.log(filter)
        }
    }
}
</script>
<style lang="scss">
    #filter-by-type {
        #filter-by-type--btn {
            i.mdi {
                font-size: 18px;
            }
        }

        .list--item {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .list--subitem {
            justify-content: flex-start;
        }
        .clear-filters {
            color: rgba(86, 88, 109, 0.5);
        }
    }
</style>