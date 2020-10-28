<template>
    <ta-border-layout layout-type="fixTop">
        <div slot="header">
            <ta-form :autoFormCreate="(form)=>{this.QueryConditionInfo= form}" :form-layout="true" :wrapperCol="wrapperCol" :labelCol="labelCol">
                <psnInfoComponent v-model="persSearch" ref="psncomponent" class="headerBorder" type="basis" :personInsuType="personInsuType" ></psnInfoComponent>
                <ta-form-item label="医保区划" fieldDecoratorId="poolareaNo" :colon="false" style="margin-left: 10px;padding-right: 5px;" :require="{message: '医保区划不能为空'}">
                    <ta-cascader  :options="insuOptins" placeholder="请选择" :getPopupContainer = "getSelectPopup"/>
                </ta-form-item>
                <div class="search-btn">
                    <ta-button class="but_spacing" @click="resetForm">重置</ta-button>
                    <ta-button type="primary" @click="queryAll" :disabled="disabled">查询</ta-button>
                </div>
            </ta-form>
        </div>
        <ta-card title="门慢门特登记列表" :bordered="false" class="fit">
            <batchAuditComponnet v-model="auditMessage" slot="extra"></batchAuditComponnet>
            <ta-table size="small"
                      :scroll="{ x: '2000px',y:385}"
                      :columns="rtalPhacEvtDTOS"
                      :dataSource="dataSource"
                      :rowSelection="rowSelection"
                      :showOverflowTooltip="true"
                      bordered
                      :haveSn="true">
          <span slot="action" slot-scope="text, record">
            <ta-table-operate :operateMenu="operateMenu" :record="record"></ta-table-operate>
          </span>
                <template slot="footer" slot-scope="page">
                    <ta-pagination :showTotal="true" style="text-align: right;width:100%"
                                   :showSizeChanger="true" :showQuickJumper=false
                                   :defaultPageSize="10" :pageSizeOptions="['5','10','20','50']"
                                   :dataSource.sync="dataSource" :params="myPageParams"
                                   url="/web/psontreat/opspregevt/queryUnCheckInfo"
                                   ref="gridPager"></ta-pagination>
                </template>
            </ta-table>
        </ta-card>
        <div id="conter">
            <ta-drawer
                    width="90%"
                    placement="right"
                    :closable="false"
                    :maskClosable="false"
                    @close="onClose"
                    :visible="addVisible"
                    style="height: calc(100% - 55px);overflow: auto;paddingBottom: 53px"
                    :destroyOnClose="true" >
                <del-form :showDetail="showDetail" :record="record" :examine="examine" ref="form" :personInfo="tmppersSearch"></del-form>
                <template slot="footer">
                    <ta-row type="flex" justify="end" class="btn_group_R100">
                        <ta-col class="but_spacing">
                            <ta-button @click="onClose">关闭</ta-button>
                        </ta-col>
                        <ta-col class="but_spacing" v-show="examine">
                            <ta-button type="primary" @click="handleAuditPass">保存</ta-button>
                        </ta-col>
                    </ta-row>
                </template>
            </ta-drawer>
        </div>
    </ta-border-layout>
