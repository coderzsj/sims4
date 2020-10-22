<template>
  <div>

      <ta-card title="查询条件" :bordered="false" :showExpand="false">
        <ta-form layout="horizontal" :autoFormCreate="(form) => {this.searchform = form}" :form-layout="true"
                 :labelCol="BISCONST.LABELCOL"
                 :wrapperCol="BISCONST.WRAPPERCOL">
          <ta-form-item :colon="false" fieldDecoratorId="hilistCode" label="医保目录编码">
            <ta-input/>
          </ta-form-item>
          <ta-form-item :colon="false" fieldDecoratorId="hilistName" label="医保目录名称">
            <ta-input></ta-input>
          </ta-form-item>
          <ta-form-item :colon="false" fieldDecoratorId="listType" label="目录类别" require :initValue="listInitValue">
            <ta-select collection-type="LIST_TYPE" :collectionFilter="collectionFilter" :reverseFilter="reverseFilter"/>
          </ta-form-item>
          <ta-form-item :colon="false" fieldDecoratorId="hilistUseType" label="目录使用类别" initValue="0">
            <ta-select collection-type="HILIST_USE_TYPE" allowClear/>
          </ta-form-item>
          <!--<ta-col :span="8">
            <ta-form-item :colon="false" fieldDecoratorId="insuAdmdvs" label="参保所属医保区划" :labelCol="{span:8}"  :wrapperCol="{span:16}" :required="true">
              <ta-cascader :options="dicType.prntAdmdvs" placeholder="请选择参保所属医保区划"></ta-cascader>
            </ta-form-item>
          </ta-col>-->
          <div style="float:right;margin-bottom: 10px">
            <ta-button @click="searchRest">重置</ta-button>
            <ta-button type="primary" @click="fnSearch">查询</ta-button>
          </div>
        </ta-form>
      </ta-card>
      <ta-card title="医保目录信息" :bordered="false" :showExpand="false">
        <ta-table size="small"
                  bordered
                  :scroll="{ x: 1800, y: 385 }"
                  :columns="tableColumns"
                  :dataSource="tableData"
                  showOverflowTooltip
                  :customRow="fnCustomRow"
                  :rowSelection="rowSelection">
          <template slot="footer" slot-scope="page">
            <ta-pagination
              style="text-align:right;width:100%"
              :showTotal="true"
              :defaultPageSize="10"
              :pageSizeOptions="['10', '20', '40', '100']"
              :dataSource.sync="tableData"
              :params="pageParams"
              :url="URL"
              ref="gridPager"
            />
          </template>
        </ta-table>
        <!--            <ta-pagination class="page_style" :total="total" size="small" hideOnSinglePage showSizeChanger :showQuickJumper="false" :defaultPageSize="pageSize" :pageSizeOptions="pageSizeOptions" @showSizeChange="showSizeChange" @change="pageChange"/>-->
      </ta-card>
      <div slot="footer">
        <ta-button @click="handleCancel">取消</ta-button>
        <ta-button type="primary" @click="handleOk">确定</ta-button>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import dicMixin from '@common/js/mixins/dicMixin'

