<template>
    <div class="details-card">
        <div>
            <h1 class="details-card__title">{{ title }}</h1>
            <p class="details-card__info mb-1">{{ info }}</p>
        </div>
        <slot />
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    props: {
        title: {
            typeof: String,
            required: true
        },
        info:{
            typeof: String,
            required: false
        }
    }
}
</script>
<style scoped>
    .details-card {
        max-width: 420px;
        padding: 2rem 3rem;
        margin: auto;
        background: #FFFFFF;
        box-shadow: 0px 4px 50px rgba(86, 88, 109, 0.1);
        border-radius: 5px;
        text-align: left;
    }
    .details-card__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #121826;
    }
    .details-card__info {
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: #56586D;
        background: #fff
    }
    .details__content {
        border-top: 1px solid rgba(86, 101, 109, 0.15);
        padding: 20px 0;
    }
    .details__heading {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 10px;
        line-height: 11px;
        color: #1630C9;
        text-transform: uppercase;
    }
    .details__subheading {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #56586D;
    }
    .details__info {
        margin-bottom: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #56586D;
    }
</style>