</template>
<script>
  import moment from 'moment'
  import delForm from './part/addInfo'
  import dicMixin from '@common/js/mixins/dicMixin'
  import psnInfoComponent from '@project/component/psncomponent/psninfocomponent'
  import tables from '@project/component/tables'
  import batchAuditComponnet from '@project/component/auditcomponnet/batchauditcomponnet'

  export default {
    components: { delForm, psnInfoComponent, tables, batchAuditComponnet },
    mixins: [dicMixin],
    data () {
      return {
        personInsuType: '',
        poolareaNo: [],
        disabled: false,
        auditMessage: {
          listLength: 0
        },
        tmppersSearch: {},
        // 人员信息
        persSearch: {},
        format: 'YYYY-MM-DD',
        showDetail: false,
        examine: false,
        addVisible: false,
        record: {},
        dataSource: [],
        selectedRows: [],
        insuOptins: [], // 参保地行政区划
        // 行选择配置
        rowSelection: {
          // 控制选项的属性需要和 onChange 进行配合
          selectedRowKeys: [],
          selectedRowList: [],
          // 行选择改变事件
          onChange: this.onSelectChange
        },
        rtalPhacEvtDTOS: [
          { title: '审核状态', dataIndex: 'rchkFlag', key: '', width: 100, align: 'center', collectionType: 'RCHK_FLAG' },
          { title: '慢特病编码', dataIndex: 'opspDiseCode', width: 200, align: 'center' },
          { title: '慢特病名称', dataIndex: 'opspDiseName', width: 200, align: 'center' },
          { title: '人员编号', dataIndex: 'psnNo', width: 200, align: 'center' },
          { title: '人员姓名', dataIndex: 'psnName', width: 150, align: 'center' },
          { title: '证件类型', dataIndex: 'psnCertType', width: 180, align: 'center', collectionType: 'PSN_CERT_TYPE' },
          { title: '证件号码', dataIndex: 'certno', width: 200, align: 'center' },
          { title: '参保险种', dataIndex: 'insutype', width: 200, align: 'center', customRender: (text) => { return this._translate(text, 'insuType') } },
          { title: '单位名称', dataIndex: 'empName', width: 200, align: 'center' },
          { title: '鉴定定点医药机构名称', dataIndex: 'ideFixmedinsName', width: 260, align: 'center' },
          { title: '操作', dataIndex: 'action', width: 120, align: 'center', scopedSlots: { customRender: 'action' }, fixed: 'right' }
        ],
        operateMenu: [
          {
            name: '查看',
            onClick: record => {
              this.addVisible = true
              this.examine = false
              this.showDetail = true
              this.record = record
              this.tmppersSearch = record
              this.tmppersSearch.mob = record.tel
            }
          },
          {
            name: '审核',
            isShow: (record) => record.rchkFlag == 0,
            onClick: (record) => {
              this.addVisible = true
              this.examine = true
              this.showDetail = true
              this.record = record
              this.tmppersSearch = record
              this.tmppersSearch.mob = record.tel
            }
          }
        ],
        formOption: {
          notnull: {
            rules: [{ required: true, message: '不能为空!' }]
          }
        },
        taskId: '',
        nodeId: ''
      }
    },
    mounted () {
      this.personInsuType = this.$route.query.personInsuType ? this.$route.query.personInsuType : this.personInsuType
      this.nodeId = this.$route.query.nodeNo || this.nodeId
      let comDataAccessDTO = {
        menuCodg: this.MENUID_CONSTANT.MENU_CODG_N04020104
      }
      // 医保区划
      Base.submit(null, { url: '/web/commonquery/getCanOptAdmdvs', data: { ...comDataAccessDTO } }, {
        successCallback: (result) => {
          this.QueryConditionInfo.setFieldsValue({
            poolareaNo: result.data.insuOptins
          })
          this.insuOptins = result.data.data
        },
        failCallback: (result) => {
          console.log('fail')
        }
      })
    },
    methods: {

      moment,
      getSelectPopup () { return document.body },
      // 重置表单
      resetForm () {
        this.$router.go(0)
      },
      suerAudit () {
        let items = this.rowSelection.selectedRowList.map(item => {
          item.result = this.auditMessage.auditStas
          item.opinion = this.auditMessage.auditMsg
          return item
        })
        Base.submit(null, {
          url: '/web/psontreat/opspregevt/batchCheck',
          data: { strList: JSON.stringify(items) }
        }).then((data) => {
          this.$message.success(data.message)
          this.dataSource = []
          this.queryAll()

        })
      },
      // 查询参数封装
      myPageParams () {
        return {
          psnNo: this.persSearch.psnNo,
          psnName: this.persSearch.psnName,
          psnCertType: this.persSearch.psnCertType,
          certno: this.persSearch.certno,
          nodeId: this.nodeId,
          insuAdmdvs: this.poolareaNo,
          insuTypeList: this.$refs.psncomponent.insuTypeList
        }
      },
      // 按条件查询专家基本信息
      queryAll () {
        let poolareaNo = this.QueryConditionInfo.getFieldValue('poolareaNo')
        if (!poolareaNo.length) {
          this.$message.warn('请选择医保区划！')
          return
        }
        this.poolareaNo = poolareaNo[poolareaNo.length - 1]
        this.dataSource = []
        // 调用分页条方法查询数据（默认查询第一页）
        this.$refs.gridPager.loadData((data) => {
          if (data.data.pageBean.data.length == 0) {
            this.$message.info('未查询到符合条件的数据！')
          }
        })
      },
      // 关闭抽屉
      onClose () {
        this.$refs.form.resetFields()
        this.addVisible = false
      },
      // 点击选项改变触发事件,传入当前选中的所有选项,以及行
      onSelectChange (selectedRowKeys, selectedRows) {
        // 设置选中项为点击选中的项
        this.rowSelection.selectedRowKeys = selectedRowKeys
        this.rowSelection.selectedRowList = selectedRows
        this.auditMessage.listLength = selectedRowKeys.length
      },
      // 审核
      handleAuditPass () {
        if (!this.$refs.form.save()) {
          return
        }
        let param = this.$refs.form.getValue()
        this.$confirm({
          cancelText: '关闭',
          title: '提示信息！',
          content: '确认进行保存？',
          onOk: () => {
            Base.submit(null, {
              url: '/web/psontreat/opspregevt/addCheck',
              data: param,
              autoQs: false,
              autoValid: true,
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(data => {
              this.$message.success(data.message)
              this.dataSource = []
              this.addVisible = false
              this.queryAll()
            })
          },
          onCancel: () => {}
        })
      }
    },
    watch: {
      // 监听行选择行的key,获取到对应的data
      'rowSelection.selectedRowKeys' (now, old) {
        this.selectedRows = now.map((item) => {
          return this.dataSource[item]
        })
      },
      $route() {
        this.$router.go(0)
      },
      auditMessage: {
        handler: function (val, old) {
          if (this.auditMessage.flag == '1') {
            this.suerAudit()
          }
        },
        deep: true,
        immediate: true
      },
      persSearch: {
        handler: function (val, old) {
          if (val.psnNo) { // 机构编号不为空时 校验权限
            // 权限校验
            let params = {
              menuCodg: this.MENUID_CONSTANT.MENU_CODG_N04020104,
              insuAdmdvs: val.insuAdmdvs, // 区划
              ptcp: val.psnNo, // 当事人
              ptcpType: this.MENUID_CONSTANT.PTCP_TYPE_2_RY// 当事人类型（组织1、人员2、家庭3、单位4、定点医药机构5）
            }
            Base.submit(null, { url: '/web/trtCommonquery/checkAccess', data: { ...params } }).then((data) => {
              this.$nextTick(() => {
                this.disabled = false
              })
            }).catch(data => {
              this.disabled = true
            })
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="less">
    .search-btn{
        margin-right: 10px;
    }
    .btn_group_R100 {
        margin-right: 100px;
    }
    /deep/.headerBorder .ant-card{
        border-bottom: none;
    }
</style>