export default {
  name: 'medicalDirectory',
  mixins: [dicMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 查询绑定值
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 父组件传全量
    transmit: {
      type: Object,
      default: () => {
        return {
          get disabled () {
            return false
          }
        }
      }
    },
    // 用编号默认查询 用户不可编辑
    hilistCode: {
      type: String,
      default: ''
    },
    // 只有查询框
    only: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '医保目录信息'
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    reverseFilter:{
      type: Boolean,
      default: false
    },
    collectionFilter:{
      type: String,
      default: ''
    },
    listInitValue:{
      type: String,
      default: ''
    }
  },
  watch: {
    transmit: {
      handler: function (val, old) {
        if (this.only) { return }
        this.$nextTick(function () {
          this.medform.setFieldsMomentValue(val)
        })
      },
      deep: true,
      immediate: true
    },
    hilistCode: {
      handler: function (val, old) {
        if (val && val.constructor === String) {
          this.$nextTick(function () {
            this.medform.setFieldsMomentValue({ hilistCode: val })
            this.getInfoBycode(val)
          })
        }
      },
      deep: true,
      immediate: true
    },
    value: {
      handler: function (val, old) {
        if (val && val.constructor === Object) {
          this.$nextTick(function () {
            this.medform.setFieldsMomentValue(val)
          })
        }
      },
      deep: true,
      immediate: true
    }
  },
  data () {
    return {
      // URL: '/web/commonquery/getHilistsByCondition',
      URL: 'web/trtCommonquery/queryPlcHiListInfoByPage',
      showBut: false,
      medvisible: false,
      tableData: [],
      tableColumns: tableColumns,
      rowSelection: {
        type: 'radio',
        // 控制选项的属性需要和 onChange 进行配合
        selectedRowKeys: [],
        selectedRowList: [],
        // 行选择改变事件
        onChange: this.onSelectChange
      },
      hilistCodeonly: ''
    }
  },
  computed: {
    pageTableData: function () {
      return this.tableData.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
    },
    isSearch(){
      return this.disabled
    }
  },
  methods: {
    moment,
    // 当用户输入时 向外暴露改变的值
    getValue (val) {
      // todo 可能存在bug，不知道这样设计的意义
      // this.$nextTick(() => {
      //   this.$emit('change', this.getParam())
      // })
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.rowSelection.selectedRowKeys = selectedRowKeys
      this.rowSelection.selectedRowList = selectedRows
    },
    pageParams () {
      return this.searchform.getFieldsValue()
    },
    handleCancel () {
      this.medvisible = false
      this.searchform.resetFields()
      this.rowSelection.selectedRowKeys = []
      this.rowSelection.selectedRowList = []
      this.tableData = []
    },
    searchRest () {
      this.searchform.resetFields()
    },
    handleOk () {
      if (this.rowSelection.selectedRowList.length < 1) {
        this.$message.info('未选择医保目录！！！')
        return
      }
      this.rowSelection.selectedRowList[0].insuAdmdvs = this._administrative(this.rowSelection.selectedRowList[0].insuAdmdvs)
      this.medform.setFieldsMomentValue(this.rowSelection.selectedRowList[0])
      const data = Object.assign({}, this.rowSelection.selectedRowList[0])
      this.$emit('change', data)
      if(this.only){
        this.hilistCodeonly = data.hilistCode
      }
      this.handleCancel()
    },
    // 双击选择
    fnCustomRow (record, index) {
      return {
        props: {},
        on: {
          dblclick: e => {
            let obj = JSON.parse(JSON.stringify(record))
            this.$emit('change', obj)
            if(this.only){
              this.hilistCodeonly = obj.hilistCode
            }
            this.medform.setFieldsMomentValue({ ...obj })
            this.handleCancel()
          }
        }
      }
    },
    fnSearch () {
      this.searchform.validateFields({ first: true, force: true }, (errors, values) => {
        if (!errors) {
          this.$refs.gridPager.loadData()
        } else {
          console.log('error', errors, values)
        }
      })
    },
    getInfoBycode (code) {
      this.Base.submit(null, {
        url: this.URL,
        data: {
          hilistCode: code
        }
      }).then((data) => {
        let list = data.data.pageBean.data
        this.medform.setFieldsMomentValue(list[0])
      })
    },
    getParam () {
      let params = {}
      if (this.only) {
        params.hilistCode = this.hilistCodeonly
      } else {
        params = this.medform.getFieldsMomentValue()
      }
      return params
    },
    getInfo () {
      if (this.isSearch) { return }

      let form = this.getParam()
      if (!form.hilistCode || !form.hilistCode.trim()) {
        this.$message.info('请输入编号')
        return
      }
      this.Base.submit(null, {
        url: this.URL,
        data: {
          hilistCode: form.hilistCode,
          pageNum: 1,
          pageSize: 1
        }
      }).then((data) => {
        let list = data.data.pageBean.data
        if (this.only) {
          this.selectResult(list)
          return
        }
        if (list && list.constructor === Array && list.length === 1) {
          this.medform.setFieldsMomentValue(list[0])
          this.$emit('change', Object.assign({}, list[0]))
          if(this.only){
            this.hilistCodeonly = list[0].hilistCode
          }
        } else if (list && list.constructor === Array && list.length > 0) {
          this.medvisible = true
          this.$nextTick(() => {
            this.searchform.setFieldsMomentValue({ hilistCode: form.hilistCode })
            // this.tableData = list
          })
        } else {
          this.noDtata()
        }
      })
    },
    selectResult (list) {
      if (list && list.constructor === Array && list.length > 1) {
        this.medvisible = true
        this.$nextTick(() => {
          this.searchform.setFieldsMomentValue({ hilistCode: this.getParam().fixmedinsCode })
          this.tableData = list
        })
      } else if (list && list.constructor === Array && list.length === 1) {
        let obj = Object.assign({}, list[0])
        this.$emit('change', obj)
        if(this.only){
          this.hilistCodeonly = obj.hilistCode
        }
        this.medform.setFieldsMomentValue({ ...obj })
        this.handleCancel()

      } else {
        this.noDtata()
      }
    },
    noDtata () {
      const modal = this.$warning({
        title: '提示信息！',
        maskClosable: true,
        content: '没有查到任何信息'
      })
    },
    searchInfo () {
      if (this.isSearch) { return }
      this.medvisible = true
      this.$nextTick(() => {
        this.searchform.setFieldsMomentValue({ hilistCode: this.getParam().hilistCode })
      })
    },
    resetFields () {
      this.medform.resetFields()
      this.$emit('change', {})
      if(this.only){
        this.hilistCodeonly = ''
      }
    },
    // 暴露到的父组件的 校验方法 不通过 返回 false
    validateFields () {
      let flag = true
      this.medform.validateFields({ force: true }, (errors, values) => {
        if (errors) {
          flag = false
        }
      })
      return flag
    }
  }
}

