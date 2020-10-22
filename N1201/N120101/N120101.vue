<template>
  <ta-border-layout layout-type="fixTop" id="container">
    <ta-card showExpand :bordered="false" slot="header">
      <ta-form :autoFormCreate="(form) => {this.form = form}" :labelCol="labelCol" :wrapperCol="wrapperCol" form-layout>
        <medicalDirectory v-model="Directory" ref="Directory" :required="true"/>
        <div class="search-btn">
          <ta-button class="but_spacing" @click="resetForm">重置</ta-button>
          <ta-button type="primary" @click="queryAll" :disabled="datPermission">查询</ta-button>
        </div>
      </ta-form>
    </ta-card>
    <ta-card title="医保目录限价申请信息" :bordered="false" expand="false" class="fit">
      <div slot="extra">
        <div class="search-btn">
          <ta-button @click="stopMedInsInfo" type="primary" :disabled="datPermission">停用</ta-button>
        </div>
        <div class="search-btn">
          <ta-button @click="updateMedInsInfo" type="primary" :disabled="datPermission">维护</ta-button>
        </div>
        <div class="search-btn">
          <ta-button type="success" @click="addMedInsInfo" :disabled="datPermission">新增</ta-button>
        </div>
      </div>
      <tables
        :scroll="{ x: 1600,y: '100%'}"
        :columns="hilistLmtprcEvtColumns"
        :dataSource.sync="hilistLmtprcDataSource"
        :operateMenu="operateMenu"
        :params="myPageParams"
        url="/web/hilistLmtpricInst/list"
        ref="gridPager1">
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
                  :componet="componet"
                  :showOpForm="showOpForm"
                  :Directory="Directory"
                  :hilistLmtAddDatas="hilistLmtAddDatas"
                  :lookFlag="lookFlag"
                  ref="form"></del-form>
        <template slot="footer">
          <ta-button @click="onClose">关闭</ta-button>
          <ta-button @click="hanleRest">重置</ta-button>
          <ta-button type="primary" v-show="!showDetail" @click="commitInfo">提交</ta-button>
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
import { checkDatePermission, noPageBeanTip, renderDate, getPageBeanSize, success } from '../../api/common'

