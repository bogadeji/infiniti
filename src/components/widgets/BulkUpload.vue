<template>
    <div class="bulk-upload flow">
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" class="input-file">
            <p v-if="isInitial">
              <slot></slot>
            </p>
            <p v-if="isSaving">
              <span>Uploading {{ fileCount }} file{{ fileCount == 1 ? '' : 's' }}...</span>
            </p>
            
            <BaseBtn v-if="btn" :disabled="isSaving">{{ btnText }}</BaseBtn>
        </div>
        
      </form>
  <!-- </div> -->
    </div>
</template>
<script>
import BaseBtn from '@/components/base/BaseBtn'

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
    name: 'BulkUpload',
    data() {
        return {
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            uploadFieldName: 'photos'
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
        BaseBtn
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      }
    },
    methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
        console.log(formData)
        // upload(formData)
        //   .then(x => {
        //     this.uploadedFiles = [].concat(x);
        //     this.currentStatus = STATUS_SUCCESS;
        //   })
        //   .catch(err => {
        //     this.uploadError = err.response;
        //     this.currentStatus = STATUS_FAILED;
        //   });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        // save it
        this.save(formData);
      }
    },
    mounted() {
      this.reset();
    },
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
        /* padding: 26px 0; */
    }
    p.bulk-upload-text {
        margin-bottom: 8px;
    }
    .bulk-upload-text span {
        font-style: normal;
        font-weight: 600;
        color: #1630C9;
    }
    .input-file {
        opacity: 0; /* invisible but it's there! */
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        cursor: pointer;
        z-index: 10;
    }
    .dropbox {
        position: relative;
        padding: 26px 0;
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    .dropbox:hover {
        background: lightblue; /* when mouse over to the drop zone, change color */
    }

</style>