<template >
  <ta-border-layout layout-type="fixTop" id="container">
    <ta-card showExpand :bordered="false" slot="header">
      <ta-form :autoFormCreate="(form) => {this.form = form}" :form-layout="true" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <medicalDirectory v-model="Directory" ref="Directory"/>
        <div class="search-btn">
          <ta-button class="but_spacing" @click="resetForm">重置</ta-button>
          <ta-button type="primary" @click="queryAll" :disabled="datPermission">查询</ta-button>
        </div>
      </ta-form>
    </ta-card>
    <ta-card title="目录限价待审核信息" :bordered="false" class="fit">
      <batchauditcomponnet v-model="auditStatus" :requiredChkMemo="true" @change="suerAudit" slot="extra" ></batchauditcomponnet>
      <tables
        :scroll="{ x: 1900,y: '100%'}"
        :rowSelection="rowSelection"
        :columns="hilistLmtprcEvtCDTO"
        :dataSource.sync="hilistLmtprcEvtCDataSource"
        :operateMenu="operateMenu"
        :params="myPageParams"
        url="/web/hilistLmtpricInst/unRckList"
        ref="gridPager">
      </tables>

    </ta-card>
    <div id="conter">
      <ta-drawer
        width=90%
        placement="right"
        :closable="false"
        :maskClosable="false"
        @close="onClose"
        :visible="addVisible"
        getContainer="#container"
        style="height: calc(100% - 55px);overflow: auto;paddingBottom: 53px"
        :destroyOnClose="true">
        <del-form :record='record'
                  :Directory="Directory"
                  :hilistLmtAddDatas="hilistLmtAddDatas"
                  ref="form"></del-form>
        <template slot="footer">
          <ta-row type="flex" justify="end" class="btn_group_R100">
              <ta-button @click="onClose">关闭</ta-button>
              <ta-button type="primary" @click="handleAuditPass()">提交</ta-button>
          </ta-row>
        </template>
      </ta-drawer>
    </div>
  </ta-border-layout>
</template>
<script>
import moment from 'moment'
import delForm from './part/form'
import dicMixin from '@common/js/mixins/dicMixin'
import medicalDirectory from '@project/component/medicalDirectory'
import tables from '@project/component/tables'
import { checkDatePermission, noPageBeanTip, renderDate, success } from '../../api/common'
import batchauditcomponnet from '@project/component/auditcomponnet/batchauditcomponnet'

