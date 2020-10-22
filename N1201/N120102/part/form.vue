<template>
  <div>
    <ta-card title="审核意见" :bordered="false" >
      <ta-form :autoFormCreate="(form)=>{this.formChk = form}" :form-layout="true" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <auditcomponnet />
      </ta-form>
    </ta-card>
    <ta-form :autoFormCreate="(form)=>{this.form = form}" :form-layout="true" :labelCol="labelCol" :wrapperCol="wrapperCol" >
      <ta-col>
        <medicalDirectory ref="Directory" :transmit="record" disabled/>
      </ta-col>
      <ta-card title="限价信息"
               showExpand
               :bordered="false">
        <ta-table :columns="hilistLmtprcEvtColumns" :dataSource="hilistLmtAddDatas" :haveSn="true"
                  :scroll="{x:1600, y:260}"
                  ref="hilistLmtAddTable" bordered size="small"
                  showOverflowTooltip
                  headerTitleNowrap>
        </ta-table>
      </ta-card>
    </ta-form>
  </div>
</template>

<script>
import dicMixin from '@common/js/mixins/dicMixin'
import tables from '@project/component/tables'
import medicalDirectory from '@project/component/medicalDirectory'
import moment from 'moment'
import { renderDate } from '../../../api/common'
import auditcomponnet from '@project/component/auditcomponnet/auditcomponnet'

export default {
  name: 'delForm',
  mixins: [dicMixin],
  components: { medicalDirectory, tables, auditcomponnet },
  props: {
    record: {
      type: Object,
      default: () => { return {} }
    },
    hilistLmtAddDatas: {
      type: Array,
      default: () => { return [] }
    }
  },
  mounted () {
    const { record } = this
    this.form.setFieldsMomentValue(record)
    this.$refs.Directory.showBut = true
  },
  data () {
    return {
      hilistLmtprcEvtColumns: hilistLmtprcEvtColumns
    }
  },
  methods: {
    moment,
    resetFields () {
      // 清空表单
      this.form.resetFields()
      // 重置表格中的数据
      this.hilistLmtAddDatas.forEach(item => {
        item.hilistPricUplmtAmt = 0
        item.overlmtDspoWay = '1'
      })
      // this.$refs.Directory.resetFields()
    },
    validateFields () {
      let flag = true
      this.formChk.validateFields({ force: true }, (errors, values) => {
        if (errors) {
          flag = false
          this.$message.warn('注意审核必填选项!')
        }
      })
      return flag
    },
    getFieldsMomentValue () {
      let formvalue = this.form.getFieldsMomentValue()
      let chk = this.formChk.getFieldsValue()
      formvalue.rchkFlag = chk.auditStas
      formvalue.rchkOpnn = chk.auditMsg
      return formvalue
    }
  }
}

const hilistLmtprcEvtColumns = [
  { title: '医保目录编码', dataIndex: 'hilistCode', align: 'center' },
  { title: '医保目录限价类型', dataIndex: 'hilistLmtpricType', align: 'center', collectionType: 'HILIST_LMTPRC_TYPE' },
  { title: '医保目录超限处理方式', dataIndex: 'overlmtDspoWay', align: 'center', collectionType: 'OVERLMT_DSPO_WAY' },
  { title: '医保目录定价上限金额', dataIndex: 'hilistPricUplmtAmt', align: 'center' },
  { title: '开始日期', dataIndex: 'begndate', align: 'center', customRender: renderDate },
  { title: '结束日期', dataIndex: 'enddate', align: 'center', customRender: renderDate }
]
</script>

<style scoped type="text/less" lang="less">
  .ant-calendar-picker {
    width: 100%
  }

  /deep/ .ant-tabs-nav .ant-tabs-tab-active {
    color: #303133;
  }

  /deep/ .ant-tabs-ink-bar {
    background-color: rgba(0, 0, 0, 0);
  }

  /deep/ .ant-tabs-nav .ant-tabs-tab-active {
    color: #303133;
    font-weight: 900;
  }

  /deep/ .ant-tabs-ink-bar {
    background-color: rgba(0, 0, 0, 0);
  }
</style>
