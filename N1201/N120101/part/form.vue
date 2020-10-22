<template>
  <div>
    <ta-form :autoFormCreate="(form)=>{this.form = form}" :form-layout="true" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <ta-col v-show="componet">
        <medicalDirectory ref="Directory" :transmit="Directory" disabled/>
      </ta-col>
      <ta-card title="限价信息"
               showExpand
               :bordered="false">
                <!--<ta-form-item v-show="showOpForm"-->
                              <!--:colon="false"-->
                              <!--label="医保目录限价类型"-->
                              <!--fieldDecoratorId="hilistLmtpricType"-->
                              <!--:fieldDecoratorOptions="formOption.hilistLmtpricType"-->
                              <!--:labelCol="labelCol"-->
                              <!--:wrapperCol="wrapperCol">-->
                  <!--<ta-select collection-type="HILIST_LMTPRC_TYPE"/>-->
                <!--</ta-form-item>-->
        <ta-form-item v-show="showOpForm"
                                     :colon="false"
                                     label="医保目录超限处理方式"
                                     fieldDecoratorId="overlmtDspoWay"
                                     :fieldDecoratorOptions="formOption.overlmtDspoWay"
                                     :labelCol="labelCol"
                                     :wrapperCol="wrapperCol">
        <ta-select collection-type="OVERLMT_DSPO_WAY" @change="overlmtDspoWraySelected"/>
      </ta-form-item>
        <!--        <ta-form-item v-show="showOpForm"-->
        <!--                      :colon="false"-->
        <!--                      label="医保目录定价上限金额"-->
        <!--                      fieldDecoratorId="hilistPricUplmtAmt"-->
        <!--                      :fieldDecoratorOptions="formOption.hilistPricUplmtAmt"-->
        <!--                      :labelCol="labelCol"-->
        <!--                      :wrapperCol="wrapperCol">-->
        <!--          <ta-input-number :asAmount="true" :min="0"/>-->
        <!--        </ta-form-item>-->
        <ta-form-item v-show="showOpForm"
                      :colon="false"
                      label="开始日期"
                      fieldDecoratorId="begndate"
                      :fieldDecoratorOptions="formOption.begndate"
                      :labelCol="labelCol"
                      :wrapperCol="wrapperCol"
                      id="begndate">
          <ta-date-picker :format="format"
                          :disabledDate="disabledStartDate"
                          :allowClear="false"
                          :getCalendarContainer="()=>getCalendarContainer('begndate')" @change="begndateSelected"/>
        </ta-form-item>
        <ta-form-item v-show="!(showOpForm || lookFlag)"
                      :colon="false"
                      label="结束日期"
                      fieldDecoratorId="enddate"
                      :fieldDecoratorOptions="formOption.enddate"
                      :labelCol="labelCol"
                      :wrapperCol="wrapperCol"
                      id="enddate">
          <ta-date-picker :format="format"
                          :disabledDate="disabledEndDate" :getCalendarContainer="()=>getCalendarContainer('enddate')"
                          @change="enddateSelected"/>
        </ta-form-item>
        <!--        <div class="search-btn" v-show="showOpForm">-->
        <!--          <ta-button type="success" @click="fnAdd" v-show="componet">添加</ta-button>-->
        <!--        </div>-->
      </ta-card>
    </ta-form>
    <ta-form :autoFormCreate="(editForm)=>{this.editForm = editForm}">
      <ta-table :columns.sync="hilistLmtprcEvtColumns" :dataSource="hilistLmtAddDatas" :haveSn="true"
                :scroll="{x: 800,y:260}" ref="hilistLmtAddTable" bordered size="small"
                showOverflowTooltip
                headerTitleNowrap>
        <template slot="overlmtDspoWay" slot-scope="text, record">
          <ta-table-edit type="select" v-if="showOpForm" :option="CollectionData('OVERLMT_DSPO_WAY')"
                         @change="changeData"/>
          <span v-if="!showOpForm">{{CollectionLabel('OVERLMT_DSPO_WAY', text)}}</span>
        </template>
        <template slot="hilistPricUplmtAmt" slot-scope="text, record">
          <ta-table-edit type="inputNumber" :asAmount="true" @change="changeData" :editForm="editForm"
                         :rules="formOption.hilistPricUplmtAmt.rules" v-if="showOpForm"/>
          <span v-if="!showOpForm">{{text}}</span>
        </template>
      </ta-table>
    </ta-form>
  </div>
</template>

<script>
import dicMixin from '@common/js/mixins/dicMixin'
import medicalDirectory from '@project/component/medicalDirectory'
import tables from '@project/component/tables'
import moment from 'moment'

