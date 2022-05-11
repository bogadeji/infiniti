<template>
    <div class="bulk-upload flow">
        <slot />
        <AppBtn v-if="btn">{{ btnText }}</AppBtn>
    </div>
</template>
<script>
import AppBtn from '@/components/app/AppBtn'
export default {
    name: 'BulkUpload',
    data() {
        return {

        }
    },
    props: {
        title: {
            typeof: String,
            default: ""
        },
        info: {
            typeof: String,
            default: ""
        },
        btn: {
            typeof: Boolean,
            default: false
        },
        btnText: {
            typeof: String,
            default: "Browse files to upload"
        }
    },
    components: {
        AppBtn
    }
}
</script>
<style>
    .bulk-upload {
        width: 100%;
        max-width: 100%;
        --flow-space: 0.625rem;
        text-align: center;
        background: #f7f7f9;
        border: 1px dashed #1630C9;
        border-radius: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #56586D;
        padding: 26px 0;
    }
    p.bulk-upload-text {
        margin-bottom: 8px;
    }
    .bulk-upload-text span {
        font-style: normal;
        font-weight: 600;
        color: #1630C9;
    }
</style>