export default {
  components: { delForm, medicalDirectory, tables },
  mixins: [dicMixin],
  data () {
    return {
      lookFlag: false,
      actionType: '',
      datPermission: true,
      componet: false,
      showDetail: false,
      Directory: {},
      format: 'YYYY-MM-DD',
      addVisible: false,
      showAddtable: false,
      showOpForm: false,
      record: {},
      hilistLmtprcDataSource: [],
      hilistLmtAddDatas: [],
      hilistLmtprcEvtColumns: hilistLmtprcEvtColumns,
      operateMenu: [
        {
          name: '查看',
          onClick: (record) => {
            Base.submit(null, {
              url: 'web/hilistLmtpricEvt/list',
              data: { ...record, pageSize: 100, pageNum: 1 }
            }).then((data) => {
              this.hilistLmtAddDatas = data.data.pageBean.data
              this.addVisible = true
              this.showDetail = true
              this.componet = true
              this.showAddtable = true
              this.showOpForm = false
              this.lookFlag = true
              this.$nextTick(() => {
                this.$refs.form.showDirectoryBut(true)
              })
            })
          }
        },
        {
          name: '撤销',
          type: 'confirm',
          confirmTitle: '确认撤销该信息？',
          isShow: (record) => record.rchkFlag == 0,
          onOk: (record, index) => {
            Base.submit(null, {
              url: 'web/hilistLmtpricEvt/updateByInst',
              data: { ...record },
              autoQs: false
            }).then((data) => {
              success('撤销成功!')
              // 成功回调
              this.queryAll(false)
            })
          }
        }
      ]
    }
  },
  mounted: function () {
    this.CollectionData('HILIST_LMTPRC_TYPE')
    this.CollectionData('OVERLMT_DSPO_WAY')
    checkDatePermission().then(() => {
      this.datPermission = false
    })
  },
  methods: {
    moment,
    // 重置表单
    resetForm () {
      location.reload()
    },
    // 查询参数封装
    myPageParams () {
      let myPageParams = { ...this.Directory }
      myPageParams.nodeNo = 'mbs-n12010102'
      myPageParams.rchkFlagCollection = ['0', '1']
      return myPageParams
    },
    // 按条件查询专家基本信息
    queryAll (tips = true) {
      this.hilistLmtprcDataSource = []
      if (!this.$refs.Directory.validateFields()) {
        return
      }
      if (!this.Directory.hilistName) {
        this.$message.info('请先查询医保目录编码')
        return
      }
      // 调用分页条方法查询数据（默认查询第一页）
      this.$refs.gridPager1.loadData(tips ? noPageBeanTip : undefined)
    },
    hanleRest () {
      this.$refs.form.resetFields()
    },
    // 新增弹窗
    addMedInsInfo () {
      if (!this.Directory.hilistName) {
        this.$message.info('请先查询医保目录')
        return
      }
      let { hilistCode, insuAdmdvs } = this.Directory
      let param = { hilistCode, insuAdmdvs, pageSize: 1, pageNum: 1 }
      Base.submit(null, {
        url: 'web/hilistLmtpric/list',
        data: param
      }).then((data) => {
        if (getPageBeanSize(data) > 0) {
          this.$message.warning('当前医保目录限价信息已经存在，不能新增')
          return
        }
        this.showAddtable = true
        this.componet = true
        this.addVisible = true
        this.showDetail = false
        this.record = {}
        this.showOpForm = true
        this.actionType = '01'
        this.hilistLmtAddDatas = []
        let lmtType = this.CollectionData('HILIST_LMTPRC_TYPE')
        let lmtWay = this.CollectionData('OVERLMT_DSPO_WAY')
        for (let index in lmtType) {
          let row = {
            insuAdmdvs: this.Directory.insuAdmdvs,
            hilistCode: this.Directory.hilistCode,
            hilistLmtpricType: lmtType[index].value,
            overlmtDspoWay: lmtWay[0].value,
            hilistPricUplmtAmt: 0,
            begndate: this.moment().format('YYYY-MM-DD'),
            enddate: ''
          }
          this.hilistLmtAddDatas.push(row)
        }
        this.$nextTick(() => {
          this.$refs.form.showDirectoryBut(false)
        })
      })
    },
    // 修改弹窗
    updateMedInsInfo () {
      if (!this.Directory.hilistName) {
        this.$message.info('请先查询医保目录')
        return
      }
      let lmtType = this.CollectionData('HILIST_LMTPRC_TYPE')
      let lmtWay = this.CollectionData('OVERLMT_DSPO_WAY')
      this.record = {}
      this.hilistLmtAddDatas = []
      Base.submit(null, {
        url: 'web/hilistLmtpric/list',
        data: { ...this.Directory }
      }).then((data) => {
        if (data.data.pageBean.data.length == 0) {
          this.$message.warning('不存在待维护的数据，请先新增!')
          return
        }
        this.hilistLmtAddDatas = []
        let tmpdate = []
        let overlmtDspoWay = ''
        // 循环码表
        for (let index in lmtType) {
          let flag = false
          for (let datarow of data.data.pageBean.data) {
            // 数据匹配
            if (datarow.hilistLmtpricType === lmtType[index].value) {
              overlmtDspoWay = datarow.overlmtDspoWay
              datarow.begndate = this.moment().format('YYYY-MM-DD')
              datarow.enddate = ''
              tmpdate.push(datarow)
              flag = true
              break
            }
          }
          // 没有匹配到数据
          if (!flag) {
            let row = {
              insuAdmdvs: this.Directory.insuAdmdvs,
              hilistCode: this.Directory.hilistCode,
              hilistLmtpricType: lmtType[index].value,
              overlmtDspoWay: overlmtDspoWay === '' ? lmtWay[0].value : overlmtDspoWay,
              hilistPricUplmtAmt: 0,
              begndate: this.moment().format('YYYY-MM-DD'),
              enddate: ''
            }
            tmpdate.push(row)
          }
        }
        this.hilistLmtAddDatas = tmpdate
        this.actionType = '02'
        this.showAddtable = true
        this.componet = true
        this.addVisible = true
        this.showDetail = false
        this.showOpForm = true
        this.$nextTick(() => {
          this.$refs.form.showDirectoryBut(false)
        })
      })
    },
    // 停用限价信息弹窗
    stopMedInsInfo () {
      if (!this.Directory.hilistName) {
        this.$message.info('请先查询医保目录')
        return
      }
      this.record = {}
      this.hilistLmtAddDatas = []
      Base.submit(null, {
        url: 'web/hilistLmtpric/list',
        data: { ...this.Directory }
      }).then((data) => {
        if (data.data.pageBean.data.length == 0) {
          this.$message.warning('不存在待停用的数据!')
          return
        }
        this.hilistLmtAddDatas = data.data.pageBean.data
        this.actionType = '03'
        this.showAddtable = true
        this.componet = true
        this.addVisible = true
        this.showDetail = false
        this.showOpForm = false
        this.lookFlag = false
        this.$nextTick(() => {
          this.$refs.form.showDirectoryBut(false)
        })
      })
    },
    // 关闭抽屉
    onClose () {
      this.$refs.form.resetFields()
      this.hilistLmtAddDatas = []
      this.addVisible = false
    },
    // 提交抽屉数据
    commitInfo () {
      let rows = this.hilistLmtAddDatas
      for (let index in rows) {
        if (rows[index].hilistPricUplmtAmt <= 0) {
          this.$message.warning('限价金额必须大于0！')
          return
        }
      }
      let url = '/web/hilistLmtpricEvt/insert'
      this.$confirm({
        cancelText: '关闭',
        title: '提示信息！',
        content: '确认进行保存？',
        onOk: () => {
          Base.submit(null, {
            url: url,
            data: { jsonStr: JSON.stringify(this.hilistLmtAddDatas), actionType: this.actionType }
          }).then((data) => {
            success('保存成功!')
            this.addVisible = false
            this.queryAll(false)
          })
        },
        onCancel: () => {
        }
      })
    }
  },
  watch: {
    Directory: {
      handler: function (val, old) {
        if (val && val.hilistName) {
          this.queryAll()
        }
      }
    }
  }
}