export default {
  components: { medicalDirectory, tables },
  name: 'delForm',
  mixins: [dicMixin],
  props: {
    componet: {
      type: Boolean,
      default: false
    },
    Directory: {
      type: Object,
      default: () => { return {} }
    },
    showOpForm: {
      type: Boolean,
      default: false
    },
    lookFlag: {
      type: Boolean,
      default: false
    },
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
  },
  data () {
    return {
      format: 'YYYY-MM-DD',
      hilistLmtprcEvtColumns: [
        // {
        //   title: '医保目录编码',
        //   dataIndex: 'hilistCode',
        //   scopedSlots: { customRender: 'hilistCode' },
        //   width: 200,
        //   align: 'center'
        // },
        {
          title: '医保目录限价类型',
          dataIndex: 'hilistLmtpricType',
          align: 'center',
          collectionType: 'HILIST_LMTPRC_TYPE'
        },
        {
          title: '医保目录超限处理方式',
          dataIndex: 'overlmtDspoWay',
          scopedSlots: { customRender: 'overlmtDspoWay' },
          align: 'center'
        },
        {
          title: '医保目录定价上限金额',
          dataIndex: 'hilistPricUplmtAmt',
          scopedSlots: { customRender: 'hilistPricUplmtAmt' },
          align: 'center'
        },
        {
          title: '开始日期',
          dataIndex: 'begndate',
          align: 'center',
          customRender: (text) => {
            if (text) {
              return this.moment(text).format(this.format)
            }
          }
        },
        {
          title: '结束日期',
          dataIndex: 'enddate',
          align: 'center',
          customRender: (text) => {
            if (text) {
              return this.moment(text).format(this.format)
            }
          }
        }
      ],
      formOption: {
        hilistLmtpricType: {
          rules: [{ required: true, message: '请输入正确的参保限价类型!' }]
        },
        overlmtDspoWay: {
          rules: [{ required: false, message: '请输入正确的超限处理方式!' }]
        },
        hilistPricUplmtAmt: {
          rules: [{ required: true, message: '请输入正确的定价上限金额!' }, {
            validator: this.customValidate,
            reg: /^[0-9]{0,12}(\.[0-9]{1,4})?$/,
            message: '不能超过12位整数，最多保留四位小数'
          }]
        },
        insuAdmdvs: {
          rules: [{ required: false, message: '请输入正确的参保所属医保区划!' }]
        },
        begndate: {
          rules: [{ required: false, message: '请输入正确的开始日期!' }]
        },
        enddate: {
          rules: [{ required: false, message: '请输入正确的结束日期!' }]
        },
        resultBizSn: {
          rules: [{ max: 500, message: '最长长度为500!' }]
        }
      }
    }
  },
  methods: {
    moment,
    getCalendarContainer (id) {
      return document.getElementById(id)
    },
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
    //  开始日期校验
    disabledStartDate (startValue) {
      const endValue = this.form.getFieldValue('enddate')
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    //  结束日期校验
    disabledEndDate (endValue) {
      const startValue = this.form.getFieldValue('begndate')
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    fnAdd () {
      this.form.validateFields({ force: true }, (errors, values) => {
        if (!errors) {
          let formData = this.form.getFieldsMomentValue()
          let rows = this.hilistLmtAddDatas
          for (let index in rows) {
            if (rows[index]['hilistLmtpricType'] === formData['hilistLmtpricType']) {
              this.$message.info('当前所选限价类型已添加，不能重复添加！')
              return
            }
          }
          let row = {
            hilistCode: this.Directory.hilistCode,
            hilistLmtpricType: formData['hilistLmtpricType'],
            overlmtDspoWay: formData['overlmtDspoWay'],
            hilistPricUplmtAmt: formData['hilistPricUplmtAmt'],
            begndate: formData['begndate'],
            enddate: formData['enddate']
          }
          this.hilistLmtAddDatas.push(row)
        }
      })
    },
    hideColumn (columnName) {
      let array = []
      array.push(columnName)
      this.$refs.hilistLmtAddTable.hideColumns(array)
    },
    changeData ({ newData, record, columnKey }) {
      record[columnKey] = newData
    },
    showDirectoryBut (flag) {
      this.$refs.Directory.showBut = flag
    },
    overlmtDspoWraySelected (value) {
      let rows = this.hilistLmtAddDatas
      for (let index in rows) {
        rows[index].overlmtDspoWay = value
      }
      this.hilistLmtAddDatas = rows
    },
    begndateSelected (value) {
      let rows = this.hilistLmtAddDatas
      for (let index in rows) {
        rows[index].begndate = this.moment(value).format(this.format)
      }
      this.hilistLmtAddDatas = rows
    },
    enddateSelected (value) {
      let rows = this.hilistLmtAddDatas
      for (let index in rows) {
        rows[index].enddate = this.moment(value).format(this.format)
      }
      this.hilistLmtAddDatas = rows
    }
  }
}

</script>

<style scoped lang="less">
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