export default {
  components: { delForm, medicalDirectory, tables, batchauditcomponnet },
  mixins: [dicMixin],
  data () {
    return {
      datPermission: true,
      nodeNo: '',
      taskId: '',
      Directory: {},
      auditVisible: false,
      format: 'YYYY-MM-DD',
      addVisible: false,
      record: {},
      hilistLmtprcEvtCDataSource: [],
      hilistLmtprcEvtCDTO: hilistLmtprcEvtCDTO,
        hilistLmtAddDatas: [],
      // 行选择配置
      rowSelection: {
        // 控制选项的属性需要和 onChange 进行配合
        selectedRowKeys: [],
        selectedRowList: [],
        // 行选择改变事件
        onChange: this.onSelectChange
      },
      operateMenu: [
        {
          name: '审核',
          onClick: (record) => {
            Base.submit(null, {
              url: 'web/hilistLmtpricEvt/list',
              data: { ...record }
            }).then((data) => {
              this.hilistLmtAddDatas = data.data.pageBean.data
              this.addVisible = true
              this.record = record
            })
          }
        }
      ],
      auditStatus: {
        listLength: 0
      }
    }
  },
  mounted: function () {
    checkDatePermission().then(() => {
      this.datPermission = false
    })
    this.nodeNo = this.$route.query.nodeNo
    if (this.$route.query.data) {
      let data = JSON.parse(this.$route.query.data)
      this.taskId = data.taskId
    }
  },
  methods: {
    moment,
    onSelectChange (key, list) {
      this.rowSelection.selectedRowKeys = key
      this.rowSelection.selectedRowList = list
      this.auditStatus.listLength = list.length
    },
    // 重置表单
    resetForm () {
      location.reload()
    },
    // 查询参数封装
    myPageParams () {
      let myPageParams = { ...this.Directory }
      myPageParams.nodeNo = this.nodeNo
      myPageParams.taskId = this.taskId
      myPageParams.rchkFlagCollection = ['0']
      return myPageParams
    },
    queryAll (tips = true) {
      this.hilistLmtprcEvtCDataSource = []
      this.auditStatus.listLength = 0
      this.$refs.gridPager.loadData(tips ? noPageBeanTip : undefined)
    },
    // 关闭抽屉
    onClose () {
      this.record = {}
      this.$refs.form.resetFields()
      this.addVisible = false
    },
    // 审核
    handleAuditPass () {
      if (!this.$refs.form.validateFields()) { return }
      let param = this.$refs.form.getFieldsMomentValue()
      let record = JSON.parse(JSON.stringify(this.record))
      record.rchkFlag = param.rchkFlag
      record.rchkOpnn = param.rchkOpnn
      let rows = []
      rows.push(record)
      Base.submit(null, {
        url: '/web/hilistLmtpric/reCheck',
        data: {
          jsonStr: JSON.stringify(rows)
        }
      }).then((data) => {
        this.addVisible = false
        success('医保目录[' + record.hilistName + ']审核成功!')
        this.queryAll(false)
      })
    },
    suerAudit (val) {
      if (val.flag == 1) { // 点击确定
        this.$confirm({
          title: '提示：',
          content: '确定审核共【' + this.rowSelection.selectedRowList.length + '】条数据?',
          okText: '确定',
          okType: 'primary',
          cancelText: '取消',
          onOk: () => {
            let rows = JSON.parse(JSON.stringify(this.rowSelection.selectedRowList))
            for (let index in rows) {
              rows[index].rchkFlag = val.auditStas
              rows[index].rchkOpnn = val.auditMsg
            }
            Base.submit(null, {
              url: '/web/hilistLmtpric/reCheck',
              data: {
                jsonStr: JSON.stringify(rows)
              }
            }).then((data) => {
              success('批量审核成功!')
              this.queryAll(false)
            })
          }
        })
      }
    }
  },
  watch: {
    $route () {
      this.$router.go(0)
    },
    Directory: {
      handler: function (val, old) {
        if (val && val.hilistName) {
          this.queryAll()
        }
      }
    }
  }
}
const hilistLmtprcEvtCDTO = [
  { title: '审核状态', dataIndex: 'rchkFlag', width: 150, align: 'center', collectionType: 'RCHK_FLAG' },
  { dataIndex: 'evtType', title: '维护类型', align: 'center', width: 80, collectionType: 'EVT_TYPE' },
  { title: '医疗目录编码', dataIndex: 'hilistCode', width: 220, align: 'center' },
  { title: '医保目录名称', dataIndex: 'hilistName', width: 220, align: 'center' },
  { title: '开始日期', dataIndex: 'begndate', width: 120, align: 'center', customRender: renderDate },
  { title: '结束日期', dataIndex: 'enddate', width: 120, align: 'center', customRender: renderDate },
  { title: '医疗收费项目类别', dataIndex: 'medChrgitmType', width: 160, align: 'center', collectionType: 'MED_CHRGITM_TYPE' },
  { title: '目录甲乙类标识', dataIndex: 'chrgitmLv', width: 120, align: 'center', collectionType: 'CHRGITM_LV' },
  { title: '限制使用标志', dataIndex: 'lmtUsedFlag', width: 100, align: 'center', collectionType: 'LMT_USED_FLAG' },
  { title: '目录类别', dataIndex: 'listType', width: 140, align: 'center', collectionType: 'LIST_TYPE' },
  { title: '医疗使用标志', dataIndex: 'medUseFlag', width: 100, align: 'center', collectionType: 'MED_USE_FLAG' },
  { title: '生育使用标志', dataIndex: 'matnUsedFlag', width: 100, align: 'center', collectionType: 'MATN_USE_FLAG' },
  { title: '医保目录使用类别', dataIndex: 'hilistUseType', width: 140, align: 'center', collectionType: 'HILIST_USE_TYPE' },
  { title: '限复方使用类型', dataIndex: 'lmtCpndType', width: 120, align: 'center', collectionType: 'LMT_CPND_TYPE' },
  { dataIndex: 'action', title: '操作', width: 120, align: 'center', scopedSlots: { customRender: 'action' }, fixed: 'right' }
]
</script>

<style scoped type="text/scss">

</style>