const hilistLmtprcEvtColumns = [
  { dataIndex: 'hilistCode', title: '医保目录编码', align: 'center', width: 220 },
  { dataIndex: 'hilistName', title: '医保目录名称', align: 'center', width: 200 },
  { dataIndex: 'evtType', title: '维护类型', align: 'center', width: 80, collectionType: 'EVT_TYPE' },
  { dataIndex: 'rchkFlag', title: '审核标志', align: 'center', width: 100, collectionType: 'RCHK_FLAG' },
  { dataIndex: 'begndate', title: '开始日期', align: 'center', width: 120, customRender: renderDate },
  { dataIndex: 'enddate', title: '结束日期', align: 'center', width: 120, customRender: renderDate },
  { dataIndex: 'medChrgitmType', title: '医疗收费项目类别', align: 'center', width: 120, collectionType: 'MED_CHRGITM_TYPE' },
  { dataIndex: 'chrgitmLv', title: '目录甲乙类标识', align: 'center', width: 120, collectionType: 'CHRGITM_LV' },
  { dataIndex: 'lmtUsedFlag', title: '限制使用标志', align: 'center', width: 100, collectionType: 'LMT_USED_FLAG' },
  { dataIndex: 'listType', title: '目录类别', align: 'center', width: 140, collectionType: 'LIST_TYPE' },
  { dataIndex: 'medUseFlag', title: '医疗使用标志', align: 'center', width: 100, collectionType: 'MED_USE_FLAG' },
  { dataIndex: 'matnUsedFlag', title: '生育使用标志', align: 'center', width: 100, collectionType: 'MATN_USE_FLAG' },
  { dataIndex: 'hilistUseType', title: '医保目录使用类别', align: 'center', width: 140, collectionType: 'HILIST_USE_TYPE' },
  { dataIndex: 'lmtCpndType', title: '限复方使用类型', align: 'center', width: 120, collectionType: 'LMT_CPND_TYPE' },
  { dataIndex: 'action', title: '操作', width: 120, align: 'center', fixed: 'right', scopedSlots: { customRender: 'action' } }
]
</script>

<style scoped type="text/scss">

</style>