const tableColumns = [
  { title: '目录类别', dataIndex: 'listType', width: 200, align: 'center', collectionType: 'LIST_TYPE' },
  { title: '医保目录编码', dataIndex: 'hilistCode', width: 200, align: 'center' },
  { title: '医保目录名称', dataIndex: 'hilistName', width: 200, align: 'center' },
  { title: '医疗收费项目类别', dataIndex: 'medChrgitmType', width: 180, align: 'center', collectionType: 'MED_CHRGITM_TYPE' },
  { title: '目录甲乙类标识', dataIndex: 'chrgitmLv', width: 180, align: 'center', collectionType: 'CHRGITM_LV' },
  {title: '限制使用标志', dataIndex: 'lmtUsedFlag', width: 150, align: 'center', collectionType: 'LMT_USED_FLAG'},
  {
    title: '医疗使用标志',
    dataIndex: 'medUseFlag',
    width: 150,
    align: 'center',
    collectionType: 'MED_USE_FLAG'
  },
  { title: '生育使用标志', dataIndex: 'matnUsedFlag', width: 150, align: 'center', collectionType: 'MATN_USE_FLAG' },
  { title: '限复方使用类型', dataIndex: 'lmtCpndType', width: 200, align: 'center', collectionType: 'LMT_CPND_TYPE' },
  { title: '目录使用类别', dataIndex: 'hilistUseType', width: 200, align: 'center', collectionType: 'HILIST_USE_TYPE' },
  {
    title: '生效开始日期',
    dataIndex: 'begndate',
    width: 200,
    align: 'center',
    customRender: (text) => { if (text) { return moment(text).format('YYYY-MM-DD') } }
  },
  {
    title: '生效结束日期',
    dataIndex: 'enddate',
    width: 200,
    align: 'center',
    customRender: (text) => { if (text) { return moment(text).format('YYYY-MM-DD') } }
  }
]
</script>

<style scoped type="text/less" lang="less">
  .hide {
    height: 48px;
    overflow: hidden;
  }

  .page_style {
    margin-top: 5px;
    float: right;
  }
</style>
