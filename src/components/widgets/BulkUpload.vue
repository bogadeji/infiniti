<template>
    <div class="bulk-upload flow">
        <p class="bulk-upload-text">Or bulk upload users from <span>csv</span> or <span>xls</span> file</p>
        <AppBtn>Browse files to upload</AppBtn>
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
    components: {
        AppBtn
    }
}
</script>
<style>
    .bulk-upload {
        width: 100%;
        max-width: 100%;
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
    .bulk-upload-text span {
        font-style: normal;
        font-weight: 600;
        color: #1630C9;
    }
</style>