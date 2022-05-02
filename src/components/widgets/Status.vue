<template>
    <div
        :class="status"
        class="status d-flex align-center justify-center"
    >
        <span>
            {{ status }}
        </span>
    </div>
</template>
<script>
export default {
    name: 'StatusCapsule',
    data() {
        return {

        }
    },
    props: {
        status: {
            typeof: 'String',
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .status {
        width: 100%;
        height: 18px;
        border-radius: 10px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 8px;
        line-height: 9px;
        text-align: center;

        &.completed {
            background: #1630C9;
            color: #fff;
        }
        &.pending {
            background: #D7DAE1;
            color: #000;
        }
        &.declined {
            background: #272262;
            color: #fff
        }
    }
</style>