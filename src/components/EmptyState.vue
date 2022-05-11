<template>
    <v-container id="empty-state">
        <div class="flow">
            <div v-if="imgUrl" class="empty-state--img">
                <img :src="require('../assets/vector/' + imgUrl + '.svg')"  />
            </div>
            <div>
                <p class="empty-text" v-if="message">{{ message }}</p>
                <slot />
            </div>
            <AppBtn class="empty-btn" v-if="btn" :to="to">{{ btnMsg }}</AppBtn>
        </div>
    </v-container>
</template>

<script>
import AppBtn from '../components/app/AppBtn';

export default {
    name: "EmptyState",
    data () {
        return {
            imgUrl: this.emptyStateData.imgUrl || 'empty-icon',
            message: this.emptyStateData.message || null,
            btn: this.emptyStateData.btn,
            btnMsg: this.emptyStateData.btnMsg || null,
            to: this.emptyStateData.btnLink || ''
        }
    },
    components: {
        AppBtn
    },
    props: {
        emptyStateData: {
            type: Object,
            default: () => {}
        },

    }
}

</script>

<style lang="scss">
    #empty-state {
        
        div.flow {
            margin: 100px auto;
        }
        .empty-state--img {
            width: 150px;
            height: 150px;
            margin: 0 auto;

            img {
                width: 100%;
                max-width: 100%;
            }
        }
        p {
            margin-bottom: 10px;
            &.empty-text {
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                color: #121826;
            }
        }
        p + p {
            font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                color: #121826;
        }
        

            // &:not:first-child {
            //     font-weight: 400;
            //     font-size: 12px;
            //     line-height: 14px;
            //     text-align: center;
            //     color: #121826;
            // }
        // }
        
    }
</style>