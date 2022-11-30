<template>
  <div style="margin:20px;">
    <div style="margin-top:20px;">
      <el-row :gutter="10">
        <el-col :span="11">
          <div style="font-size:16px;font-weight:bold;margin-bottom:10px;text-align:center;">
            MT103 Single Customer Credit Transfer
          </div>
          <el-input
            type="textarea"
            :rows="27"
            placeholder="MT103"
            v-model="mt103">
          </el-input>
        </el-col>
        <el-col :span="2">
          <div style="display:flex;align-items:center;justify-content:center;height:500px;">
            <el-button
              v-if="!loading"
              type="primary"
              plain
              @click="convert"
            >
              CONVERT
            </el-button>
            <el-button
              v-else
              type="primary"
              plain
              :loading="true"
            >
              loading...
            </el-button>
          </div>
        </el-col>
        <el-col :span="11">
          <div style="font-size:16px;font-weight:bold;margin-bottom:10px;text-align:center;">
            pacs.008.001.08 FIToFICstmrCdtTrf
          </div>
          <el-input
            type="textarea"
            :rows="27"
            placeholder="pacs.008.001.08"
            v-model="pacs"
          >
          </el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import mt103Api from '../api/mt103'

export default {
  name: 'Home',
  data () {
    return {
      mt103: `{1:F01SOGEFRPPAXXX0070970817}
{2:O1031734150713DEUTDEFFBXXX00739698421607131634N}
{3:{103:TGT}{108:OPTUSERREF16CHAR}}
{4:
:20:UNIQUEREFOFTRX16
:23B:CRED
:32A:180724EUR735927,75
:33B:EUR735927,75
:50A:/DE37500700100950596700
DEUTDEFF
:59:/FR7630003034950005005419318
CHARLES DUPONT COMPANY
RUE GENERAL DE GAULLE, 21
75013 PARIS
:71A:SHA
-}
{5:{CHK:D628FE0165A7}}`,
      pacs: '',
      loading: false
    }
  },
  methods: {
    convert () {
      this.loading = true
      if (this.mt103 != '') {
        mt103Api.validate(this.mt103)
          .then(res => {
            if (res.success) {
              mt103Api.convert(this.mt103)
                .then(res => {
                  this.$message.success('Conversion is successful!')
                  this.pacs = res.xml
                  this.loading = false
                })
                .catch(_ => {
                  this.loading = false
                })
            } else {
              this.$message.error(res.message)
              this.loading = false
            }
          })
          .catch(_ => {
            this.loading = false
          })
      } else {
        this.$message.error('MT103 is empty!!')
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
</style>
