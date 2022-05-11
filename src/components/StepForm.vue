<template>
    <div class="step-form">
        <div>
        <ul class="tabs__header">
            <li
                v-for="(tab) in tabs" 
                :key="tab.title"
                class="tabs__segment"
                :class="{'is-active': tab.isActive }"
            >
                <span class="tabs__marker"><i class="mdi mdi-circle"></i></span>
                <div class="tabs__content">{{ tab.title }}</div>
            </li>
        </ul>
        <div class="tab__form">
            <slot></slot>
        </div>
        <br/>
        <div class="d-flex justify-space-between">
            <div
                class="control"
                :disabled="currentActive > 0"
            >
                <button
                    @click="previousTab()"
                    class="btn previous-tab"
                    :disabled="currentActive <= 0"
                >
                    Previous
                </button>
            </div>
            <div
                class="control"
                v-if="currentActive <= totalTabs - 1"
            >
                <button
                    @click="nextTab()"
                    class="btn next-tab"
                    color="primary"
                    :disabled="currentActive == totalTabs - 1"
                >
                    Next
                </button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
// import button from '@/components/app/button'
export default {
    data() {
        return {
            currentActive: 0,
            tabs: [],
            totalTabs: 0,
        }
    },
    created() {
        this.tabs = this.$children
    },
    mounted() {
        // this.selectTab(0)
        this.totalTabs = this.tabs.length
    },
    methods: {
        selectTab (activeTab, tabs) {
            // loop over all the tabs
            tabs.forEach(tab => {
                tab.isActive = false
            })
            tabs[activeTab].isActive = true;   
        },
        previousTab() {
            this.currentActive--;
            this.selectTab(this.currentActive, this.tabs)
        },
        nextTab() {
            this.currentActive++;
            this.selectTab(this.currentActive, this.tabs)
        }
    }
}
</script>
<style scoped>
    .step-form .tabs__header {
        display: flex;
        align-items: center;
        margin: 30px auto 0;
        width: 600px;
    }
    .step-form .tabs__header .tabs__segment {
        display: block;
        list-style: none;
        position: relative;
        flex-basis: 1rem;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
    }
    .step-form .tabs__header .tabs__segment .tabs__content {
        font-weight: 400;
        font-size: 8px;
        line-height: 9px;
        margin: 10px 0;
        text-align: center;
        color: rgba(18, 24, 38, 0.5);
        text-transform: uppercase;
    }
    .step-form .tabs__header .tabs__segment .tabs__content {
        color: #121826;
    }
    .tabs__segment.is-active~.tabs__segment .tabs__content {
        color: rgba(18, 24, 38, 0.5);
    }
    .step-form .tabs__header .tabs__segment:not(:last-child)::after {
        left: calc(50% + 12px);
        right: -50%;
        height: 1px;
        top: calc(1rem - 1px);
        content: "";
        display: block;
        position: absolute;
    }
    .tabs__segment::after {
        background:  #1630C9;
    }
    .tabs__segment.is-active:after,
    .tabs__segment.is-active~.tabs__segment:after {
        background:  rgba(22, 48, 201, 0.25);
    }
    .step-form .mdi::before {
        border-radius: 50%;
        font-size: 10px;
        height: 24px;
        width: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .step-form .completed.mdi::before,
    .step-form .mdi::before,
    .step-form .tabs__segment.is-active .mdi::before {
        color: #fff;
        border: 1px solid #1630C9;
        background: #1630C9;
    }
    
    .step-form .inactive.mdi::before,
    .tabs__segment.is-active~.tabs__segment .mdi::before {
        background: #FFFFFF;
        border: 1px solid rgba(22, 48, 201, 0.25);
        color: rgba(22, 48, 201, 0.25);
    }
    .control .btn {
        border-radius: 5px;
        height: 40px;
        width: 100px;
        font-size: 14px;
        line-height: 16px;
    }
    .control .btn.previous-tab {
        background: #fff;
        color: #56586D;
        border: 1px solid #919AAB;
    }
    .control .btn.next-tab {
        background: #1630C9;
        color: #fff;
        border: 1px solid #1630C9;
    }
</style>