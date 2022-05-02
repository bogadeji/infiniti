<template>
    <v-container id="empty-state">
        <div class="">
            <div v-if="imgUrl" class="empty-state--img">
                <!-- <v-img v-if="imgUrl" :src="imgUrl" alt="" class="empty-img"/> -->
                <!-- <v-img
                    v-if="imgUrl"
                    :src="imgUrl"
                    class="my-3"
                    contain
                    height="200"
                /> -->
                <img :src="require('../assets/vector/' + imgUrl + '.svg')"  />
            </div>
            <p class="empty-text">You do not have any {{ resource | pluralize }} yet</p>
            <slot />
            <AppBtn class="empty-btn" v-if="btn">Create new {{ resource }}</AppBtn>
        </div>
    </v-container>
</template>

<script>
import AppBtn from '../components/app/AppBtn';

export default {
    name: "EmptyState",
    data () {
        return {

        }
    },
    components: {
        AppBtn
    },
    props: {
        imgUrl: {
            type: String,
            default: null
        },
        resource: {
            type: String,
            default: null
        },
        btn: {
            type: Boolean,
            default: false
        }

    }
}

</script>

<style lang="scss">
    #empty-state {
        position: fixed;
        transform: translate(0%, 30%);
        
        div {
            height: 500px;
            flex-direction: column;
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