<template>
  <div style="margin: 20px;">
    <h2>Please upload MT103 RJE file to translate</h2>
    <el-upload
      class="upload-demo"
      drag
      accept=".rje"
      :action="apiUrl + '/mt103/batch'"
      :show-file-list="false"
      :on-progress="onProgress"
      :on-success="onSuccess"
      :on-error="onError"
      >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      <div slot="tip" class="el-upload__tip">RJE files with a size less than 2MB.</div>
    </el-upload>
  </div>
</template>

<script>
import { Loading } from 'element-ui'
import { v4 as uuidv4 } from 'uuid'

export default {
  data () {
    return {
      loading: null,
      loadingCount: 0,
      apiUrl: process.env.BASE_API
    }
  },
  methods: {
    onError (error) {
      this.hideLoading()
      this.$message.success('File processing error!')
    },
    onProgress (event) {
      this.loading = true
      this.showLoading()
    },
    onSuccess (response) {
      this.hideLoading()
      this.$message.success('Batch translation is successful!')
      const fileURL = window.URL.createObjectURL(new Blob([response]))
      const fileLink = document.createElement('a')
      const fileName = uuidv4() + '.xml'
      fileLink.href = fileURL
      fileLink.setAttribute('download', fileName)
      document.body.appendChild(fileLink)
      fileLink.click()
    },
    startLoading () {
      this.loading = Loading.service({
        lock: true,
        text: 'Translating...', //可以自定义文字
        spinner:'el-icon-loading',  //自定义加载图标类名
        background: 'rgba(0, 0, 0, 0.5)'  //遮罩层背景色
      })
    },
    endLoading () {
      this.loading.close()
    },
    showLoading () {
      if (this.loadingCount === 0) {
        this.startLoading()
      }
      this.loadingCount += 1
    },
    hideLoading () {
      if (this.loadingCount <= 0) {
        return;
      }
      this.loadingCount -= 1;
      if (this.loadingCount === 0) {
        this.endLoading()
      }
    }
  }
}
</script>
