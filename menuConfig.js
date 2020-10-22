// 菜单配置放这里
const menuConfig = [
  {
    orderNo: 1,
    name: '参保管理',
    id: '1',
    children: [
      {
        orderNo: 1,
        name: '参保登记管理',
        id: '1-1',
        children: [
          {
            orderNo: 1,
            name: '单位参保登记',
            id: '1-1-1',
            url: 'N0201.html#/N020101'
          },
          {
            orderNo: 2,
            name: '职工参保登记',
            id: '1-1-2',
            url: 'N0201.html#/N020102'
          },
          {
            orderNo: 3,
            name: '灵活就业人员参保登记',
            id: '1-1-3',
            url: 'N0101.html#/N010103'
          },
          {
            orderNo: 4,
            name: '退休人员参保登记',
            id: '1-1-25',
            url: 'N0201.html#/N020125'
          }
          /*          {
            orderNo: 1,
            name: '单位参保登记(复核)',
            id: '1-1-1-fuhe',
            url: 'N0201.html#/N020101_fuhe'
          }, */
          // {
          //   orderNo: 2,
          //   name: 'jasperReport测试',
          //   id: 'jasperReportTest',
          //   url: 'N0201.html#/jasperReportTest'
          // },
          // {
          //   orderNo: 2,
          //   name: '灵活就业人员参保登记(复核)',
          //   id: '1-1-3_fuhe',
          //   url: 'N0101.html#/N010103_fuhe'
          // }
        ]
      },
      {
        orderNo: 2,
        name: '职工参保人员管理',
        id: '1-2',
        children: [
          {
            orderNo: 1,
            name: '职工参保人员暂停缴费',
            id: '1-2-1',
            url: 'N0103.html#/N010301'
          },
          {
            orderNo: 2,
            name: '灵活就业人员中断缴费',
            id: '1-2-2',
            url: 'N0103.html#/N010302'
          },
          {
            orderNo: 3,
            name: '人员一般信息维护',
            id: '1-2-3',
            url: 'N0103.html#/N010303'
          },
          {
            orderNo: 4,
            name: '人员重要信息维护',
            id: '1-2-4',
            url: 'N0103.html#/N010304'
          }, {
            orderNo: 5,
            name: '特殊身份认定',
            id: '1-2-5',
            url: 'N0105.html#/N010502'
          }, {
            orderNo: 6,
            name: '医保视同缴费年限认定',
            id: '1-2-6',
            url: 'N0105.html#/N010503'
          }, {
            orderNo: 7,
            name: '在职转退休',
            id: '1-2-7',
            url: 'N0105.html#/N010504'
          }, {
            orderNo: 8,
            name: '人员多号合并',
            id: '1-2-8',
            url: 'N0105.html#/N010501'
          }, {
            orderNo: 9,
            name: '人员多号合并(同一身份)',
            id: '1-2-9',
            url: 'N0105.html#/N010509'
          }, {
            orderNo: 10,
            name: '人员终止参保',
            id: '1-2-10',
            url: 'N0105.html#/N010505'
          }, {
            orderNo: 11,
            name: '人员参保信息扩展',
            id: '1-2-11',
            url: 'N0105.html#/N010508'
          }, {
            orderNo: 12,
            name: '基本医疗历史缴费年限认定',
            id: '1-2-12',
            url: 'N0105.html#/N010510'
          }, {
            orderNo: 13,
            name: '人员终止转暂停',
            id: '1-2-13',
            url: 'N0105.html#/N010511?nodeNo=mbs-n010511'
          }/*,
          {
            orderNo: 5,
            name: '参保人员暂停缴费(复核)',
            id: '1-2-5',
            url: 'N0103.html#/N010301_fuhe'
          },
          {
            orderNo: 6,
            name: '灵活就业人员中断缴费(复核)',
            id: '1-2-6',
            url: 'N0103.html#/N010302_fuhe'
          },
          {
            orderNo: 7,
            name: '参保人员基本信息维护(复核)',
            id: '1-2-7',
            url: 'N0103.html#/N010303_fuhe'
          },
          {
            orderNo: 8,
            name: '参保人员重要信息维护(复核)',
            id: '1-2-8',
            url: 'N0103.html#/N010304_fuhe'
          } */
        ]
      },

      {
        orderNo: 3,
        name: '参保单位管理',
        id: '2-2',
        children: [
          {
            orderNo: 1,
            name: '单位信息维护',
            id: '2-2-1',
            url: 'N0202.html#/N020201'
          },
          /*          {
            orderNo: 12,
            name: '单位信息维护(复核)',
            id: '2-2-1-fuhe',
            url: 'N0202.html#/N020201_fuhe'
          }, */
          {
            orderNo: 2,
            name: '单位缴费状态变更',
            id: '2-2-2',
            url: 'N0202.html#/N020202'
          },
          /*          {
                     orderNo: 22,
                     name: '单位缴费状态变更（复核）',
                     id: '2-2-2-fuhe',
                     url: 'N0202.html#/N020202_fuhe'
                   }, */
          {
            orderNo: 3,
            name: '单位合并',
            id: '2-2-3',
            url: 'N0102.html#/N010203'
          },
          /*          {
            orderNo: 7,
            name: '单位合并（初审）',
            id: '2-2-3-1',
            url: 'N0102.html#/N010203_fuhe?nodeNo=mbs-emp-merg-0102'
          }, */
          /*          {
            orderNo: 7,
            name: '单位合并（复核）',
            id: '2-2-3-2',
            url: 'N0102.html#/N010203_fuhe?nodeNo=mbs-emp-merg-0103'
          }, */
          {
            orderNo: 4,
            name: '单位分户',
            id: '2-2-4',
            url: 'N0102.html#/N010204'
          },

          /*          {
            orderNo: 8,
            name: '单位分户（初审）',
            id: '2-2-4-1',
            url: 'N0102.html#/N010204_fuhe?nodeNo=mbs-emp-splt-0102'
          }, */

          /*          {
            orderNo: 8,
            name: '单位分户（复核）',
            id: '2-2-4-2',
            url: 'N0102.html#/N010204_fuhe?nodeNo=mbs-emp-splt-0103'
          }, */
          {
            orderNo: 5,
            name: '单位注销',
            id: '2-2-5',
            url: 'N0102.html#/N010205'
          },
          /*          {
            orderNo: 6,
            name: '单位注销(初审)',
            id: '2-2-5-1',
            url: 'N0102.html#/N010205_fuhe?nodeNo=mbs-emp-canc-0102'
          }, */
          /*          {
            orderNo: 7,
            name: '单位注销(复核)',
            id: '2-2-5-2',
            url: 'N0102.html#/N010205_fuhe?nodeNo=mbs-emp-canc-0103'
          }, */
          {
            orderNo: 8,
            name: '单位参保信息扩展',
            id: '2-2-8',
            url: 'N0102.html#/N010206'
          }
        ]
      },
      /* TODO 未排 DOWN */
      {
        orderNo: 4,
        name: '通用审核-撤销管理',
        id: '1-3',
        children: [
          {
            orderNo: 1,
            name: '人员复核管理',
            id: '1-3-2-fuhe',
            url: 'N0201.html#/common-psn-fuhe'
          },
          {
            orderNo: 2,
            name: '参保通用撤销管理',
            id: '1-3-2-reverse',
            url: 'N0201.html#/common-insu-reverse'
          },
          {
            orderNo: 3,
            name: '单位复核管理(初审)',
            id: '1-3-3-fuhe',
            url: 'N0201.html#/empGeRew?nodeNo=02'
          },
          {
            orderNo: 4,
            name: '单位复核管理(复审)',
            id: '1-3-4-fuhe',
            url: 'N0201.html#/empGeRew?nodeNo=03'
          }/*,
          {
            orderNo: 5,
            name: '城乡居民参保登记(复核)',
            id: '1-3-1-fuhe',
            url: 'N0104.html#/N010401_fuhe'
          },
          {
            orderNo: 6,
            name: '城乡居民批量新参保(复核)',
            id: '1-3-5-fuhe',
            url: 'N0104.html#/N010404_fuhe'
          } */
        ]
      }
      /* {
        orderNo: 3,
        name: '参保人员管理',
        id: '1-3',
        children: [
          {
            orderNo: 1,
            name: '人员多号合并',
            id: '1-3-1',
            url: 'N0105.html#/N010501'
          }, /!* {
            orderNo: 1,
            name: '人员多号合并(复核)',
            id: '1-3-1-fuhe',
            url: 'N0105.html#/N010501_fuhe'
          }, *!/ {
            orderNo: 2,
            name: '特殊身份认定',
            id: '1-3-2',
            url: 'N0105.html#/N010502'
          }, /!* {
            orderNo: 2,
            name: '特殊身份认定(复核)',
            id: '1-3-2-fuhe',
            url: 'N0105.html#/N010502_fuhe'
          }, *!/{
            orderNo: 3,
            name: '视同缴费年限认定',
            id: '1-3-3',
            url: 'N0105.html#/N010503'
          },
          /!* {
            orderNo: 3,
            name: '视同缴费年限认定(复核)',
            id: '1-3-3-fuhe',
            url: 'N0105.html#/N010503_fuhe'
          }, *!/
          {
            orderNo: 4,
            name: '在职转退休',
            id: '1-3-4',
            url: 'N0105.html#/N010504'
          },
          /!* {
            orderNo: 4,
            name: '在职转退休(复核)',
            id: '1-3-4-fuhe',
            url: 'N0105.html#/N010504_fuhe'
          }, *!/
          {
            orderNo: 5,
            name: '人员终止参保',
            id: '1-3-5',
            url: 'N0105.html#/N010505'
          }/!*, {
            orderNo: 5,
            name: '人员终止参保(复核)',
            id: '1-3-5-fuhe',
            url: 'N0105.html#/N010505_fuhe'
          } *!/
          /!* {
            orderNo: 6,
            name: '*重复参保人员任务转发',
            id: '1-3-6',
            url: ''
          },
          {
            orderNo: 7,
            name: '*重复参保人员处理',
            id: '1-3-7',
            url: 'N0105.html#/N010507'
          } *!/
        ]
      }, */
      /* TODO 未排 UP */
    ]
  },
  {
    orderNo: 2,
    name: '参保缴费工资管理',
    id: '1-6',
    children: [
      {
        orderNo: 1,
        name: '缴费工资申报核定',
        id: '1-6-1',
        url: 'N0106.html#/N010601'
      },
      {
        orderNo: 2,
        name: '缴费工资变更核定',
        id: '1-6-2',
        url: 'N0106.html#/N010602'
      },
      {
        orderNo: 3,
        name: '单位工资总额认定',
        id: '1-6-5',
        url: 'N0106.html#/N010605'
      },
      {
        orderNo: 4,
        name: '单位工资总额维护',
        id: '1-6-6',
        url: 'N0106.html#/N010606'
      },
      // {
      //   orderNo: 4,
      //   name: '缴费工资申报(复核)',
      //   id: '1-6-4',
      //   url: 'N0106.html#/N010604'
      // },

      {
        orderNo: 5,
        name: '社平工资启用',
        id: '1-6-3',
        url: 'N0106.html#/N010603'
      },
      {
        orderNo: 6,
        name: '缴费工资申报复核',
        id: '1-6-7',
        url: 'N0106.html#/N010607'
      }
    ]
  },
  /* -------------------------- 缴费管理开始 ------------------------ */

  {
    orderNo: 3,
    name: '缴费管理',
    id: '2',
    children: [
      /* -------------------------- 职工缴费管理开始 ------------------------ */
      {
        orderNo: 1,
        name: '职工缴费管理',
        id: '2-1',
        children: [
          {
            orderNo: 1,
            name: '零星单位应收核定',
            id: '2-1-24',
            url: 'N0201.html#/N020123-new'
          },
          {
            orderNo: 15,
            name: '零星单位应收核定预测',
            id: '2-1-29',
            url: 'N0201.html#/N020129'
          },
          {
            orderNo: 16,
            name: '离休人员缴费核定',
            id: '2-1-30',
            url: 'N0201.html#/N020130'
          },
          {
            orderNo: 2,
            name: '用人单位统一应收核定',
            id: '2-1-21',
            url: 'N0201.html#/N020121'
          },
          {
            orderNo: 3,
            name: '单位特殊收款征集',
            id: '2-1-26',
            url: 'N0201.html#/N020126'
          },
          {
            orderNo: 4,
            name: '特殊单位缴费核定',
            id: '2-1-20',
            url: 'N0201.html#/N020120'
          },
          {
            orderNo: 5,
            name: '特殊身份人员缴费核定',
            id: '2-1-19',
            url: 'N0201.html#/N020119'
          },
          {
            orderNo: 6,
            name: '单位缓缴认定',
            id: '2-1-17',
            url: 'N0201.html#/N020117'
          },
          {
            orderNo: 7,
            name: '单位预缴核定',
            id: '2-3-01',
            url: 'N0203.html#/N020301'
          },
          {
            orderNo: 8,
            name: '单位预缴返还',
            id: '2-3-02',
            url: 'N0203.html#/N020302'
          },
          /* 5.4.1.9单位预缴款按单分配 */
          {
            orderNo: 9,
            name: '单位预缴款按单分配',
            id: '2-3-03',
            url: 'N0203.html#/N020303'
          },
          /* TODO 未排 down */

          {
            orderNo: 12,
            name: '利息滞纳减免金认定',
            id: '2-1-16',
            url: 'N0201.html#/N020116'
          },
          // {
          //   orderNo: 15,
          //   name: '医保退休不满足年限一次性缴纳(复核)',
          //   id: '2-1-14-fuhe',
          //   url: 'N0201.html#/N020114_fuhe'
          // },

          {
            orderNo: 14,
            name: '正常核定回退',
            id: '2-8-01',
            url: 'N0208.html#/N020801'
          }
          /* TODO 未排 up */
        ]
      },

      /* -------------------------- 职工缴费管理结束 ------------------------ */

      /* -------------------------- 职工补收管理开始 ------------------------ */
      {
        orderNo: 2,
        name: '职工补收管理',
        id: '2-c',
        children: [
          {
            orderNo: 1,
            name: '单位补收核定',
            id: '2-1-03',
            url: 'N0201.html#/N020103'
          },
          {
            orderNo: 2,
            name: '单位差额补退',
            id: '2-1-05',
            url: 'N0201.html#/N020105'
          },
          {
            orderNo: 3,
            name: '统筹区差额补退',
            id: '2-1-07',
            url: 'N0201.html#/N020107'
          },
          {
            orderNo: 4,
            name: '单位欠费核销',
            id: '2-1-08',
            url: 'N0201.html#/N020108'
          },
          {
            orderNo: 5,
            name: '单位欠费补缴',
            id: '2-1-09',
            url: 'N0201.html#/N020109'
          },
          {
            orderNo: 6,
            name: '医保退休不满足年限一次性缴纳',
            id: '2-1-14',
            url: 'N0201.html#/N020114'
          },
          {
            orderNo: 7,
            name: '医疗保险费返还/核销',
            id: '2-1-10',
            url: 'N0201.html#/N020110'
          },
          {
            orderNo: 8,
            name: '人员退休补收',
            id: '2-1-18',
            url: 'N0201.html#/N020118'
          },
          {
            orderNo: 9,
            name: '人员缴费明细录入',
            id: '2-1-13',
            url: 'N0201.html#/N020113'
          }
        ]
      },
      /* -------------------------- 灵活人员缴费管理开始 ------------------------ */
      /* -------------------------- 退役士兵补收管理开始 ------------------------ */
      {
        orderNo: 25,
        name: '退役士兵补收管理',
        id: '2-25',
        children: [
          {
            orderNo: 1,
            name: '退役士兵信息维护',
            id: '2-1-18',
            url: 'N0201.html#/N020127'
          },
          {
            orderNo: 2,
            name: '退役士兵补缴',
            id: '2-1-03',
            url: 'N0201.html#/N020128'
          }
        ]
      },
      /* -------------------------- 退役士兵补收管理结束 ------------------------ */
      {
        orderNo: 3,
        name: '灵活人员就业缴费管理',
        id: '2-3',
        children: [
          {
            orderNo: 1,
            name: '灵活就业人员医疗保险费缴纳',
            id: '2-1-11',
            url: 'N0201.html#/N020111'
          },
          {
            orderNo: 2,
            name: '灵活就业人员代扣核定',
            id: '2-1-12',
            url: 'N0201.html#/N020112'
          }
        ]
      },
      {
        orderNo: 4,
        name: '职工基金征集管理',
        id: '2-B-1',
        children: [
          {
            orderNo: 1,
            name: '医疗保险费缴费单据生成',
            id: '2-B-01',
            url: 'N020B.html#/N020B01'
          },
          {
            orderNo: 2,
            name: '医疗保险费缴费单据撤销',
            id: '2-B-02',
            url: 'N020B.html#/N020B02'
          },
          {
            orderNo: 3,
            name: '拨付计划生成',
            id: '2-B-05',
            url: 'N0901.html#/N090101'
          }
          // {
          //   orderNo: 3,
          //   name: '*医疗保险费收入登账',
          //   id: '2-B-03',
          //   url: 'N020B.html#/N020B03'
          // },
          // {
          //   orderNo: 4,
          //   name: '*医疗保险费支出登账',
          //   id: '2-B-04',
          //   url: 'N020B.html#/N020B04'
          // },
          // {
          //   orderNo: 5,
          //   name: '*拨付计划生成',
          //   id: '2-B-05',
          //   url: 'N020B.html#/N020B05'
          // }
        ]
      },
      {
        orderNo: 5,
        name: '税务全责征收',
        id: '2-6',
        children: [
          {
            orderNo: 1,
            name: '单位缴费到账确认',
            id: '2-6-01',
            url: 'N0206.html#/N020601'
          },
          {
            orderNo: 2,
            name: '灵活就业人员缴费到账确认',
            id: '2-6-02',
            url: 'N0206.html#/N020602'
          },
          {
            orderNo: 3,
            name: '居民缴费到账确认',
            id: '2-6-03',
            url: 'N0206.html#/N020603'
          },
          {
            orderNo: 4,
            name: '特殊缴费到账确认',
            id: '2-6-04',
            url: 'N0206.html#/N020604'
          },
          {
            orderNo: 5,
            name: '医保费对账信息交换',
            id: '2-6-05',
            url: 'N0206.html#/N020605'
          },
          // {
          //   orderNo: 6,
          //   name: '对账信息反馈',
          //   id: '2-6-06',
          //   url: 'N0206.html#/N020606'
          // },
          {
            orderNo: 6,
            name: '税务退款申请信息审核',
            id: '2-6-07',
            url: 'N0206.html#/N020607'
          }
        ]
      },
      {
        orderNo: 7,
        name: '税务代征',
        id: '2-7',
        children: [
          {
            orderNo: 1,
            name: '职工税务代征报盘',
            id: '2-7-01',
            url: 'N0207.html#/N020701'
          },
          {
            orderNo: 2,
            name: '职工税务代征回盘',
            id: '2-7-02',
            url: 'N0207.html#/N020702'
          },
          {
            orderNo: 3,
            name: '灵活就业税务代征报盘',
            id: '2-7-05',
            url: 'N0207.html#/N020705'
          },
          {
            orderNo: 4,
            name: '灵活就业税务代征回盘',
            id: '2-7-06',
            url: 'N0207.html#/N020706'
          },
          {
            orderNo: 5,
            name: '居民税务代征报盘',
            id: '2-7-03',
            url: 'N0207.html#/N020703'
          },
          {
            orderNo: 6,
            name: '居民税务代征回盘',
            id: '2-7-04',
            url: 'N0207.html#/N020704'
          },
          {
            orderNo: 7,
            name: '特殊缴费税务代征报盘',
            id: '2-7-07',
            url: 'N0207.html#/N020707'
          },
          {
            orderNo: 8,
            name: '特殊缴费税务代征回盘',
            id: '2-7-08',
            url: 'N0207.html#/N020708'
          }
        ]
      },
      /* -------------------------- 职工补收管理结束 ------------------------ */

      /* -------------------------- 基金征集管理开始 ------------------------ */
      /* TODO 未排 down */
      {
        orderNo: '2-B',
        name: '基金征集管理',
        id: '2-B',
        children: []
      }

      /* -------------------------- 基金征集管理结束 ------------------------ */
      /* -------------------------- 灵活人员缴费管理结束 ------------------------ */
      /* -------------------------- 城乡居民缴费管理开始 ------------------------ */

      /* -------------------------- 城乡居民缴费管理结束 ------------------------ */

      /* -------------------------- 税务全责征收开始 ------------------------ */

      /* -------------------------- 税务全责征收结束 ------------------------ */
      /* -------------------------- 税务代征开始 ------------------------ */

      /* -------------------------- 税务代征结束 ------------------------ */
      /* TODO 未排 up */
    ]
  },
  {
    orderNo: 4,
    name: '关系转移接续',
    id: '1-7',
    children: [
      {
        orderNo: 1,
        name: '基本医疗保险转移申请',
        id: '1-7-1',
        url: 'N0107.html#/N010701'
      },
      {
        orderNo: 2,
        name: '基本医疗保险转移申请(复核)',
        id: '1-7-2',
        url: 'N0107.html#/N010701_fuhe'
      },
      {
        orderNo: 3,
        name: '基本医疗保险转出',
        id: '1-7-3',
        url: 'N0107.html#/N010702'
      },
      {
        orderNo: 4,
        name: '基本医疗保险转入',
        id: '1-7-4',
        url: 'N0107.html#/N010703'
      },
      {
        orderNo: 5,
        name: '转入基金人员匹配',
        id: '1-7-5',
        url: 'N0107.html#/N010710'
      },
      {
        orderNo: 6,
        name: '转移机构信息变更',
        id: '1-7-6',
        url: 'N0107.html#/N010709'
      },
      {
        orderNo: 7,
        name: '转移情况统计',
        id: '1-7-7',
        url: 'N0107.html#/N010711'
      },
      {
        orderNo: 8,
        name: '基本医疗保险参保凭证打印',
        id: '1-7-8',
        url: 'N0107.html#/N010712'
      }
    ]
  },
  {
    orderNo: 5,
    name: '居民管理',
    id: '1-5',
    children: [
      {
        orderNo: 1,
        name: '居民参保人员管理',
        id: '1-4',
        children: [
          {
            orderNo: 1,
            name: '城乡居民单位新增',
            id: '1-4-9',
            url: 'N0104.html#/N010409'
          },
          {
            orderNo: 2,
            name: '城乡居民单位维护',
            id: '1-4-10',
            url: 'N0104.html#/N010410'
          },
          {
            orderNo: 3,
            name: '城乡居民单位注销',
            id: '1-4-11',
            url: 'N0104.html#/N010411'
          },
          {
            orderNo: 4,
            name: '城乡居民单位合并',
            id: '1-4-5',
            url: 'N0104.html#/N010405'
          },
          {
            orderNo: 5,
            name: '城乡居民参保登记',
            id: '1-4-1',
            url: 'N0104.html#/N010401'
          },
          {
            orderNo: 6,
            name: '城乡居民暂停参保登记',
            id: '1-4-6',
            url: 'N0104.html#/N010406'
          },
          {
            orderNo: 7,
            name: '城乡居民信息维护',
            id: '1-4-2',
            url: 'N0104.html#/N010402'
          },
          {
            orderNo: 8,
            name: '城乡居民特殊身份登记',
            id: '1-4-3',
            url: 'N0104.html#/N010403'
          },
          {
            orderNo: 9,
            name: '城乡居民跨区域流动',
            id: '1-4-12',
            url: 'N0104.html#/N010412'
          },
          {
            orderNo: 10,
            name: '家庭信息维护',
            id: '1-4-8',
            url: 'N0104.html#/N010408'
          },
          {
            orderNo: 11,
            name: '家庭人员信息维护',
            id: '1-4-7',
            url: 'N0104.html#/N010407'
          },
          /* TODO 未排 down */
          /* {
            orderNo: 4,
            name: '城乡居民批量新参保',
            id: '1-4-4',
            url: 'N0104.html#/N010404'
          }, */
          {
            orderNo: 16,
            name: '城乡居民终止参保',
            id: '1-4-16',
            url: 'N0104.html#/N010416'
          }
          /* TODO 未排 up */
        ]
      },
      {
        orderNo: 2,
        name: '城乡居民缴费管理',
        id: '2-4',
        children: [
          {
            orderNo: 1,
            name: '居民缴费核定',
            id: '2-4-01',
            url: 'N0204.html#/N020401'
          },
          {
            orderNo: 2,
            name: '批量居民缴费核定',
            id: '2-4-04',
            url: 'N0204.html#/N020404'
          },
          {
            orderNo: 3,
            name: '居民统筹区核定',
            id: '2-4-09',
            url: 'N0204.html#/N020409'
          },
          {
            orderNo: 4,
            name: '居民按基层行政区划核定',
            id: '2-4-010',
            url: 'N0204.html#/N0204010'
          },
          /* {
            orderNo: 5,
            name: '居民医疗保险费核销',
            id: '2-4-08',
            url: 'N0204.html#/N020408'
          }, */
          {
            orderNo: 6,
            name: '居民保险费返还',
            id: '2-4-02',
            url: 'N0204.html#/N020402'
          },
          {
            orderNo: 7,
            name: '城乡居民补缴',
            id: '2-4-011',
            url: 'N0204.html#/N0204011'
          }
          // ,
          // {
          //   orderNo: 8,
          //   name: '居民医疗保险费登账',
          //   id: '2-4-05',
          //   url: 'N0204.html#/N020405'
          // }
        ]
      },
      {
        orderNo: 3,
        name: '城乡居民基金征集管理',
        id: '2-B-2',
        children: [
          /* {
            orderNo: 1,
            name: '居民医疗保险费缴费单据管理',
            id: '2-4-03',
            url: 'N0204.html#/N020403'
          }, */
          /* TODO 未排 down */
          {
            orderNo: 2,
            name: '居民财政申拨',
            id: '2-4-06',
            url: 'N0204.html#/N020406'
          },
          {
            orderNo: 3,
            name: '居民财政申拨到账',
            id: '2-4-07',
            url: 'N0204.html#/N020407'
          }
          /* TODO 未排 up */
        ]
      },
      {
        orderNo: 4,
        name: '居民转移接续',
        id: '2-B-3',
        children: [
          {
            orderNo: 1,
            name: '城乡居民基本医疗保险转移申请',
            id: '1-4-13',
            url: 'N0104.html#/N010413'
          },
          {
            orderNo: 2,
            name: '城乡居民基本医疗保险转入',
            id: '1-4-14',
            url: 'N0104.html#/N010414'

          },
          {
            orderNo: 3,
            name: '城乡居民基本医疗保险转出',
            id: '1-4-15',
            url: 'N0104.html#/N010415'
          }
        ]
      }
    ]
  },

  /* -------------------------- 缴费管理结束 ------------------------ */
  {
    orderNo: '99',
    name: '决策树政策规则管理',
    id: '99',
    children: [
      {
        orderNo: '99-6',
        name: '规则指标管理',
        id: '99-6',
        url: 'indiManage.html#/indiManageModule'
      }, {
        orderNo: '99-1',
        name: '规则基本信息管理',
        id: '99-1',
        url: 'ruleManage.html#/ruleAddModule'
      }, {
        orderNo: '99-2',
        name: '规则输入指标管理',
        id: '99-2',
        url: 'ruleManage.html#/ruleInputModule'
      }, {
        orderNo: '99-3',
        name: '规则输出指标管理',
        id: '99-3',
        url: 'ruleManage.html#/ruleOutputModule'
      }, {
        orderNo: '99-4',
        name: '规则查询指标管理',
        id: '99-4',
        url: 'ruleManage.html#/ruleFilterModule'
      }, {
        orderNo: '99-5',
        name: '规则分支管理',
        id: '99-5',
        url: 'ruleBranchManage.html#/branchAddModule'
      }, {
        orderNo: '99-7',
        name: '规则审核管理',
        id: '99-7',
        url: 'ruleManage.html#/ruleAuditModule'
      }, {
        orderNo: '99-8',
        name: '规则生效信息管理',
        id: '99-8',
        url: 'ruleManage.html#/ruleEfftModule'
      }, {
        orderNo: '99-9',
        name: '规则测试',
        id: '99-9',
        url: 'ruleTest.html#/ruleTestModule'
      }
    ]
  },
  {
    orderNo: '1024',
    name: '业务规则管理',
    id: '1024',
    children: [
      {
        orderNo: '100-1-0',
        name: '决策表管理',
        id: '100-1-0',
        url: 'ruleAffirm.html#/affirm'
      },
      {
        orderNo: '100-1-10',
        name: '决策表管理 new',
        id: '100-1-10',
        url: 'dcstabManage.html#/affirm'
      },
      {
        orderNo: '100-1-1',
        name: '目录分解规则',
        id: '100-1-1',
        url: 'ruleAffirm.html#/directoryDecomposition'
      },
      {
        orderNo: '10-1-2',
        name: '规则测试导航',
        id: '10-1-2',
        url: 'ruleAffirm.html#/ruleTest'
      }
    ]
  },
  {
    orderNo: 7,
    name: '个人账户管理',
    id: '7',
    children: [
      {
        orderNo: 1,
        name: '个人账户收入管理',
        id: '3-1',
        children: [
          // {
          //   orderNo: 1,
          //   name: '*地税全责人员账户划入',
          //   id: '3-1-1',
          //   url: 'N0301.html#/N030101'
          // },
          {
            orderNo: 2,
            name: '*单位退休人员划账户',
            id: '3-1-2',
            url: 'N0301.html#/N030102'
          },
          {
            orderNo: 3,
            name: '*灵活就业退休人员划账户',
            id: '3-1-3',
            url: 'N0301.html#/N030103'
          },
          {
            orderNo: 4,
            name: '*个人账户注入',
            id: '3-1-4',
            url: 'N0301.html#/N030104'
          },
          {
            orderNo: 5,
            name: '*个人账户预划',
            id: '3-1-5',
            url: 'N0301.html#/N030105'
          },
          {
            orderNo: 6,
            name: '*退休人员医疗账户补差',
            id: '3-1-6',
            url: 'N0301.html#/N030106'
          }
          // ,
          // {
          //   orderNo: 7,
          //   name: '*退休人员划账户',
          //   id: '3-1-7',
          //   url: 'N0301.html#/N030107'
          // }
        ]
      },
      {
        orderNo: 2,
        name: '个人账户支出管理',
        id: '3-2',
        children: [
          {
            orderNo: 1,
            name: '个人账户返还管理',
            id: '3-2-1',
            children: [
              {
                orderNo: 1,
                name: '个人账户返还经办',
                id: '3-2-1-1',
                url: 'N0406.html#/N040601'
              },
              {
                orderNo: 2,
                name: '个人账户返还审核',
                id: '3-2-1-2',
                url: 'N0406.html#/N040602?nodeNo=mbs-04060102'
              },
              {
                orderNo: 3,
                name: '个人账户返还撤销',
                id: '3-2-1-3',
                url: 'N0406.html#/N040603?nodeNo=mbs-04060102'
              },
              {
                orderNo: 4,
                name: '个人账户返还打印',
                id: '3-2-1-4',
                url: 'N0406.html#/N040604'
              }
            ]
          },
          {
            orderNo: 2,
            name: '个人账户做实管理',
            id: '3-2-2',
            children: [
              {
                orderNo: 1,
                name: '个人账户做实经办',
                id: '3-2-2-1',
                url: 'N0407.html#/N040701'
              },
              {
                orderNo: 2,
                name: '个人账户做实审核',
                id: '3-2-2-2',
                url: 'N0407.html#/N040702?nodeNo=mbs-n04070102'
              },
              {
                orderNo: 3,
                name: '个人账户做实撤销',
                id: '3-2-2-3',
                url: 'N0407.html#/N040703?nodeNo=mbs-n04070102'
              },
              {
                orderNo: 4,
                name: '个人账户做实打印',
                id: '3-2-2-4',
                url: 'N0407.html#/N040704'
              }
            ]
          },
          {
            orderNo: 3,
            name: '个人账户清退管理',
            id: '3-2-3',
            children: [
              {
                orderNo: 1,
                name: '个人账户清退经办',
                id: '3-2-3-1',
                url: 'N0408.html#/N040801'
              },
              {
                orderNo: 2,
                name: '个人账户清退审核',
                id: '3-2-3-2',
                url: 'N0408.html#/N040802?nodeNo=mbs-n04080102'
              },
              {
                orderNo: 3,
                name: '个人账户清退撤销',
                id: '3-2-3-3',
                url: 'N0408.html#/N040803?nodeNo=mbs-n04080102'
              },
              {
                orderNo: 4,
                name: '个人账户清退打印',
                id: '3-2-3-4',
                url: 'N0408.html#/N040804'
              }
            ]
          },
          {
            orderNo: 4,
            name: '年终结转',
            id: '3-2-4',
            url: 'N0409.html#/N040901'
          },
          {
            orderNo: 5,
            name: '账户共济管理',
            id: '3-2-5',
            children: [
              {
                orderNo: 1,
                name: '账户共济授权/解绑经办',
                id: '3-2-5-1',
                url: 'N0410.html#/N041001'
              },
              {
                orderNo: 2,
                name: '账户共济审核',
                id: '3-2-5-2',
                url: 'N0410.html#/N041002?nodeNo=mbs-04100102'
              }
            ]
          }/*,
          {
            orderNo: 16,
            name: '通用打印',
            id: '3-2-16',
            url: 'N0406.html#/N040605'
          } */
        ]
      }
    ]
  },
  {
    orderNo: '12',
    name: '医保目录管理',
    id: '12',
    children: [
      {
        orderNo: '12-03',
        name: '医保目录信息管理',
        id: '12-03',
        children: [
          {
            orderNo: '12-03-01',
            name: '医保目录新增经办',
            id: '12-03-01',
            url: 'N1203.html#/N120301'
          },
          {
            orderNo: '12-03-03',
            name: '医保目录新增审核',
            id: '12-03-03',
            url: 'N1203.html#/N120303?nodeNo=mbs-n12030102'
          },
          {
            orderNo: '12-03-02',
            name: '医保目录维护经办',
            id: '12-03-02',
            url: 'N1203.html#/N120302'
          },
          {
            orderNo: '12-03-04',
            name: '医保目录维护审核',
            id: '12-03-04',
            url: 'N1203.html#/N120303?nodeNo=mbs-n12030202'
          }
        ]
      },
      {
        orderNo: '12-01',
        name: '医保目录限价管理',
        id: '12-01',
        children: [
          {
            orderNo: '12-01-01',
            name: '医保目录限价维护',
            id: '12-01-01',
            url: 'N1201.html#/N120101'
          },
          {
            orderNo: '12-01-02',
            name: '医保目录限价审核',
            id: '12-01-02',
            url: 'N1201.html#/N120102?nodeNo=mbs-n12010102'
          }
        ]
      },
      {
        orderNo: '12-02',
        name: '医保目录自付比例管理',
        id: '12-02',
        children: [
          {
            orderNo: '12-02-01',
            name: '医保目录自付比例维护',
            id: '12-02-01',
            url: 'N1202.html#/N120201'
          },
          {
            orderNo: '12-02-02',
            name: '医保目录自付比例审核',
            id: '12-02-02',
            url: 'N1202.html#/N120202?nodeNo=mbs-n12020102'
          }
        ]
      },
      {
        orderNo: '12-04',
        name: '医疗药品信息管理',
        id: '12-04',
        children: [
          {
            orderNo: '12-04-01',
            name: '医疗药品限价经办',
            id: '12-04-01',
            url: 'N1204.html#/N120401'
          },
          {
            orderNo: '12-04-02',
            name: '医疗药品限价审核',
            id: '12-04-02',
            url: 'N1204.html#/N120402?nodeNo=mbs-n12040102'
          },
          {
            orderNo: '12-04-03',
            name: '医疗药品自付比例经办',
            id: '12-04-03',
            url: 'N1204.html#/N120403'
          },
          {
            orderNo: '12-04-04',
            name: '医疗药品自付比例审核',
            id: '12-04-04',
            url: 'N1204.html#/N120404?nodeNo=mbs-n12040302'
          }
        ]
      },
      {
        orderNo: '12-05',
        name: '药品通用目录管理',
        id: '12-05',
        children: [
          {
            orderNo: '12-05-01',
            name: '通用目录新增',
            id: '12-05-01',
            url: 'N1205.html#/N120501'
          },
          {
            orderNo: '12-05-02',
            name: '通用目录新增审核',
            id: '12-05-02',
            url: 'N1205.html#/N120502?nodeNo=mbs-n12050102'
          },
          {
            orderNo: '12-05-03',
            name: '通用目录维护',
            id: '12-05-03',
            url: 'N1205.html#/N120503'
          },
          {
            orderNo: '12-05-04',
            name: '通用目录维护审核',
            id: '12-05-04',
            url: 'N1205.html#/N120504?nodeNo=mbs-n12050302'
          }
        ]
      },
      {
        orderNo: '12-06',
        name: '门诊慢特病限定目录管理',
        id: '12-06',
        children: [
          {
            orderNo: '12-06-01',
            name: '限定目录登记',
            id: '12-06-01',
            url: 'N1206.html#/N120601'
          },
          {
            orderNo: '12-06-02',
            name: '限定目录登记审核',
            id: '12-06-02',
            url: 'N1206.html#/N120602?nodeNo=mbs-n12060102'
          },
          {
            orderNo: '12-06-03',
            name: '限定目录停用',
            id: '12-06-03',
            url: 'N1206.html#/N120603'
          },
          {
            orderNo: '12-06-04',
            name: '限定目录停用审核',
            id: '12-06-04',
            url: 'N1206.html#/N120604?nodeNo=mbs-n12060302'
          }
        ]
      },
      {
        orderNo: '12-07',
        name: '日间手术开展信息管理',
        id: '12-07',
        children: [
          {
            orderNo: '12-07-01',
            name: '开展信息登记',
            id: '12-07-01',
            url: 'N1207.html#/N120701'
          },
          {
            orderNo: '12-07-02',
            name: '开展信息登记审核',
            id: '12-07-02',
            url: 'N1207.html#/N120702?nodeNo=mbs-n12070102'
          },
          {
            orderNo: '12-07-03',
            name: '开展信息停用',
            id: '12-07-03',
            url: 'N1207.html#/N120703'
          },
          {
            orderNo: '12-07-04',
            name: '开展信息停用审核',
            id: '12-07-04',
            url: 'N1207.html#/N120704?nodeNo=mbs-n12070302'
          }
        ]
      },
      {
        orderNo: '12-08',
        name: '按病种结算开展信息管理',
        id: '12-08',
        children: [
          {
            orderNo: '12-08-01',
            name: '开展信息登记',
            id: '12-08-01',
            url: 'N1208.html#/N120801'
          },
          {
            orderNo: '12-08-02',
            name: '开展信息登记审核',
            id: '12-08-02',
            url: 'N1208.html#/N120802?nodeNo=mbs-n12080102'
          },
          {
            orderNo: '12-08-03',
            name: '开展信息停用',
            id: '12-08-03',
            url: 'N1208.html#/N120803'
          },
          {
            orderNo: '12-08-04',
            name: '开展信息停用审核',
            id: '12-08-04',
            url: 'N1208.html#/N120804?nodeNo=mbs-n12080302'
          }
        ]
      },
      {
        orderNo: '5-5',
        name: '门慢门特开展信息管理',
        id: '5-5',
        children: [
          {
            orderNo: '5-5-1',
            name: '开展信息登记',
            id: '5-5-1',
            url: 'N0505.html#/N050501'
          }, {
            orderNo: '5-5-2',
            name: '开展信息审核',
            id: '5-5-2',
            url: 'N0505.html#/N050502?nodeNo=mbs-n05050102'
          }, {
            orderNo: '5-5-3',
            name: '开展信息变更',
            id: '5-5-3',
            url: 'N0505.html#/N050503'
          }, {
            orderNo: '5-5-4',
            name: '开展信息变更审核',
            id: '5-5-4',
            url: 'N0505.html#/N050504?nodeNo=mbs-n05050302'
          },
          {
            orderNo: '5-5-5',
            name: '开展信息停用',
            id: '5-5-5',
            url: 'N0505.html#/N050505'
          },
          {
            orderNo: '5-5-6',
            name: '开展信息停用审核',
            id: '5-5-6',
            url: 'N0505.html#/N050506?nodeNo=mbs-n05050502'
          }
        ]
      },
      {
        orderNo: '12-09',
        name: '医疗与医保目录匹配信息管理',
        id: '12-09',
        children: [
          {
            orderNo: '12-09-01',
            name: '目录匹配维护',
            id: '12-09-01',
            url: 'N1209.html#/N120901'
          },
          {
            orderNo: '12-09-02',
            name: '目录匹配审核',
            id: '12-09-02',
            url: 'N1209.html#/N120902?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '12-10',
        name: '医疗目录特殊属性管理',
        id: '12-10',
        children: [
          {
            orderNo: '12-10-01',
            name: '医疗目录特殊属性经办',
            id: '12-10-01',
            url: 'N1210.html#/N121001'
          },
          {
            orderNo: '12-10-02',
            name: '医疗目录特殊属性审核',
            id: '12-10-02',
            url: 'N1210.html#/N121002?nodeNo=mbs-n12100102'
          }
        ]
      },
      {
        orderNo: '12-11',
        name: '特殊药品目录管理',
        id: '12-11',
        children: [
          {
            orderNo: '12-11-01',
            name: '特殊药品目录经办',
            id: '12-11-01',
            url: 'N1211.html#/N121101'
          },
          {
            orderNo: '12-11-02',
            name: '特殊药品目录审核',
            id: '12-10-02',
            url: 'N1211.html#/N121102?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '12-13',
        name: '特殊药品医师权限信息管理',
        id: '12-13',
        children: [
          {
            orderNo: '12-13-01',
            name: '特殊药品医师权限信息新增',
            id: '12-13-01',
            url: 'N1213.html#/N121301'
          },
          {
            orderNo: '12-13-02',
            name: '特殊药品医师权限信息新增审核',
            id: '12-13-02',
            url: 'N1213.html#/N121302'
          },
          {
            orderNo: '12-13-03',
            name: '特殊药品医师权限信息维护',
            id: '12-13-03',
            url: 'N1213.html#/N121303'
          },
          {
            orderNo: '12-13-04',
            name: '特殊药品医师权限信息维护审核',
            id: '12-13-04',
            url: 'N1213.html#/N121304'
          },
          {
            orderNo: '12-13-05',
            name: '特殊药品医师权限信息撤销',
            id: '12-13-05',
            url: 'N1213.html#/N121305'
          },
          {
            orderNo: '12-13-06',
            name: '特殊药品医师权限信息撤销审核',
            id: '12-13-06',
            url: 'N1213.html#/N121306'
          }
        ]
      },
      {
        orderNo: '12-14',
        name: '特殊药品医师信息管理',
        id: '12-14',
        children: [
          {
            orderNo: '12-14-01',
            name: '特殊药品医师管理经办',
            id: '12-14-01',
            url: 'N1214.html#/N121401'
          },
          {
            orderNo: '12-14-02',
            name: '特殊药品医师管理审核',
            id: '12-14-02',
            url: 'N1214.html#/N121402?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '12-15',
        name: '公改医疗机构目录限价管理',
        id: '12-15',
        children: [
          {
            orderNo: '12-15-01',
            name: '公改医疗机构目录限价维护',
            id: '12-15-01',
            url: 'N1215.html#/N121501'
          },
          {
            orderNo: '12-15-02',
            name: '公改医疗机构目录限价审核',
            id: '12-15-02',
            url: 'N1215.html#/N121501'
          }
        ]
      }
      /* {
        orderNo: '12-11',
        name: '医疗目录自付比例管理',
        id: '12-11',
        children: [
          {
            orderNo: '12-11-01',
            name: '医疗目录自付比例经办',
            id: '12-11-01',
            url: ''
          },
          {
            orderNo: '12-11-02',
            name: '医疗目录自付比例审核',
            id: '12-11-02',
            url: ''
          }
        ]
      } */
    ]
  },
  {
    orderNo: '5',
    name: '定点协议管理',
    id: '5',
    children: [
      /*
      {
        orderNo: '5-1',
        name: '定点医疗机构管理',
        id: '5-1',
        children: [
          {
            orderNo: '5-1-1',
            name: '定点医疗机构服务协议管理',
            id: '5-1-1',
            url: 'N0501.html#/N050101'
          },
          {
            orderNo: '5-1-4',
            name: '定点医疗机构暂停',
            id: '5-1-4',
            url: 'N0501.html#/N050104'
          },
          {
            orderNo: '5-1-08',
            name: '定点医疗机构科室管理',
            id: '5-1-08',
            url: 'N0501.html#/N050108'
          },
          {
            orderNo: '5-1-09',
            name: '科室暂停/终止服务',
            id: '5-1-09',
            url: 'N0501.html#/N050109'
          },
          {
            orderNo: '5-1-10',
            name: '定点医疗机构目录匹配',
            id: '5-1-10',
            url: 'N0501.html#/N050110'
          },
          {
            orderNo: '5-1-11',
            name: '退费备案登记',
            id: '5-1-11',
            url: 'N0501.html#/N050111'
          },
          {
            orderNo: '5-1-12',
            name: '无医保凭证结算备案登记',
            id: '5-1-12-1',
            url: 'N0501.html#/N050112'
          },
          {
            orderNo: '5-1-13',
            name: '医药机构考核管理',
            id: '5-1-13-1',
            url: 'N0501.html#/N050113'
          },
          {
            orderNo: '5-1-15',
            name: '卫生技术人员考核管理',
            id: '5-1-15',
            url: 'N0501.html#/N050115'
          },
          {
            orderNo: '5-1-14',
            name: '医联体管理',
            id: '5-1-14',
            url: 'N0501.html#/N050114'
          }
        ]
      },
      {
        orderNo: '5-2',
        name: '定点药店管理',
        id: '5-2',
        children: [
          {
            orderNo: '5-2-1',
            name: '定点药店服务协议管理',
            id: '5-2-1',
            url: 'N0502.html#/N050201'
          },
          {
            orderNo: '5-2-2',
            name: '定点药店银行账户管理',
            id: '5-2-2',
            url: 'N0502.html#/N050202'
          },
          {
            orderNo: '5-2-3',
            name: '定点药店开通服务管理',
            id: '5-2-3',
            url: 'N0502.html#/N050203'
          },
          {
            orderNo: '5-2-4',
            name: '定点药店暂停',
            id: '5-2-4',
            url: 'N0502.html#/N050204'
          },
          {
            orderNo: '5-2-5',
            name: '定点药店属性管理',
            id: '5-2-5',
            url: 'N0502.html#/N050205'
          },
          {
            orderNo: '5-2-6',
            name: '定点药店目录匹配',
            id: '5-2-6',
            url: 'N0502.html#/N050206'
          }
        ]
      },
      {
        orderNo: '5-3',
        name: '定点医疗机构审核',
        id: '5-3',
        children: [
          {
            orderNo: '5-3-1',
            name: '定点医疗机构服务协议审核',
            id: '5-3-1',
            url: 'N0503.html#/N050301'
          },
          {
            orderNo: '5-3-4',
            name: '定点医疗机构暂停审核',
            id: '5-3-4',
            url: 'N0503.html#/N050304'
          },
          {
            orderNo: '5-3-08',
            name: '定点医疗机构科室审核',
            id: '5-3-08',
            url: 'N0503.html#/N050308'
          },
          {
            orderNo: '5-3-09',
            name: '科室暂停/终止服务审核',
            id: '5-3-09',
            url: 'N0503.html#/N050309'
          },
          {
            orderNo: '5-3-10',
            name: '定点医疗机构目录匹配审核',
            id: '5-3-10',
            url: 'N0503.html#/N050310'
          },
          {
            orderNo: '5-3-11',
            name: '退费备案审核',
            id: '5-3-11',
            url: 'N0503.html#/N050311'
          },
          {
            orderNo: '5-3-12',
            name: '无医保凭证结算备案审核',
            id: '5-3-12',
            url: 'N0503.html#/N050312'
          },
          {
            orderNo: '5-3-13',
            name: '医药机构考核审核',
            id: '5-3-13',
            url: 'N0503.html#/N050313'
          },
          {
            orderNo: '5-3-15',
            name: '卫生技术人员考核审核',
            id: '5-3-15',
            url: 'N0503.html#/N050315'
          }
        ]
      },
      {
        orderNo: '5-4',
        name: '定点药店审核',
        id: '5-4',
        children: [
          {
            orderNo: '5-4-1',
            name: '定点药店服务协议审核',
            id: '5-4-1',
            url: 'N0504.html#/N050401'
          },
          {
            orderNo: '5-4-2',
            name: '定点药店银行账户审核',
            id: '5-4-2',
            url: 'N0504.html#/N050402'
          },
          {
            orderNo: '5-4-3',
            name: '定点药店开通服务审核',
            id: '5-4-3',
            url: 'N0504.html#/N050403'
          },
          {
            orderNo: '5-4-4',
            name: '定点药店暂停审核',
            id: '5-4-4',
            url: 'N0504.html#/N050404'
          },
          {
            orderNo: '5-4-5',
            name: '定点药店属性审核',
            id: '5-4-5',
            url: 'N0504.html#/N050405'
          },
          {
            orderNo: '5-4-6',
            name: '定点药店目录匹配审核',
            id: '5-4-6',
            url: 'N0504.html#/N050406'
          }
        ]
      }, */
      {
        orderNo: '5-6',
        name: '定点医药机构管理',
        id: '5-6',
        children: [
          {
            orderNo: '5-6-1',
            name: '业务属性管理',
            id: '5-6-1',
            children: [
              {
                orderNo: '5-6-1-1',
                name: '业务属性新增经办',
                id: '5-6-1-1',
                url: 'N0501.html#/N050105'
              },
              {
                orderNo: '5-6-1-2',
                name: '定点医药机构新增',
                id: '5-6-1-2',
                url: 'N0503.html#/N050321'
              },
              {
                orderNo: '5-6-1-3',
                name: '业务属性维护经办',
                id: '5-6-1-3',
                url: 'N0501.html#/N050105_maintain'
              },
              {
                orderNo: '5-6-1-4',
                name: '业务属性新增审核',
                id: '5-6-1-4',
                url: 'N0503.html#/N050305_addchk?nodeNo=02'
              },
              {
                orderNo: '5-6-1-5',
                name: '业务属性维护审核',
                id: '5-6-1-5',
                url: 'N0503.html#/N050305?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-2',
            name: '银行账户管理',
            id: '5-6-2',
            children: [
              {
                orderNo: '5-6-2-1',
                name: '银行账户维护经办',
                id: '5-6-2-1',
                url: 'N0501.html#/N050102'
              },
              {
                orderNo: '5-6-2-2',
                name: '银行账户维护审核',
                id: '5-6-2-2',
                url: 'N0503.html#/N050302?nodeNo=02'
              }/*,
              {
                orderNo: '5-6-2-3',
                name: '银行账户维护终审',
                id: '5-6-2-3',
                url: 'N0503.html#/N050302?nodeNo=03'
              } */
            ]
          },
          {
            orderNo: '5-6-3',
            name: '医药服务管理',
            id: '5-6-3',
            children: [
              {
                orderNo: '5-6-3-1',
                name: '医药服务开通/暂停经办',
                id: '5-6-3-1',
                url: 'N0501.html#/N050103'
              },
              {
                orderNo: '5-6-3-2',
                name: '医药服务开通/暂停审核',
                id: '5-6-3-2',
                url: 'N0503.html#/N050303?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-4',
            name: '附加属性管理',
            id: '5-6-4',
            children: [
              {
                orderNo: '5-6-4-1',
                name: '附加属性信息经办',
                id: '5-6-4-1',
                url: 'N0501.html#/N050116'
              },
              {
                orderNo: '5-6-4-2',
                name: '附加属性信息审核',
                id: '5-6-4-2',
                url: 'N0503.html#/N050316?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-5',
            name: '费用结算经办机构管理',
            id: '5-6-5',
            children: [
              {
                orderNo: '5-6-5-1',
                name: '经办机构登记/维护经办',
                id: '5-6-5-1',
                url: 'N0501.html#/N050119'
              },
              {
                orderNo: '5-6-5-2',
                name: '经办机构登记/维护审核',
                id: '5-6-5-2',
                url: 'N0503.html#/N050319?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-6',
            name: '医疗集团关系管理',
            id: '5-6-6',
            children: [
              {
                orderNo: '5-6-6-1',
                name: '医疗集团关系管理经办',
                id: '5-6-6-1',
                url: 'N0501.html#/N050120'
              },
              {
                orderNo: '5-6-6-2',
                name: '医疗集团关系管理审核',
                id: '5-6-6-2',
                url: 'N0503.html#/N050320?nodeNo=02'
              }
            ]
          }
        ]
      },
      {
        orderNo: '5-7',
        name: '医保医师服务管理',
        id: '5-7',
        children: [
          {
            orderNo: '5-7-01',
            name: '医师信息管理',
            id: '5-7-01',
            url: 'N0501.html#/N050107'
          },
          {
            orderNo: '5-7-02',
            name: '医师信息管理审核',
            id: '5-7-02',
            url: 'N0503.html#/N050307?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '5-8',
        name: '定点医药机构病种管理',
        id: '5-8',
        children: [
          {
            orderNo: '5-8-01',
            name: '开通病种新增',
            id: '5-8-01',
            url: 'N0501.html#/N050117'
          },
          {
            orderNo: '5-8-02',
            name: '病种暂停/启用',
            id: '5-8-02',
            url: 'N0501.html#/N050118'
          },
          {
            orderNo: '5-8-03',
            name: '病种经办审核',
            id: '5-8-03',
            url: 'N0503.html#/N050317?nodeNo=02'
          },
          {
            orderNo: '5-8-04',
            name: '定点医药机构治疗病种新增',
            id: '5-8-04',
            url: 'N0501.html#/N050121'
          },
          {
            orderNo: '5-8-05',
            name: '治疗病种暂停/启用',
            id: '5-8-05',
            url: 'N0501.html#/N050122'
          },
          {
            orderNo: '5-8-06',
            name: '治疗病种经办审核',
            id: '5-8-06',
            url: 'N0503.html#/N050322?nodeNo=02'
          },
        ]
      }
    ]
  },

  {
    orderNo: '6',
    name: '审核监管处罚(城职)',
    id: '6',
    children: [
      /*
      {
        orderNo: '6-1',
        name: '待遇封锁险种依赖关系管理',
        id: '6-1',
        children: [
          {
            orderNo: '6-1-1',
            name: '待遇封锁险种依赖关系登记',
            id: '6-1-1',
            url: 'N0601.html#/N060101'
          },
          {
            orderNo: '6-1-2',
            name: '待遇封锁险种依赖关系变更',
            id: '6-1-2',
            url: 'N0601.html#/N060102'
          },
          {
            orderNo: '6-1-3',
            name: '待遇封锁险种依赖关系审核',
            id: '6-1-3',
            url: 'N0601.html#/N060103'
          }
        ]
      }, */
      {
        orderNo: '6-2',
        name: '白名单管理',
        id: '6-2',
        children: [
          {
            orderNo: '6-2-1',
            name: '白名单登记',
            id: '6-2-1',
            url: 'N0602.html#/N060201?personInsuType=1'
          },
          {
            orderNo: '6-2-2',
            name: '白名单维护',
            id: '6-2-2',
            url: 'N0602.html#/N060202?personInsuType=1'
          },
          {
            orderNo: '6-2-3',
            name: '白名单撤销',
            id: '6-2-3',
            url: 'N0602.html#/N060203?personInsuType=1'
          },
          {
            orderNo: '6-2-4',
            name: '白名单登记审核',
            id: '6-2-4',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060201&nodeNo=mbs-n06020102&personInsuType=1'
          },
          {
            orderNo: '6-2-5',
            name: '白名单维护审核',
            id: '6-2-5',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060202&nodeNo=mbs-n06020202&personInsuType=1'
          },
          {
            orderNo: '6-2-6',
            name: '白名单撤销审核',
            id: '6-2-6',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060203&nodeNo=mbs-n06020302&personInsuType=1'
          }
        ]
      },
      {
        orderNo: '6-3',
        name: '个人待遇管理',
        id: '6-3',
        children: [
          {
            orderNo: '6-3-1',
            name: '个人待遇暂停',
            id: '6-3-1',
            url: 'N0603.html#/N060301?personInsuType=1'
          },
          {
            orderNo: '6-3-2',
            name: '个人待遇暂停恢复',
            id: '6-3-2',
            url: 'N0603.html#/N060302?personInsuType=1'
          },
          {
            orderNo: '6-4-4',
            name: '个人待遇暂停撤销',
            id: '6-4-1',
            url: 'N0604.html#/N060401?personInsuType=1'
          },
          {
            orderNo: '6-4-2',
            name: '个人待遇暂停审核',
            id: '6-4-2',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060301&nodeNo=mbs-n06030102&personInsuType=1'
          },
          {
            orderNo: '6-4-3',
            name: '个人待遇暂停恢复审核',
            id: '6-4-3',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060302&nodeNo=mbs-n06030202&personInsuType=1'
          },
          {
            orderNo: '6-4-4',
            name: '个人待遇暂停撤销审核',
            id: '6-4-4',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060401&nodeNo=mbs-n06040102&personInsuType=1'
          }
        ]
      },
      {
        orderNo: '6-5',
        name: '单位待遇管理',
        id: '6-5',
        children: [
          {
            orderNo: '6-5-1',
            name: '单位待遇暂停',
            id: '6-5-1',
            url: 'N0605.html#/N060501?personInsuType=1'
          },
          {
            orderNo: '6-5-2',
            name: '单位待遇暂停恢复',
            id: '6-5-2',
            url: 'N0605.html#/N060502?personInsuType=1'
          },
          {
            orderNo: '6-6-1',
            name: '单位待遇暂停撤销',
            id: '6-6-1',
            url: 'N0606.html#/N060601?personInsuType=1'
          },
          {
            orderNo: '6-6-2',
            name: '单位待遇暂停审核',
            id: '6-6-2',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060501&nodeNo=mbs-n06050102&personInsuType=1'
          },
          {
            orderNo: '6-6-3',
            name: '单位待遇暂停恢复审核',
            id: '6-6-3',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060502&nodeNo=mbs-n06050202&personInsuType=1'
          },
          {
            orderNo: '6-6-4',
            name: '单位待遇暂停撤销审核',
            id: '6-6-4',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060601&nodeNo=mbs-n06060102&personInsuType=1'
          }
        ]
      }
    ]
  },
  {
    orderNo: '10',
    name: '审核监管处罚(城乡)',
    id: '10',
    children: [
      /*
      {
        orderNo: '10-1',
        name: '待遇封锁险种依赖关系管理',
        id: '10-1',
        children: [
          {
            orderNo: '10-1-1',
            name: '待遇封锁险种依赖关系登记',
            id: '10-1-1',
            url: 'N0601.html#/N060101'
          },
          {
            orderNo: '10-1-2',
            name: '待遇封锁险种依赖关系变更',
            id: '10-1-2',
            url: 'N0601.html#/N060102'
          },
          {
            orderNo: '10-1-3',
            name: '待遇封锁险种依赖关系审核',
            id: '10-1-3',
            url: 'N0601.html#/N060103'
          }
        ]
      }, */
      {
        orderNo: '10-2',
        name: '白名单管理',
        id: '10-2',
        children: [
          {
            orderNo: '10-2-1',
            name: '白名单登记',
            id: '10-2-1',
            url: 'N0602.html#/N060201?personInsuType=2'
          },
          {
            orderNo: '10-2-2',
            name: '白名单维护',
            id: '10-2-2',
            url: 'N0602.html#/N060202?personInsuType=2'
          },
          {
            orderNo: '10-2-3',
            name: '白名单撤销',
            id: '10-2-3',
            url: 'N0602.html#/N060203?personInsuType=2'
          },
          {
            orderNo: '10-2-4',
            name: '白名单登记审核',
            id: '10-2-4',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060201&nodeNo=mbs-n06020102&personInsuType=2'
          },
          {
            orderNo: '10-2-5',
            name: '白名单维护审核',
            id: '10-2-5',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060202&nodeNo=mbs-n06020202&personInsuType=2'
          },
          {
            orderNo: '10-2-6',
            name: '白名单撤销审核',
            id: '10-2-6',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060203&nodeNo=mbs-n06020302&personInsuType=2'
          }
        ]
      },
      {
        orderNo: '10-3',
        name: '个人待遇管理',
        id: '10-3',
        children: [
          {
            orderNo: '10-3-1',
            name: '个人待遇暂停',
            id: '10-3-1',
            url: 'N0603.html#/N060301?personInsuType=2'
          },
          {
            orderNo: '10-3-2',
            name: '个人待遇暂停恢复',
            id: '10-3-2',
            url: 'N0603.html#/N060302?personInsuType=2'
          },
          {
            orderNo: '10-4-4',
            name: '个人待遇暂停撤销',
            id: '10-4-1',
            url: 'N0604.html#/N060401?personInsuType=2'
          },
          {
            orderNo: '10-4-2',
            name: '个人待遇暂停审核',
            id: '10-4-2',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060301&nodeNo=mbs-n06030102&personInsuType=2'
          },
          {
            orderNo: '10-4-3',
            name: '个人待遇暂停恢复审核',
            id: '10-4-3',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060302&nodeNo=mbs-n06030202&personInsuType=2'
          },
          {
            orderNo: '10-4-4',
            name: '个人待遇暂停撤销审核',
            id: '10-4-4',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060401&nodeNo=mbs-n06040102&personInsuType=2'
          }
        ]
      },
      {
        orderNo: '10-5',
        name: '单位待遇管理',
        id: '10-5',
        children: [
          {
            orderNo: '10-5-1',
            name: '单位待遇暂停',
            id: '10-5-1',
            url: 'N0605.html#/N060501?personInsuType=2'
          },
          {
            orderNo: '10-5-2',
            name: '单位待遇暂停恢复',
            id: '10-5-2',
            url: 'N0605.html#/N060502?personInsuType=2'
          },
          {
            orderNo: '10-6-1',
            name: '单位待遇暂停撤销',
            id: '10-6-1',
            url: 'N0606.html#/N060601?personInsuType=2'
          },
          {
            orderNo: '10-6-2',
            name: '单位待遇暂停审核',
            id: '10-6-2',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060501&nodeNo=mbs-n06050102&personInsuType=2'
          },
          {
            orderNo: '10-6-3',
            name: '单位待遇暂停恢复审核',
            id: '10-6-3',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060502&nodeNo=mbs-n06050202&personInsuType=2'
          },
          {
            orderNo: '10-6-4',
            name: '单位待遇暂停撤销审核',
            id: '10-6-4',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060601&nodeNo=mbs-n06060102&personInsuType=2'
          }
        ]
      }
    ]
  },
  {
    orderNo: '16',
    name: '医疗救助管理(城职)',
    id: '16',
    children: [
      {
        orderNo: '16-1',
        name: '医疗救助人员管理',
        id: '16-1',
        children: [
          {
            orderNo: '16-1-1',
            name: '医疗救助人员登记',
            id: '16-1-1',
            url: 'N1001.html#/N100101?personInsuType=1'
          },
          {
            orderNo: '16-1-2',
            name: '救助人员信息审核',
            id: '16-1-2',
            url: 'N1001.html#/N100102?personInsuType=1'
          },
          {
            orderNo: '16-1-3',
            name: '救助人员信息公示',
            id: '16-1-3',
            url: 'N1001.html#/N100103?personInsuType=1'
          },
          {
            orderNo: '16-1-8',
            name: '公示信息审核',
            id: '16-1-8',
            url: 'N1001.html#/N100108?personInsuType=1'
          },
          {
            orderNo: '16-1-6',
            name: '公示结果审核',
            id: '16-1-6',
            url: 'N1001.html#/N100106?personInsuType=1'
          },
          // {
          //   orderNo: '16-1-9',
          //   name: '救助人员信息二级公示',
          //   id: '16-1-9',
          //   url: 'N1001.html#/N100109?personInsuType=1'
          // },
          // {
          //   orderNo: '16-1-10',
          //   name: '二级公示信息审核',
          //   id: '16-1-10',
          //   url: 'N1001.html#/N100110?personInsuType=1'
          // },
          // {
          //   orderNo: '16-1-11',
          //   name: '二级公示结果审核',
          //   id: '16-1-11',
          //   url: 'N1001.html#/N100111?personInsuType=1'
          // },
          {
            orderNo: '16-1-7',
            name: '公示信息打印',
            id: '16-1-7',
            url: 'N1001.html#/N100107?personInsuType=1'
          },
          {
            orderNo: '16-1-4',
            name: '公示信息举报',
            id: '16-1-4',
            url: 'N1001.html#/N100104?personInsuType=1'
          },
          {
            orderNo: '16-1-5',
            name: '举报信息审核',
            id: '16-1-5',
            url: 'N1001.html#/N100105?personInsuType=1'
          },
          {
            orderNo: '16-1-12',
            name: '医疗救助撤销',
            id: '16-1-12',
            url: 'N1001.html#/N100112?personInsuType=1'
          }
        ]
      },
      {
        orderNo: '16-2',
        name: '医疗救助报销管理',
        id: '16-2',
        children: [
          {
            orderNo: '16-2-1',
            name: '医疗救助登记',
            id: '16-2-1',
            url: 'N1002.html#/N100201?nodeNo=mbs-n10020101&personInsuType=1'
          },
          {
            orderNo: '16-2-2',
            name: '医疗救助结算',
            id: '16-2-2',
            url: 'N1002.html#/N100202?nodeNo=mbs-n10020102&personInsuType=1'
          },
          {
            orderNo: '16-2-3',
            name: '医疗救助审核',
            id: '16-2-3',
            url: 'N1002.html#/N100203?nodeNo=mbs-n10020103&personInsuType=1'
          },
          {
            orderNo: '16-2-4',
            name: '医疗救助结算单打印',
            id: '16-2-4',
            url: 'N1002.html#/N100204?personInsuType=1'
          },
          {
            orderNo: '16-2-5',
            name: '医疗救助撤销',
            id: '16-2-5',
            url: 'N1002.html#/N100205?personInsuType=1'
          },
          {
            orderNo: '16-2-6',
            name: '医疗救助结算撤销',
            id: '16-2-6',
            url: 'N1002.html#/N100206?nodeNo=mbs-n10020103&personInsuType=1'
          },
          {
            orderNo: '16-2-7',
            name: '医疗救助审核撤销',
            id: '16-2-7',
            url: 'N1002.html#/N100207?personInsuType=1'
          }
        ]
      },
      {
        orderNo: '16-0',
        name: '统计报表',
        id: '16-0',
        children: [
          {
            orderNo: '16-0-1',
            name: '医疗救助人员统计查询',
            id: '16-0-1',
            url: 'N1003.html#/N100301'
          }/*,
          {
            orderNo: '16-0-2',
            name: '*医疗救助月报表',
            id: '16-0-2',
            url: 'N1003.html#/N100302'
          } */
        ]
      }
    ]
  },
  {
    orderNo: '17',
    name: '医疗救助管理（城乡）',
    id: '17',
    children: [
      {
        orderNo: '17-1',
        name: '医疗救助人员管理',
        id: '17-1',
        children: [
          {
            orderNo: '17-1-1',
            name: '医疗救助人员登记',
            id: '17-1-1',
            url: 'N1001.html#/N100101?personInsuType=2'
          },
          {
            orderNo: '17-1-2',
            name: '救助人员信息审核',
            id: '17-1-2',
            url: 'N1001.html#/N100102?personInsuType=2'
          },
          {
            orderNo: '17-1-3',
            name: '救助人员信息公示',
            id: '17-1-3',
            url: 'N1001.html#/N100103?personInsuType=2'
          },
          {
            orderNo: '17-1-8',
            name: '公示信息审核',
            id: '17-1-8',
            url: 'N1001.html#/N100108?personInsuType=2'
          },
          {
            orderNo: '17-1-6',
            name: '公示结果审核',
            id: '17-1-6',
            url: 'N1001.html#/N100106?personInsuType=2'
          },
          // {
          //   orderNo: '17-1-9',
          //   name: '救助人员信息二级公示',
          //   id: '17-1-9',
          //   url: 'N1001.html#/N100109?personInsuType=2'
          // },
          // {
          //   orderNo: '17-1-10',
          //   name: '二级公示信息审核',
          //   id: '17-1-10',
          //   url: 'N1001.html#/N100110?personInsuType=2'
          // },
          // {
          //   orderNo: '17-1-11',
          //   name: '二级公示结果审核',
          //   id: '17-1-11',
          //   url: 'N1001.html#/N100111?personInsuType=2'
          // },
          {
            orderNo: '17-1-7',
            name: '公示信息打印',
            id: '17-1-7',
            url: 'N1001.html#/N100107?personInsuType=2'
          },
          {
            orderNo: '17-1-4',
            name: '公示信息举报',
            id: '17-1-4',
            url: 'N1001.html#/N100104?personInsuType=2'
          },
          {
            orderNo: '17-1-5',
            name: '举报信息审核',
            id: '17-1-5',
            url: 'N1001.html#/N100105?personInsuType=2'
          },
          {
            orderNo: '17-1-12',
            name: '医疗救助撤销',
            id: '17-1-12',
            url: 'N1001.html#/N100112?personInsuType=2'
          }
        ]
      },
      {
        orderNo: '17-2',
        name: '医疗救助报销管理',
        id: '17-2',
        children: [
          {
            orderNo: '17-2-1',
            name: '医疗救助登记',
            id: '17-2-1',
            url: 'N1002.html#/N100201?nodeNo=mbs-n10020101&personInsuType=2'
          },
          {
            orderNo: '17-2-2',
            name: '医疗救助结算',
            id: '17-2-2',
            url: 'N1002.html#/N100202?nodeNo=mbs-n10020102&personInsuType=2'
          },
          {
            orderNo: '17-2-3',
            name: '医疗救助审核',
            id: '17-2-3',
            url: 'N1002.html#/N100203?nodeNo=mbs-n10020103&personInsuType=2'
          },
          {
            orderNo: '17-2-4',
            name: '医疗救助结算单打印',
            id: '17-2-4',
            url: 'N1002.html#/N100204?personInsuType=2'
          },
          {
            orderNo: '17-2-5',
            name: '医疗救助撤销',
            id: '17-2-5',
            url: 'N1002.html#/N100205?personInsuType=2'
          },
          {
            orderNo: '17-2-6',
            name: '医疗救助结算撤销',
            id: '17-2-6',
            url: 'N1002.html#/N100206?nodeNo=mbs-n10020103&personInsuType=2'
          },
          {
            orderNo: '17-2-7',
            name: '医疗救助审核撤销',
            id: '17-2-7',
            url: 'N1002.html#/N100207?personInsuType=2'
          }
        ]
      },
      {
        orderNo: '17-0',
        name: '统计报表',
        id: '17-0',
        children: [
          {
            orderNo: '17-0-1',
            name: '医疗救助人员统计查询',
            id: '17-0-1',
            url: 'N1003.html#/N100301'
          }/*,
          {
            orderNo: '17-0-2',
            name: '*医疗救助月报表',
            id: '17-0-2',
            url: 'N1003.html#/N100302'
          } */
        ]
      }
    ]
  },
  {
    orderNo: 3,
    name: '个人待遇管理(城职)',
    id: '4',
    children: [
      {
        orderNo: 1,
        name: '个人待遇结算管理',
        id: '4-1',
        children: [
          {
            orderNo: 1,
            name: '中心手工报销',
            id: '4-0',
            children: [
              {
                orderNo: 1,
                name: '零星报销登记',
                id: '4-0-1',
                url: 'N0405.html#/N04050101?personInsuType=1'
              },
              /* {
                orderNo: 2,
                name: '登记审核',
                id: '4-0-2',
                url: 'N0405.html#/N04050102?nodeNo=mbs-n040501-02&personInsuType=1'
              }, */
              {
                orderNo: 3,
                name: '登记回退',
                id: '4-0-3',
                url: 'N0405.html#/N04050103?nodeNo=mbs-n040501-03&personInsuType=1'
              },
              /* {
                orderNo: 4,
                name: '登记修改',
                id: '4-0-4',
                url: 'N0405.html#/N040501'
              },
              {
                orderNo: 5,
                name: '修改审核',
                id: '4-0-5',
                url: 'N0405.html#/N040501'
              }, */
              {
                orderNo: 6,
                name: '明细录入',
                id: '4-0-6',
                url: 'N0405.html#/N04050106?nodeNo=mbs-n040501-03&personInsuType=1'
              },
              {
                orderNo: 7,
                name: '明细审核',
                id: '4-0-7',
                url: 'N0405.html#/N04050107?nodeNo=mbs-n040501-04&personInsuType=1'
              },
              {
                orderNo: 8,
                name: '明细回退',
                id: '4-0-8',
                url: 'N0405.html#/N04050108?personInsuType=1'
              },
              {
                orderNo: 9,
                name: '住院结算',
                id: '4-0-9',
                url: 'N0405.html#/N04050401?nodeNo=mbs-n040501-05&personInsuType=1'
              },
              {
                orderNo: 10,
                name: '门诊结算',
                id: '4-0-10',
                url: 'N0405.html#/N04050402?nodeNo=mbs-n040501-06&personInsuType=1'
              },
              {
                orderNo: 11,
                name: '结算审核',
                id: '4-0-11',
                url: 'N0405.html#/N04050403?nodeNo=mbs-n040501-07&personInsuType=1'
              },
              {
                orderNo: 12,
                name: '结算回退',
                id: '4-0-12',
                url: 'N0405.html#/N04050404?nodeNo=mbs-n040501-07&personInsuType=1'
              }
            ]
          },
          {
            orderNo: 1,
            name: '零星报销受理',
            id: '4-1-1',
            url: 'N0405.html#/N040501?personInsuType=1'
            /* 201912301436260000373600000000 */
          },
          {
            orderNo: 1,
            name: '零星报销门诊结算',
            id: '4-1-2',
            url: 'N0405.html#/N040502?nodeNo=mbs-n04050201'
            /* 201912301438120000374000000000 */
          },
          {
            orderNo: 1,
            name: '零星报销住院结算',
            id: '4-1-0',
            url: 'N0405.html#/N04050201?nodeNo=mbs-n04050202'
            /* 202003241358500000820000000000 */
          },
          /* {
            orderNo: 1,
            name: '费用明细批量录入',
            id: '4-1-3',
            url: 'N0405.html#/N040503'
          }, */
          /* {
            orderNo: 1,
            name: '零星报销复核',
            id: '4-1-4',
            url: 'N0405.html#/N040504?nodeNo=mbs-n04050301'
            /!* 202001141951440000620500000000 *!/
          },
          {
            orderNo: 1,
            name: '零星报销二次复核',
            id: '4-1-11',
            url: 'N0405.html#/N040504?nodeNo=mbs-n04050302'
            /!* 202001141951440000620500000000 *!/
          }, */
          {
            orderNo: 1,
            name: '零星报销三次复核',
            id: '4-1-12',
            url: 'N0405.html#/N040504?nodeNo=mbs-n04050303'
            /* 202001141951440000620500000000 */
          },
          {
            orderNo: 1,
            name: '零星报销撤销',
            id: '4-1-10',
            url: 'N0405.html#/N040510'
          },
          {
            orderNo: 1,
            name: '统一受理',
            id: '4-1-13',
            url: 'N0405.html#/N040511'
          },
          {
            orderNo: 1,
            name: '零星二次补差报销管理',
            id: '4-1-5',
            url: 'N0405.html#/N040505',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '4-1-5-1',
                url: 'N0405.html#/N040505?nodeNo=mbs-n0405050101'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '4-1-5-2',
                url: 'N0405.html#/N04050502'
              },
              {
                orderNo: 1,
                name: '费用明细调整',
                id: '4-1-5-3',
                url: 'N0405.html#/N04050503?nodeNo=mbs-n0405050102'
              },
              {
                orderNo: 1,
                name: '费用明细调整回退',
                id: '4-1-5-4',
                url: 'N0405.html#/N04050504?nodeNo=mbs-n0405050103'
              },
              {
                orderNo: 1,
                name: '费用结算',
                id: '4-1-5-5',
                url: 'N0405.html#/N04050505?nodeNo=mbs-n0405050103'
              }, {
                orderNo: 1,
                name: '费用结算回退',
                id: '4-1-5-6',
                url: 'N0405.html#/N04050506?nodeNo=mbs-n0405050104'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '4-1-5-7',
                url: 'N0405.html#/N04050507?nodeNo=mbs-n0405050104'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '4-1-5-8',
                url: 'N0405.html#/N04050508'
              },
              {
                orderNo: 1,
                name: '批量登记',
                id: '4-1-5-9',
                url: 'N0405.html#/N04050509?nodeNo=mbs-n0405050901'
              },
              {
                orderNo: 1,
                name: '批量登记回退',
                id: '4-1-5-10',
                url: 'N0405.html#/N04050510'
              },
              {
                orderNo: 1,
                name: '批量结算',
                id: '4-1-5-11',
                url: 'N0405.html#/N04050511?nodeNo=mbs-n0405050902'
              },
              {
                orderNo: 1,
                name: '批量结算回退',
                id: '4-1-5-12',
                url: 'N0405.html#/N04050512?nodeNo=mbs-n0405050903'
              },
              {
                orderNo: 1,
                name: '批量审核',
                id: '4-1-5-13',
                url: 'N0405.html#/N04050513?nodeNo=mbs-n0405050903'
              },
              {
                orderNo: 1,
                name: '批量审核回退',
                id: '4-1-5-14',
                url: 'N0405.html#/N04050514'
              }

            ]
          },
          {
            orderNo: 1,
            name: '年度内二次报销管理',
            id: '4-1-6',
            url: 'N0405.html#/N040506',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '4-1-6-1',
                url: 'N0405.html#/N040506?nodeNo=mbs-n0405060101'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '4-1-6-2',
                url: 'N0405.html#/N04050602'
              },
              {
                orderNo: 1,
                name: '结算',
                id: '4-1-6-3',
                url: 'N0405.html#/N04050603?nodeNo=mbs-n0405060102'
              },
              {
                orderNo: 1,
                name: '*结算回退',
                id: '4-1-6-6',
                url: 'N0405.html#/N04050606?nodeNo=mbs-n0405060103'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '4-1-6-4',
                url: 'N0405.html#/N04050604?nodeNo=mbs-n0405060103'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '4-1-6-5',
                url: 'N0405.html#/N04050605'
              }
            ]
          },
          {
            orderNo: 1,
            name: '灵活报销管理',
            id: '4-1-7',
            url: 'N0405.html#/N040507',
            children: [
              {
                orderNo: 1,
                name: '报销结果录入',
                id: '4-1-7-1',
                url: 'N0405.html#/N040507?nodeNo=mbs-N0405070101'
              },
              {
                orderNo: 1,
                name: '报销结果录入回退',
                id: '4-1-7-2',
                url: 'N0405.html#/N04050702'
              },
              {
                orderNo: 1,
                name: '报销结果审核',
                id: '4-1-7-3',
                url: 'N0405.html#/N04050703?nodeNo=mbs-N0405070102'
              },
              {
                orderNo: 1,
                name: '报销结果审核回退',
                id: '4-1-7-4',
                url: 'N0405.html#/N04050704'
              }
            ]
          },
          {
            orderNo: 1,
            name: '特殊人群奖励金拨付管理',
            id: '4-1-8',
            url: 'N0405.html#/N040508',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '4-1-8-1',
                url: 'N0405.html#/N040508?nodeNo=mbs-n04050801'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '4-1-8-2',
                url: 'N0405.html#/N04050802'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '4-1-8-3',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050802'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '4-1-8-4',
                url: 'N0405.html#/N04050804'
              }/*,
              {
                orderNo: 1,
                name: '二次审核',
                id: '4-1-8-5',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050803'
              },
              {
                orderNo: 1,
                name: '三次审核',
                id: '4-1-8-6',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050804'
              } */
            ]
          },
          {
            orderNo: 1,
            name: '个人零星报销单据打印',
            id: '4-1-9',
            url: 'N0405.html#/N040509'
          }
        ]
      },
      {
        orderNo: '4-2',
        name: '人员就医登记管理',
        id: '4-2',
        children: [
          {
            orderNo: '4-2-01',
            name: '门慢门特登记',
            id: '4-2-01',
            children: [
              {
                orderNo: '4-2-01_01',
                name: '门慢门特登记',
                id: '4-2-01_01',
                url: 'N0402.html#/N040201?personInsuType=1'
              },
              {
                orderNo: '4-2-01_02',
                name: '门慢门特登记审核',
                id: '4-2-1_02',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n0402010102&personInsuType=1'
              },
              {
                orderNo: '4-2-01_03',
                name: '门慢门特撤销',
                id: '4-2-1_03',
                url: 'N0402.html#/N040201_02?personInsuType=1'
              },
              {
                orderNo: '4-2-01_04',
                name: '门慢门特撤销审核',
                id: '4-2-01_04',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n0402010302&personInsuType=1'
              },
              {
                orderNo: '4-2-01_05',
                name: '门慢门特维护',
                id: '4-2-01_05',
                url: 'N0402.html#/N040201_03?personInsuType=1'
              },
              {
                orderNo: '4-2-01_06',
                name: '门慢门特维护审核',
                id: '4-2-01_06',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n0402010202&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-23',
            name: '门慢门特年审(批量)',
            id: '4-2-23',
            children: [
              {
                orderNo: '4-2-23_01',
                name: '门慢门特年审',
                id: '4-2-23_01',
                url: 'N0402.html#/N040222?personInsuType=1'
              },
              {
                orderNo: '4-2-23_02',
                name: '门慢门特批量登记',
                id: '4-2-23_02',
                url: 'N0402.html#/N040224?personInsuType=1'
              },
              {
                orderNo: '4-2-23_03',
                name: '门慢门特批量登记审核',
                id: '4-2-23_03',
                url: 'N0402.html#/N040224_01?nodeNo=mbs-n040224-add02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-16',
            name: '门慢门特用药范围维护',
            id: '4-2-16',
            children: [
              {
                orderNo: '4-2-16',
                name: '门慢门特用药范围维护',
                id: '4-2-16',
                url: 'N0402.html#/N040216?personInsuType=1'
              },
              {
                orderNo: '4-2-16_01',
                name: '门慢门特用药范围维护审核',
                id: '4-2-16_01',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n04021602&personInsuType=1'
              },
              {
                orderNo: '4-2-16_02',
                name: '门慢门特用药范围维护撤销',
                id: '4-2-16_02',
                url: 'N0402.html#/N040216_02?personInsuType=1'
              },
              {
                orderNo: '4-2-16_03',
                name: '门慢门特用药范围维护撤销审核',
                id: '4-2-16_03',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n040216-cx02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-9',
            name: '异地安置登记',
            id: '4-2-9',
            children: [
              {
                orderNo: '4-2-09',
                name: '异地安置登记',
                id: '4-2-09',
                url: 'N0402.html#/N040209?personInsuType=1'
              },
              {
                orderNo: '4-2-09_01',
                name: '异地安置登记审核',
                id: '4-2-09_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n04020902&personInsuType=1'
              },
              {
                orderNo: '4-2-09_02',
                name: '异地安置撤销',
                id: '4-2-09_02',
                url: 'N0402.html#/N040209_02?personInsuType=1'
              },
              {
                orderNo: '4-2-09_02_01',
                name: '异地安置撤销审核',
                id: '4-2-09_02_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-cx02&personInsuType=1'
              },
              {
                orderNo: '4-2-09_03',
                name: '异地安置变更',
                id: '4-2-09_03',
                url: 'N0402.html#/N040209_03?personInsuType=1'
              },
              {
                orderNo: '4-2-09_03_01',
                name: '异地安置变更审核',
                id: '4-2-09_04',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-wh02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-14',
            name: '生育备案',
            id: '4-2-14',
            children: [
              {
                orderNo: '4-2-14-1',
                name: '生育备案登记',
                id: '4-2-14-1',
                url: 'N0402.html#/N040214?personInsuType=1'
              },
              {
                orderNo: '4-2-14_01',
                name: '生育备案登记审核',
                id: '4-2-14_01',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140102&personInsuType=1'
              },
              /*
              {
                orderNo: '4-2-14_02',
                name: '生育备案复审',
                id: '4-2-14_02',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140103&personInsuType=1'
              }, */
              {
                orderNo: '4-2-14_03',
                name: '生育备案信息撤销',
                id: '4-2-14_03',
                url: 'N0402.html#/N040214_02?personInsuType=1'
              },

              {
                orderNo: '4-2-14_04',
                name: '生育备案撤销审核',
                id: '4-2-14_04',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140302&personInsuType=1'
              },
              /* {
                orderNo: '4-2-14_05',
                name: '生育备案撤销复审',
                id: '4-2-14_05',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140303&personInsuType=1'
              }, */
              {
                orderNo: '4-2-14_06',
                name: '生育备案信息维护',
                id: '4-2-14_06',
                url: 'N0402.html#/N040214_03?personInsuType=1'
              },

              {
                orderNo: '4-2-14_07',
                name: '生育备案维护审核',
                id: '4-2-14_07',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140202&personInsuType=1'
              }
              /* {
                orderNo: '4-2-14_08',
                name: '生育备案维护复审',
                id: '4-2-14_08',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140203&personInsuType=1'
              } */
            ]
          },
          {
            orderNo: '4-2-24',
            name: '离休老干特批药登记',
            id: '4-2-24',
            children: [
              {
                orderNo: '4-2-24_01',
                name: '离休老干特批药登记',
                id: '4-2-24_01',
                url: 'N0402.html#/N040225'
              },
              {
                orderNo: '4-2-24_02',
                name: '离休老干特批药登记审核',
                id: '4-2-24_02',
                url: 'N0402.html#/N040225_01?nodeNo=mbs-n04022502'
              },
              {
                orderNo: '4-2-24_03',
                name: '离休老干特批药撤销',
                id: '4-2-24_03',
                url: 'N0402.html#/N040225_cx'
              },
              {
                orderNo: '4-2-24_04',
                name: '离休老干特批药撤销审核',
                id: '4-2-24_04',
                url: 'N0402.html#/N040225_01?nodeNo=mbs-n040225-cx02'
              },
              {
                orderNo: '4-2-24_05',
                name: '离休老干特批药维护',
                id: '4-2-24_05',
                url: 'N0402.html#/N040225_wh'
              },
              {
                orderNo: '4-2-24_06',
                name: '离休老干特批药维护审核',
                id: '4-2-24_06',
                url: 'N0402.html#/N040225_01?nodeNo=mbs-n040225-wh02'
              }
            ]
          },
          {
            orderNo: '4-2-22',
            name: '无医保凭证结算备案登记',
            id: '4-2-22',
            children: [
              {
                orderNo: '4-2-22_01',
                name: '无医保凭证结算备案登记',
                id: '4-2-22_01',
                url: 'N0402.html#/N040223?personInsuType=1'
              },
              {
                orderNo: '4-2-22_02',
                name: '无医保凭证结算备案登记审核',
                id: '4-2-22_02',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n0402230102&personInsuType=1'
              },
              {
                orderNo: '4-2-22_03',
                name: '无医保凭证结算备案撤销',
                id: '4-2-22_03',
                url: 'N0402.html#/N040223_02?personInsuType=1'
              },
              {
                orderNo: '4-2-22_04',
                name: '无医保凭证结算备案撤销审核',
                id: '4-2-22_04',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n0402230202&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-02',
            name: '按病种结算登记',
            id: '4-2-2',
            children: [
              {
                orderNo: '4-2-02',
                name: '按病种结算登记',
                id: '4-2-2',
                url: 'N0402.html#/N040202?personInsuType=1'
              },
              {
                orderNo: '4-2-02-01',
                name: '按病种结算审核',
                id: '4-2-2-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n04020202&personInsuType=1'
              },
              {
                orderNo: '4-2-02_02',
                name: '按病种结算撤销',
                id: '4-2-2-02',
                url: 'N0402.html#/N040202_02?personInsuType=1'
              },
              {
                orderNo: '4-2-02-02-01',
                name: '按病种结算撤销审核',
                id: '4-2-2-02-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202-cx02&personInsuType=1'
              },
              {
                orderNo: '4-2-02-03',
                name: '按病种结算维护',
                id: '4-2-2-03',
                url: 'N0402.html#/N040202_03?personInsuType=1'
              },
              {
                orderNo: '4-2-02-03-01',
                name: '按病种结算维护审核',
                id: '4-2-2-03-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202-wh02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-03',
            name: '意外伤害登记',
            id: '4-2-03',
            children: [
              {
                orderNo: '4-2-03_01',
                name: '意外伤害登记',
                id: '4-2-03_01',
                url: 'N0402.html#/N040203?personInsuType=1'
              },
              {
                orderNo: '4-2-03_02',
                name: '意外伤害登记审核',
                id: '4-2-03_02',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n0402030102&personInsuType=1'
              },
              {
                orderNo: '4-2-03_03',
                name: '意外伤害撤销',
                id: '4-2-03_03',
                url: 'N0402.html#/N040203_02?personInsuType=1'
              },
              {
                orderNo: '4-2-03_04',
                name: '意外伤害撤销审核',
                id: '4-2-03_04',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n0402030202&personInsuType=1'
              },
              {
                orderNo: '4-2-03_05',
                name: '意外伤害变更',
                id: '4-2-03_05',
                url: 'N0402.html#/N040203_03?personInsuType=1'
              },
              {
                orderNo: '4-2-03_06',
                name: '意外伤害变更审核',
                id: '4-2-03_06',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n0402030302&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-04',
            name: '就医定点医疗机构登记',
            id: '4-2-04',
            children: [
              {
                orderNo: '4-2-04_01',
                name: '就医定点医疗机构登记',
                id: '4-2-04_01',
                url: 'N0402.html#/N040204?personInsuType=1'
              },
              {
                orderNo: '4-2-04_02',
                name: '就医定点医疗机构审核',
                id: '4-2-04_02',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n0402040102&personInsuType=1'
              },
              {
                orderNo: '4-2-04_03',
                name: '就医定点医疗机构撤销',
                id: '4-2-04_03',
                url: 'N0402.html#/N040204_02?personInsuType=1'
              },
              {
                orderNo: '4-2-04_04',
                name: '就医定点医疗机构撤销审核',
                id: '4-2-04_04',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n0402040202&personInsuType=1'
              },
              {
                orderNo: '4-2-04_05',
                name: '就医定点医疗机构停用',
                id: '4-2-04_05',
                url: 'N0402.html#/N040204_03?personInsuType=1'
              },
              {
                orderNo: '4-2-04_06',
                name: '就医定点医疗机构停用审核',
                id: '4-2-04_06',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n0402040302&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-05',
            name: '家庭病床登记',
            id: '4-2-05',
            children: [
              {
                orderNo: '4-2-05_01',
                name: '家庭病床登记',
                id: '4-2-05_01',
                url: 'N0402.html#/N040205?personInsuType=1'
              },
              {
                orderNo: '4-2-05_02',
                name: '家庭病床登记审核',
                id: '4-2-05_02',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n0402050102&personInsuType=1'
              },
              {
                orderNo: '4-2-05_03',
                name: '家庭病床撤销',
                id: '4-2-05_03',
                url: 'N0402.html#/N040205_02?personInsuType=1'
              },
              {
                orderNo: '4-2-05_04',
                name: '家庭病床撤销审核',
                id: '4-2-05_04',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n0402050202&personInsuType=1'
              },
              {
                orderNo: '4-2-05_05',
                name: '家庭病床维护',
                id: '4-2-05_05',
                url: 'N0402.html#/N040205_03?personInsuType=1'
              },
              {
                orderNo: '4-2-05_06',
                name: '家庭病床维护审核',
                id: '4-2-05_06',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n0402050302&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-06',
            name: '家庭医生签约登记',
            id: '4-2-06',
            children: [
              {
                orderNo: '4-2-06_01',
                name: '家庭医生签约登记',
                id: '4-2-06_01',
                url: 'N0402.html#/N040206?personInsuType=1'
              },
              {
                orderNo: '4-2-06_02',
                name: '家庭医生签约登记审核',
                id: '4-2-06_02',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n0402060102&personInsuType=1'
              },
              {
                orderNo: '4-2-06_03',
                name: '家庭医生签约撤销',
                id: '4-2-06_03',
                url: 'N0402.html#/N040206_02?personInsuType=1'
              },
              {
                orderNo: '4-2-06_04',
                name: '家庭医生签约撤销审核',
                id: '4-2-06_04',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n0402060202&personInsuType=1'
              },
              {
                orderNo: '4-2-06_05',
                name: '家庭医生签约维护',
                id: '4-2-06_05',
                url: 'N0402.html#/N040206_03?personInsuType=1'
              },
              {
                orderNo: '4-2-06_06',
                name: '家庭医生签约维护审核',
                id: '4-2-06_06',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n0402060302&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-07',
            name: '转诊转院备案',
            id: '4-2-07',
            children: [
              {
                orderNo: '4-2-07-1',
                name: '转诊转院登记',
                id: '4-2-07-1',
                url: 'N0402.html#/N040207?personInsuType=1'
              },
              {
                orderNo: '4-2-07_01',
                name: '转诊转院审核',
                id: '4-2-07_01',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070102&personInsuType=1'
              },
              {
                orderNo: '4-2-07_02',
                name: '转诊转院撤销',
                id: '4-2-07_02',
                url: 'N0402.html#/N040207_02?personInsuType=1'
              },

              {
                orderNo: '4-2-07_03',
                name: '转诊转院撤销审核',
                id: '4-2-07_03',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070302&personInsuType=1'
              },
              /* {
                orderNo: '4-2-07_04',
                name: '转诊转院撤销复审',
                id: '4-2-07_04',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070303&personInsuType=1'
              }, */
              {
                orderNo: '4-2-07_05',
                name: '转诊转院信息维护',
                id: '4-2-07_05',
                url: 'N0402.html#/N040207_03?personInsuType=1'
              },

              {
                orderNo: '4-2-07_06',
                name: '转诊转院信息维护审核',
                id: '4-2-07_06',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070202&personInsuType=1'
              }
              /* {
                orderNo: '4-2-07_07',
                name: '转诊转院信息维护复审',
                id: '4-2-07_07',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070203&personInsuType=1'
              } */

            ]
          },
          {
            orderNo: '4-2-8',
            name: '异地急诊住院登记',
            id: '4-2-8',
            children: [
              {
                orderNo: '4-2-08',
                name: '异地急诊住院登记',
                id: '4-2-08',
                url: 'N0402.html#/N040208?personInsuType=1'
              },
              {
                orderNo: '4-2-08-01',
                name: '异地急诊住院登记审核',
                id: '4-2-08-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n04020802&personInsuType=1'
              },
              {
                orderNo: '4-2-08-02',
                name: '异地急诊住院撤销',
                id: '4-2-08-02',
                url: 'N0402.html#/N040208_02?personInsuType=1'
              },
              {
                orderNo: '4-2-08-03',
                name: '异地急诊住院撤销审核',
                id: '4-2-08-02-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-cx02&personInsuType=1'
              },
              {
                orderNo: '4-2-08-04',
                name: '异地急诊住院变更',
                id: '4-2-08-03',
                url: 'N0402.html#/N040208_03?personInsuType=1'
              },
              {
                orderNo: '4-2-08-05',
                name: '异地急诊住院变更审核',
                id: '4-2-08-03-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-wh02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-10',
            name: '特检特治登记',
            id: '4-2-10',
            children: [
              {
                orderNo: '4-2-10-00',
                name: '特检特治登记',
                id: '4-2-10-00',
                url: 'N0402.html#/N040210?personInsuType=1'
              },
              {
                orderNo: '4-2-10-01',
                name: '特检特治登记审核',
                id: '4-2-10-01',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n04021002&personInsuType=1'
              },
              {
                orderNo: '4-2-10-02',
                name: '特检特治撤销',
                id: '4-2-10-02',
                url: 'N0402.html#/N040210_02?personInsuType=1'
              },
              {
                orderNo: '4-2-10-03',
                name: '特检特治撤销审核',
                id: '4-2-10-03',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n040210-sc02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-11',
            name: '特殊药品登记',
            id: '4-2-11',
            children: [
              {
                orderNo: '4-2-11-00',
                name: '特殊药品登记',
                id: '4-2-11-00',
                url: 'N0402.html#/N040211?personInsuType=1'
              },
              {
                orderNo: '4-2-11-01',
                name: '特殊药品登记审核',
                id: '4-2-11-01',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n04021102&personInsuType=1'
              },
              {
                orderNo: '4-2-11-02',
                name: '特殊药品撤销',
                id: '4-2-11-02',
                url: 'N0402.html#/N040211_02?personInsuType=1'
              },
              {
                orderNo: '4-2-11-03',
                name: '特殊药品撤销审核',
                id: '4-2-11-03',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n040211-cx02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-12',
            name: '长期带药登记',
            id: '4-2-12-00',
            children: [
              {
                orderNo: '4-2-12-00',
                name: '长期带药登记',
                id: '4-2-12-00',
                url: 'N0402.html#/N040212?personInsuType=1'
              },
              {
                orderNo: '4-2-12-01',
                name: '长期带药审核',
                id: '4-2-12-01',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n04021202&personInsuType=1'
              },
              {
                orderNo: '4-2-12-02',
                name: '长期带药撤销',
                id: '4-2-12-02',
                url: 'N0402.html#/N040212_02?personInsuType=1'
              },
              {
                orderNo: '4-2-12-03',
                name: '长期带药撤销审核',
                id: '4-2-12-03',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n040212-cx02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-18',
            name: '异地安置网上申请信息下载',
            id: '4-2-18',
            children: [
              {
                orderNo: '4-2-18_01',
                name: '异地安置网上申请信息下载',
                id: '4-2-18_01',
                url: 'N0402.html#/N040218?personInsuType=1'
              },
              {
                orderNo: '4-2-18_02',
                name: '异地安置网上申请信息审核',
                id: '4-2-18_02',
                url: 'N0402.html#/N040219?personInsuType=1'
              },
              {
                orderNo: '4-2-18_03',
                name: '异地安置信息补传',
                id: '4-2-18_03',
                url: 'N0402.html#/N040220?personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-13',
            name: '代开药品登记',
            id: '4-2-13',
            children: [
              {
                orderNo: '4-2-13_01',
                name: '代开药品登记',
                id: '4-2-13_01',
                url: 'N0402.html#/N040213?personInsuType=1'
              },
              {
                orderNo: '4-2-13_02',
                name: '代开药品审核',
                id: '4-2-13_02',
                url: 'N0402.html#/N040213_01?personInsuType=1'
              }
            ]
          },
          // {
          //   orderNo: '4-2-17',
          //   name: '死亡人员业务暂停管理',
          //   id: '4-2-17',
          //   url: 'N0402.html#/N040217'
          // }
          {
            orderNo: '4-2-21',
            name: '外检外购登记',
            id: '4-2-21',
            children: [
              {
                orderNo: '4-2-21_01',
                name: '外检外购登记',
                id: '4-2-21_01',
                url: 'N0402.html#/N040221?personInsuType=1'
              },
              {
                orderNo: '4-2-21_02',
                name: '外检外购审核',
                id: '4-2-21_02',
                url: 'N0402.html#/N040221_01?personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-15',
            name: '年度补助备案登记管理',
            id: '4-2-15',
            url: 'N0402.html#/N040215'
          }
        ]
      },
      {
        orderNo: '4-3',
        name: '门诊统筹包干管理',
        id: '4-3',
        children: [
          {
            orderNo: '4-3-1',
            name: '包干费用拨付管理',
            id: '4-3-1',
            url: 'N0403.html#/N040301'
          },
          {
            orderNo: '4-3-3',
            name: '包干费用拨付审核',
            id: '4-3-3',
            url: 'N0403.html#/N040303'
          },
          {
            orderNo: '4-3-2',
            name: '人员与单位关联关系管理',
            id: '4-3-2',
            url: 'N0403.html#/N040302'
          }
        ]
      },
      {
        orderNo: '4-4',
        name: '个人医保待遇资格管理',
        id: '4-4',
        children: [
          {
            orderNo: '4-4-1',
            name: '个人医保待遇资格',
            id: '4-4-1',
            url: 'N0404.html#/N040401'
          }
        ]
      },
      {
        orderNo: '4-6',
        name: '生育待遇管理',
        id: '4-6',
        children: [
          /* {
            orderNo: '4-6-1',
            name: '生育医疗费用报销登记',
            id: '4-6-1',
            url: 'N04O6.html#/N04O601'
          }, */
          /* {
            orderNo: '4-6-2',
            name: '生育医疗费用报销核定',
            id: '4-6-2',
            url: 'N04O6.html#/N04O602'
          }, */
          /* {
            orderNo: '4-6-3',
            name: '生育津贴申报',
            id: '4-6-3',
            url: 'N04O6.html#/N04O603'
          }, */
          // {
          //   orderNo: '4-6-5',
          //   name: '生育津贴申报审核',
          //   id: '4-6-5',
          //   url: 'N04O6.html#/N04O605'
          // },
          /* {
            orderNo: '4-6-4',
            name: '生育津贴批量核定',
            id: '4-6-4',
            url: 'N04O6.html#/N04O604'
          },
          {
            orderNo: '4-6-6',
            name: '生育津贴核定审核',
            id: '4-6-6',
            url: 'N04O6.html#/N04O606'
          }, */
          {
            orderNo: '4-6-6',
            name: '生育津贴报销管理',
            id: '4-6-6',
            url: 'matntrtmgt.html#/benefitsManagement'
          },
          {
            orderNo: '4-6-7',
            name: '生育待遇核定',
            id: '4-6-7',
            url: 'matntrtmgt.html#/benefitsApproved'
          },
          {
            orderNo: '4-6-8',
            name: '生育津贴批量核定',
            id: '4-6-8',
            url: 'matntrtmgt.html#/benefitsApprovedBatch?personInsuType=1'
          },
          {
            orderNo: '4-6-9',
            name: '生育待遇核定初审',
            id: '4-6-9',
            url: 'matntrtmgt.html#/treatmentAudit?nodeNo=mbs-n040607-02'
          },
          /* {
            orderNo: '4-6-10',
            name: '生育待遇核定终审',
            id: '4-6-10',
            url: 'matntrtmgt.html#/treatmentAudit?nodeNo=mbs-n040607-03'
          }, */
          {
            orderNo: '4-6-10',
            name: '生育待遇撤销',
            id: '4-6-10',
            url: 'matntrtmgt.html#/treatmentCancle'
          },
          {
            orderNo: '4-6-11',
            name: '生育待遇撤销审核',
            id: '4-6-11',
            url: 'matntrtmgt.html#/treatmentCancleAudit?nodeNo=mbs-n040611-02'
          },
          {
            orderNo: '4-6-12',
            name: '产前检查登记',
            id: '4-6-12',
            url: 'matntrtmgt.html#/prenatalExamReg'
          },
          {
            orderNo: '4-6-13',
            name: '产前检查登记审核',
            id: '4-6-13',
            url: 'matntrtmgt.html#/prenatalExamRegCheck?nodeNo=mbs-preExmReg2'
          }
        ]
      }
    ]
  },
  {
    orderNo: '11',
    name: '个人待遇管理(城乡)',
    id: '11',
    children: [
      {
        orderNo: 1,
        name: '个人待遇结算管理',
        id: '11-1',
        children: [
          {
            orderNo: 1,
            name: '零星报销受理',
            id: '11-1-1',
            url: 'N0405.html#/N040501?personInsuType=1'
            /* 201912301436260000373600000000 */
          },
          {
            orderNo: 1,
            name: '零星报销门诊结算',
            id: '11-1-2',
            url: 'N0405.html#/N040502?nodeNo=mbs-n04050201'
            /* 201912301438120000374000000000 */
          },
          {
            orderNo: 1,
            name: '零星报销住院结算',
            id: '11-1-0',
            url: 'N0405.html#/N04050201?nodeNo=mbs-n04050202'
            /* 202003241358500000820000000000 */
          },
          /* {
            orderNo: 1,
            name: '费用明细批量录入',
            id: '11-1-3',
            url: 'N0405.html#/N040503'
          }, */
          /* {
            orderNo: 1,
            name: '零星报销复核',
            id: '11-1-4',
            url: 'N0405.html#/N040504?nodeNo=mbs-n04050301'
            /!* 202001141951440000620500000000 *!/
          },
          {
            orderNo: 1,
            name: '零星报销二次复核',
            id: '11-1-11',
            url: 'N0405.html#/N040504?nodeNo=mbs-n04050302'
            /!* 202001141951440000620500000000 *!/
          }, */
          {
            orderNo: 1,
            name: '零星报销复核',
            id: '11-1-12',
            url: 'N0405.html#/N040504?nodeNo=mbs-n04050303'
            /* 202001141951440000620500000000 */
          },
          {
            orderNo: 1,
            name: '零星报销撤销',
            id: '11-1-10',
            url: 'N0405.html#/N040510'
          },
          {
            orderNo: 1,
            name: '统一受理',
            id: '11-1-13',
            url: 'N0405.html#/N040511'
          },
          {
            orderNo: 1,
            name: '零星二次补差报销管理',
            id: '11-1-5',
            url: 'N0405.html#/N040505',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '11-1-5-1',
                url: 'N0405.html#/N040505?nodeNo=mbs-n0405050101'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '11-1-5-2',
                url: 'N0405.html#/N04050502'
              },
              {
                orderNo: 1,
                name: '费用明细调整',
                id: '11-1-5-3',
                url: 'N0405.html#/N04050503?nodeNo=mbs-n0405050102'
              },
              {
                orderNo: 1,
                name: '费用明细调整回退',
                id: '11-1-5-4',
                url: 'N0405.html#/N04050504?nodeNo=mbs-n0405050103'
              },
              {
                orderNo: 1,
                name: '费用结算',
                id: '11-1-5-5',
                url: 'N0405.html#/N04050505?nodeNo=mbs-n0405050103'
              }, {
                orderNo: 1,
                name: '费用结算回退',
                id: '11-1-5-6',
                url: 'N0405.html#/N04050506?nodeNo=mbs-n0405050104'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '11-1-5-7',
                url: 'N0405.html#/N04050507?nodeNo=mbs-n0405050104'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '11-1-5-8',
                url: 'N0405.html#/N04050508'
              },
              {
                orderNo: 1,
                name: '批量登记',
                id: '11-1-5-9',
                url: 'N0405.html#/N04050509?nodeNo=mbs-n0405050901'
              },
              {
                orderNo: 1,
                name: '批量登记回退',
                id: '11-1-5-10',
                url: 'N0405.html#/N04050510'
              },
              {
                orderNo: 1,
                name: '批量结算',
                id: '11-1-5-11',
                url: 'N0405.html#/N04050511?nodeNo=mbs-n0405050902'
              },
              {
                orderNo: 1,
                name: '批量结算回退',
                id: '11-1-5-12',
                url: 'N0405.html#/N04050512?nodeNo=mbs-n0405050903'
              },
              {
                orderNo: 1,
                name: '批量审核',
                id: '11-1-5-13',
                url: 'N0405.html#/N04050513?nodeNo=mbs-n0405050903'
              },
              {
                orderNo: 1,
                name: '批量审核回退',
                id: '11-1-5-14',
                url: 'N0405.html#/N04050514'
              }

            ]
          },
          {
            orderNo: 1,
            name: '年度内二次报销管理',
            id: '11-1-6',
            url: 'N0405.html#/N040506',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '11-1-6-1',
                url: 'N0405.html#/N040506?nodeNo=mbs-n0405060101'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '11-1-6-2',
                url: 'N0405.html#/N04050602'
              },
              {
                orderNo: 1,
                name: '结算',
                id: '11-1-6-3',
                url: 'N0405.html#/N04050603?nodeNo=mbs-n0405060102'
              },
              {
                orderNo: 1,
                name: '*结算回退',
                id: '11-1-6-6',
                url: 'N0405.html#/N04050606?nodeNo=mbs-n0405060103'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '11-1-6-4',
                url: 'N0405.html#/N04050604?nodeNo=mbs-n0405060103'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '11-1-6-5',
                url: 'N0405.html#/N04050605'
              }
            ]
          },
          {
            orderNo: 1,
            name: '灵活报销管理',
            id: '11-1-7',
            url: 'N0405.html#/N040507',
            children: [
              {
                orderNo: 1,
                name: '报销结果录入',
                id: '11-1-7-1',
                url: 'N0405.html#/N040507?nodeNo=mbs-N0405070101'
              },
              {
                orderNo: 1,
                name: '报销结果录入回退',
                id: '11-1-7-2',
                url: 'N0405.html#/N04050702'
              },
              {
                orderNo: 1,
                name: '报销结果审核',
                id: '11-1-7-3',
                url: 'N0405.html#/N04050703?nodeNo=mbs-N0405070102'
              },
              {
                orderNo: 1,
                name: '报销结果审核回退',
                id: '11-1-7-4',
                url: 'N0405.html#/N04050704'
              }
            ]
          },
          {
            orderNo: 1,
            name: '特殊人群奖励金拨付管理',
            id: '11-1-8',
            url: 'N0405.html#/N040508',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '11-1-8-1',
                url: 'N0405.html#/N040508?nodeNo=mbs-n04050801'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '11-1-8-2',
                url: 'N0405.html#/N04050802'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '11-1-8-3',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050802'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '11-1-8-4',
                url: 'N0405.html#/N04050804'
              },
              {
                orderNo: 1,
                name: '二次审核',
                id: '11-1-8-5',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050803'
              },
              {
                orderNo: 1,
                name: '三次审核',
                id: '11-1-8-6',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050804'
              }
            ]
          },
          {
            orderNo: 1,
            name: '个人零星报销单据打印',
            id: '11-1-9',
            url: 'N0405.html#/N040509'
          }
        ]
      },
      {
        orderNo: '11-2',
        name: '人员就医登记管理',
        id: '11-2',
        children: [
          {
            orderNo: '11-2-01',
            name: '门慢门特登记',
            id: '11-2-01',
            children: [
              {
                orderNo: '11-2-01_01',
                name: '门慢门特登记',
                id: '11-2-01_01',
                url: 'N0402.html#/N040201?personInsuType=2'
              },
              {
                orderNo: '11-2-01_02',
                name: '门慢门特登记审核',
                id: '11-2-1_02',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n0402010102&personInsuType=2'
              },
              {
                orderNo: '11-2-01_03',
                name: '门慢门特撤销',
                id: '11-2-1_03',
                url: 'N0402.html#/N040201_02?personInsuType=2'
              },
              {
                orderNo: '11-2-01_04',
                name: '门慢门特撤销审核',
                id: '11-2-01_04',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n0402010302&personInsuType=2'
              },
              {
                orderNo: '11-2-01_05',
                name: '门慢门特维护',
                id: '11-2-01_05',
                url: 'N0402.html#/N040201_03?personInsuType=2'
              },
              {
                orderNo: '11-2-01_06',
                name: '门慢门特维护审核',
                id: '11-2-01_06',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n0402010202&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-23',
            name: '门慢门特年审(批量)',
            id: '11-2-23',
            children: [
              {
                orderNo: '11-2-23_01',
                name: '门慢门特年审',
                id: '11-2-23_01',
                url: 'N0402.html#/N040222?personInsuType=2'
              },
              {
                orderNo: '11-2-23_02',
                name: '门慢门特批量登记',
                id: '11-2-23_02',
                url: 'N0402.html#/N040224?personInsuType=2'
              },
              {
                orderNo: '11-2-23_03',
                name: '门慢门特批量登记审核',
                id: '11-2-23_03',
                url: 'N0402.html#/N040224_01?nodeNo=mbs-n040224-add02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-16',
            name: '门慢门特用药范围维护',
            id: '11-2-16',
            children: [
              {
                orderNo: '11-2-16',
                name: '门慢门特用药范围维护',
                id: '11-2-16',
                url: 'N0402.html#/N040216?personInsuType=2'
              },
              {
                orderNo: '11-2-16_01',
                name: '门慢门特用药范围维护审核',
                id: '11-2-16_01',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n04021602&personInsuType=2'
              },
              {
                orderNo: '11-2-16_02',
                name: '门慢门特用药范围维护撤销',
                id: '11-2-16_02',
                url: 'N0402.html#/N040216_02?personInsuType=2'
              }, {
                orderNo: '11-2-16_03',
                name: '门慢门特用药范围维护撤销审核',
                id: '11-2-16_03',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n040216-cx02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-26',
            name: '特殊病资格信息管理',
            id: '11-2-26',
            children: [
              {
                orderNo: '11-2-26-1',
                name: '城乡居民重大疾病登记',
                id: '11-2-26-1',
                children: [
                  {
                    orderNo: '11-2-26-1-1',
                    name: '城乡居民重大疾病登记',
                    id: '11-2-26-1-1',
                    url: 'N0402.html#/N040226?personInsuType=2'
                  },
                  {
                    orderNo: '11-2-26-1-2',
                    name: '城乡居民重大疾病登记审核',
                    id: '11-2-26-1-2',
                    url: 'N0402.html#/N040226_01?nodeNo=mbs-n04022602&personInsuType=2'
                  },
                  {
                    orderNo: '11-2-26-1-3',
                    name: '城乡居民重大疾病登记撤销',
                    id: '11-2-26-1-3',
                    url: 'N0402.html#/N040226_02?personInsuType=2'
                  },
                  {
                    orderNo: '11-2-26-1-4',
                    name: '城乡居民重大疾病登记撤销审核',
                    id: '11-2-26-1-4',
                    url: 'N0402.html#/N040226_01?nodeNo=mbs-n040226-cx02&personInsuType=2'
                  }
                ]
              },
              { orderNo: '11-2-27_0',
                name: '城乡居民两病登记',
                id: '11-2-27_0',
                children: [
                  {
                    orderNo: '11-2-27',
                    name: '城乡居民两病登记',
                    id: '11-2-27',
                    url: 'N0402.html#/N040227?personInsuType=2'
                  }, {
                    orderNo: '11-2-27_01',
                    name: '城乡居民两病审核',
                    id: '11-2-27_01',
                    url: 'N0402.html#/N040227_01?nodeNo=mbs-n04022702&personInsuType=2'
                  }, {
                    orderNo: '11-2-27_02',
                    name: '城乡居民两病撤销',
                    id: '11-2-27_02',
                    url: 'N0402.html#/N040227_02?personInsuType=2'
                  }, {
                    orderNo: '11-2-27_03',
                    name: '城乡居民两病撤销审核',
                    id: '11-2-27_03',
                    url: 'N0402.html#/N040227_01?nodeNo=mbs-n040227-cx02&personInsuType=2'
                  }
                ]
              }
            ]
          },
          {
            orderNo: '11-2-9',
            name: '异地安置登记',
            id: '11-2-9',
            children: [
              {
                orderNo: '11-2-09',
                name: '异地安置登记',
                id: '11-2-09',
                url: 'N0402.html#/N040209?personInsuType=2'
              },
              {
                orderNo: '11-2-09_01',
                name: '异地安置登记审核',
                id: '11-2-09_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n04020902&personInsuType=2'
              },
              {
                orderNo: '11-2-09_02',
                name: '异地安置撤销',
                id: '11-2-09_02',
                url: 'N0402.html#/N040209_02?personInsuType=2'
              },
              {
                orderNo: '11-2-09_02_01',
                name: '异地安置撤销审核',
                id: '11-2-09_02_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-cx02&personInsuType=2'
              },
              {
                orderNo: '11-2-09_03',
                name: '异地安置变更',
                id: '11-2-09_03',
                url: 'N0402.html#/N040209_03?personInsuType=2'
              },
              {
                orderNo: '11-2-09_03_01',
                name: '异地安置变更审核',
                id: '11-2-09_04',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-wh02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-14',
            name: '生育备案',
            id: '11-2-14',
            children: [
              {
                orderNo: '11-2-14-1',
                name: '生育备案登记',
                id: '11-2-14-1',
                url: 'N0402.html#/N040214?personInsuType=2'
              },
              {
                orderNo: '11-2-14_03',
                name: '生育备案信息撤销',
                id: '11-2-14_03',
                url: 'N0402.html#/N040214_02?personInsuType=2'
              },
              {
                orderNo: '11-2-14_06',
                name: '生育备案信息维护',
                id: '11-2-14_06',
                url: 'N0402.html#/N040214_03?personInsuType=2'
              },
              {
                orderNo: '11-2-14_01',
                name: '生育备案初审',
                id: '11-2-14_01',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140102&personInsuType=2'
              },
              {
                orderNo: '11-2-14_02',
                name: '生育备案复审',
                id: '11-2-14_02',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140103&personInsuType=2'
              },
              {
                orderNo: '11-2-14_04',
                name: '生育备案撤销初审',
                id: '11-2-14_04',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140302&personInsuType=2'
              },
              {
                orderNo: '11-2-14_05',
                name: '生育备案撤销复审',
                id: '11-2-14_05',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140303&personInsuType=2'
              },
              {
                orderNo: '11-2-14_07',
                name: '生育备案维护初审',
                id: '11-2-14_07',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140202&personInsuType=2'
              },
              {
                orderNo: '11-2-14_08',
                name: '生育备案维护复审',
                id: '11-2-14_08',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n0402140203&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-22',
            name: '无医保凭证结算备案登记',
            id: '11-2-22',
            children: [
              {
                orderNo: '11-2-22_01',
                name: '无医保凭证结算备案登记',
                id: '11-2-22_01',
                url: 'N0402.html#/N040223?personInsuType=2'
              },
              {
                orderNo: '11-2-22_02',
                name: '无医保凭证结算备案登记审核',
                id: '11-2-22_02',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n0402230102&personInsuType=2'
              },
              {
                orderNo: '11-2-22_03',
                name: '无医保凭证结算备案撤销',
                id: '11-2-22_03',
                url: 'N0402.html#/N040223_02?personInsuType=2'
              },
              {
                orderNo: '11-2-22_04',
                name: '无医保凭证结算备案撤销审核',
                id: '11-2-22_04',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n0402230202&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-02',
            name: '按病种结算登记',
            id: '11-2-2',
            children: [
              {
                orderNo: '11-2-02',
                name: '按病种结算登记',
                id: '11-2-2',
                url: 'N0402.html#/N040202?personInsuType=2'
              },
              {
                orderNo: '11-2-02-01',
                name: '按病种结算审核',
                id: '11-2-2-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n04020202&personInsuType=2'
              },
              {
                orderNo: '11-2-02_02',
                name: '按病种结算撤销',
                id: '11-2-2-02',
                url: 'N0402.html#/N040202_02?personInsuType=2'
              },
              {
                orderNo: '11-2-02-02-01',
                name: '按病种结算撤销审核',
                id: '11-2-2-02-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202-cx02&personInsuType=2'
              },
              {
                orderNo: '11-2-02-03',
                name: '按病种结算维护',
                id: '11-2-2-03',
                url: 'N0402.html#/N040202_03?personInsuType=2'
              },
              {
                orderNo: '11-2-02-03-01',
                name: '按病种结算维护审核',
                id: '11-2-2-03-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202-wh02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-03',
            name: '意外伤害登记',
            id: '11-2-03',
            children: [
              {
                orderNo: '11-2-03_01',
                name: '意外伤害登记',
                id: '11-2-03_01',
                url: 'N0402.html#/N040203?personInsuType=2'
              },
              {
                orderNo: '11-2-03_02',
                name: '意外伤害登记审核',
                id: '11-2-03_02',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n0402030102&personInsuType=2'
              },
              {
                orderNo: '11-2-03_03',
                name: '意外伤害撤销',
                id: '11-2-03_03',
                url: 'N0402.html#/N040203_02?personInsuType=2'
              },
              {
                orderNo: '11-2-03_04',
                name: '意外伤害撤销审核',
                id: '11-2-03_04',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n0402030202&personInsuType=2'
              },
              {
                orderNo: '11-2-03_05',
                name: '意外伤害变更',
                id: '11-2-03_05',
                url: 'N0402.html#/N040203_03?personInsuType=2'
              },
              {
                orderNo: '11-2-03_06',
                name: '意外伤害变更审核',
                id: '11-2-03_06',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n0402030302&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-04',
            name: '就医定点医疗机构登记',
            id: '11-2-04',
            children: [
              {
                orderNo: '11-2-04_01',
                name: '就医定点医疗机构登记',
                id: '11-2-04_01',
                url: 'N0402.html#/N040204?personInsuType=2'
              },
              {
                orderNo: '11-2-04_02',
                name: '就医定点医疗机构审核',
                id: '11-2-04_02',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n0402040102&personInsuType=2'
              },
              {
                orderNo: '11-2-04_03',
                name: '就医定点医疗机构撤销',
                id: '11-2-04_03',
                url: 'N0402.html#/N040204_02?personInsuType=2'
              },
              {
                orderNo: '11-2-04_04',
                name: '就医定点医疗机构撤销审核',
                id: '11-2-04_04',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n0402040202&personInsuType=2'
              },
              {
                orderNo: '11-2-04_05',
                name: '就医定点医疗机构停用',
                id: '11-2-04_05',
                url: 'N0402.html#/N040204_03?personInsuType=2'
              },
              {
                orderNo: '11-2-04_06',
                name: '就医定点医疗机构停用审核',
                id: '11-2-04_06',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n0402040302&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-05',
            name: '家庭病床登记',
            id: '11-2-05',
            children: [
              {
                orderNo: '11-2-05_01',
                name: '家庭病床登记',
                id: '11-2-05_01',
                url: 'N0402.html#/N040205?personInsuType=2'
              },
              {
                orderNo: '11-2-05_02',
                name: '家庭病床登记审核',
                id: '11-2-05_02',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n0402050102&personInsuType=2'
              },
              {
                orderNo: '11-2-05_03',
                name: '家庭病床撤销',
                id: '11-2-05_03',
                url: 'N0402.html#/N040205_02?personInsuType=2'
              },
              {
                orderNo: '11-2-05_04',
                name: '家庭病床撤销审核',
                id: '11-2-05_04',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n0402050202&personInsuType=2'
              },
              {
                orderNo: '11-2-05_05',
                name: '家庭病床维护',
                id: '11-2-05_05',
                url: 'N0402.html#/N040205_03?personInsuType=2'
              },
              {
                orderNo: '11-2-05_06',
                name: '家庭病床维护审核',
                id: '11-2-05_06',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n0402050302&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-06',
            name: '家庭医生签约登记',
            id: '11-2-06',
            children: [
              {
                orderNo: '11-2-06_01',
                name: '家庭医生签约登记',
                id: '11-2-06_01',
                url: 'N0402.html#/N040206?personInsuType=2'
              },
              {
                orderNo: '11-2-06_02',
                name: '家庭医生签约登记审核',
                id: '11-2-06_02',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n0402060102&personInsuType=2'
              },
              {
                orderNo: '11-2-06_03',
                name: '家庭医生签约撤销',
                id: '11-2-06_03',
                url: 'N0402.html#/N040206_02?personInsuType=2'
              },
              {
                orderNo: '11-2-06_04',
                name: '家庭医生签约撤销审核',
                id: '11-2-06_04',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n0402060202&personInsuType=2'
              },
              {
                orderNo: '11-2-06_05',
                name: '家庭医生签约维护',
                id: '11-2-06_05',
                url: 'N0402.html#/N040206_03?personInsuType=2'
              },
              {
                orderNo: '11-2-06_06',
                name: '家庭医生签约维护审核',
                id: '11-2-06_06',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n0402060302&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-07',
            name: '转诊转院备案',
            id: '11-2-07',
            children: [
              {
                orderNo: '11-2-07-1',
                name: '转诊转院登记',
                id: '11-2-07-1',
                url: 'N0402.html#/N040207?personInsuType=2'
              },
              {
                orderNo: '11-2-07_01',
                name: '转诊转院审核',
                id: '11-2-07_01',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070102&personInsuType=2'
              },
              {
                orderNo: '11-2-07_02',
                name: '转诊转院撤销',
                id: '11-2-07_02',
                url: 'N0402.html#/N040207_02?personInsuType=2'
              },
              {
                orderNo: '11-2-07_03',
                name: '转诊转院撤销审核',
                id: '11-2-07_03',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070302&personInsuType=2'
              },
              /* {
                orderNo: '11-2-07_04',
                name: '转诊转院撤销复审',
                id: '11-2-07_04',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070303&personInsuType=2'
              }, */
              {
                orderNo: '11-2-07_05',
                name: '转诊转院信息维护',
                id: '11-2-07_05',
                url: 'N0402.html#/N040207_03?personInsuType=2'
              },

              {
                orderNo: '11-2-07_06',
                name: '转诊转院信息维护审核',
                id: '11-2-07_06',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070202&personInsuType=2'
              }
              /* {
                orderNo: '11-2-07_07',
                name: '转诊转院信息维护复审',
                id: '11-2-07_07',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n0402070203&personInsuType=2'
              } */

            ]
          },
          {
            orderNo: '11-2-8',
            name: '异地急诊住院登记',
            id: '11-2-8',
            children: [
              {
                orderNo: '11-2-08',
                name: '异地急诊住院登记',
                id: '11-2-08',
                url: 'N0402.html#/N040208?personInsuType=2'
              },
              {
                orderNo: '11-2-08-01',
                name: '异地急诊住院登记审核',
                id: '11-2-08-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n04020802&personInsuType=2'
              },
              {
                orderNo: '11-2-08-02',
                name: '异地急诊住院撤销',
                id: '11-2-08-02',
                url: 'N0402.html#/N040208_02?personInsuType=2'
              },
              {
                orderNo: '11-2-08-03',
                name: '异地急诊住院撤销审核',
                id: '11-2-08-02-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-cx02&personInsuType=2'
              },
              {
                orderNo: '11-2-08-04',
                name: '异地急诊住院变更',
                id: '11-2-08-03',
                url: 'N0402.html#/N040208_03?personInsuType=2'
              },
              {
                orderNo: '11-2-08-05',
                name: '异地急诊住院变更审核',
                id: '11-2-08-03-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-wh02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-10',
            name: '特检特治登记',
            id: '11-2-10',
            children: [
              {
                orderNo: '11-2-10-00',
                name: '特检特治登记',
                id: '11-2-10-00',
                url: 'N0402.html#/N040210?personInsuType=2'
              },
              {
                orderNo: '11-2-10-01',
                name: '特检特治登记审核',
                id: '11-2-10-01',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n04021002&personInsuType=2'
              },
              {
                orderNo: '11-2-10-02',
                name: '特检特治撤销',
                id: '11-2-10-02',
                url: 'N0402.html#/N040210_02?personInsuType=2'
              },
              {
                orderNo: '11-2-10-03',
                name: '特检特治撤销审核',
                id: '11-2-10-03',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n040210-sc02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-11',
            name: '特殊药品登记',
            id: '11-2-11',
            children: [
              {
                orderNo: '11-2-11-00',
                name: '特殊药品登记',
                id: '11-2-11-00',
                url: 'N0402.html#/N040211?personInsuType=2'
              },
              {
                orderNo: '11-2-11-01',
                name: '特殊药品登记审核',
                id: '11-2-11-01',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n04021102&personInsuType=2'
              },
              {
                orderNo: '11-2-11-02',
                name: '特殊药品撤销',
                id: '11-2-11-02',
                url: 'N0402.html#/N040211_02?personInsuType=2'
              },
              {
                orderNo: '11-2-11-03',
                name: '特殊药品撤销审核',
                id: '11-2-11-03',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n040211-cx02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-12',
            name: '长期带药登记',
            id: '11-2-12-00',
            children: [
              {
                orderNo: '11-2-12-00',
                name: '长期带药登记',
                id: '11-2-12-00',
                url: 'N0402.html#/N040212?personInsuType=2'
              },
              {
                orderNo: '11-2-12-01',
                name: '长期带药审核',
                id: '11-2-12-01',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n04021202&personInsuType=2'
              },
              {
                orderNo: '11-2-12-02',
                name: '长期带药撤销',
                id: '11-2-12-02',
                url: 'N0402.html#/N040212_02?personInsuType=2'
              },
              {
                orderNo: '11-2-12-03',
                name: '长期带药撤销审核',
                id: '11-2-12-03',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n040212-cx02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-18',
            name: '异地安置网上申请信息下载',
            id: '11-2-18',
            children: [
              {
                orderNo: '11-2-18_01',
                name: '异地安置网上申请信息下载',
                id: '11-2-18_01',
                url: 'N0402.html#/N040218?personInsuType=2'
              },
              {
                orderNo: '11-2-18_02',
                name: '异地安置网上申请信息审核',
                id: '11-2-18_02',
                url: 'N0402.html#/N040219?personInsuType=2'
              },
              {
                orderNo: '11-2-18_03',
                name: '异地安置信息补传',
                id: '11-2-18_03',
                url: 'N0402.html#/N040220?personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-13',
            name: '代开药品登记',
            id: '11-2-13',
            children: [
              {
                orderNo: '11-2-13_01',
                name: '代开药品登记',
                id: '11-2-13_01',
                url: 'N0402.html#/N040213?personInsuType=2'
              },
              {
                orderNo: '11-2-13_02',
                name: '代开药品审核',
                id: '11-2-13_02',
                url: 'N0402.html#/N040213_01?personInsuType=2'
              }
            ]
          },
          // {
          //   orderNo: '11-2-17',
          //   name: '死亡人员业务暂停管理',
          //   id: '11-2-17',
          //   url: 'N0402.html#/N040217'
          // }
          {
            orderNo: '11-2-21',
            name: '外检外购登记',
            id: '11-2-21',
            children: [
              {
                orderNo: '11-2-21_01',
                name: '外检外购登记',
                id: '11-2-21_01',
                url: 'N0402.html#/N040221?personInsuType=2'
              },
              {
                orderNo: '11-2-21_02',
                name: '外检外购审核',
                id: '11-2-21_02',
                url: 'N0402.html#/N040221_01?personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-15',
            name: '年度补助备案登记管理',
            id: '11-2-15',
            url: 'N0402.html#/N040215'
          }
        ]
      },
      {
        orderNo: '11-3',
        name: '门诊统筹包干管理',
        id: '11-3',
        children: [
          {
            orderNo: '11-3-1',
            name: '包干费用拨付管理',
            id: '11-3-1',
            url: 'N0403.html#/N040301'
          },
          {
            orderNo: '11-3-3',
            name: '包干费用拨付审核',
            id: '11-3-3',
            url: 'N0403.html#/N040303'
          },
          {
            orderNo: '11-3-2',
            name: '人员与单位关联关系管理',
            id: '11-3-2',
            url: 'N0403.html#/N040302'
          }
        ]
      },
      {
        orderNo: '11-4',
        name: '个人医保待遇资格管理',
        id: '11-4',
        children: [
          {
            orderNo: '11-4-1',
            name: '个人医保待遇资格',
            id: '11-4-1',
            url: 'N0404.html#/N040401'
          }
        ]
      },
      {
        orderNo: '11-6',
        name: '生育待遇管理',
        id: '11-6',
        children: [
          /* {
            orderNo: '11-6-1',
            name: '生育医疗费用报销登记',
            id: '11-6-1',
            url: 'N04O6.html#/N04O601'
          }, */
          /* {
            orderNo: '11-6-2',
            name: '生育医疗费用报销核定',
            id: '11-6-2',
            url: 'N04O6.html#/N04O602'
          }, */
          /* {
            orderNo: '11-6-3',
            name: '生育津贴申报',
            id: '11-6-3',
            url: 'N04O6.html#/N04O603'
          }, */
          // {
          //   orderNo: '11-6-5',
          //   name: '生育津贴申报审核',
          //   id: '11-6-5',
          //   url: 'N04O6.html#/N04O605'
          // },
          /* {
            orderNo: '11-6-4',
            name: '生育津贴批量核定',
            id: '11-6-4',
            url: 'N04O6.html#/N04O604'
          },
          {
            orderNo: '11-6-6',
            name: '生育津贴核定审核',
            id: '11-6-6',
            url: 'N04O6.html#/N04O606'
          }, */
          {
            orderNo: '11-6-7',
            name: '生育待遇核定',
            id: '11-6-7',
            url: 'matntrtmgt.html#/benefitsApproved'
          },
          {
            orderNo: '11-6-8',
            name: '生育津贴批量核定',
            id: '11-6-8',
            url: 'matntrtmgt.html#/benefitsApprovedBatch?personInsuType=2'
          },
          {
            orderNo: '11-6-9',
            name: '生育待遇核定审核',
            id: '11-6-9',
            url: 'matntrtmgt.html#/treatmentAudit?nodeNo=mbs-n040607-02'
          },
          {
            orderNo: '11-6-10',
            name: '生育待遇核定终审',
            id: '11-6-10',
            url: 'matntrtmgt.html#/treatmentAudit?nodeNo=mbs-n040607-03'
          },
          {
            orderNo: '11-6-11',
            name: '生育待遇撤销',
            id: '11-6-11',
            url: 'matntrtmgt.html#/treatmentCancle'
          },
          {
            orderNo: '11-6-12',
            name: '生育待遇撤销审核',
            id: '11-6-12',
            url: 'matntrtmgt.html#/treatmentCancleAudit?nodeNo=mbs-n040611-02'
          }
        ]
      }
    ]
  },
  {
    orderNo: 4,
    name: '定点机构结算管理',
    id: '3',
    children: [
      {
        orderNo: 1,
        name: '医药机构月度结算',
        id: '3-1-2',
        children: [
          {
            orderNo: 1,
            name: '月结申报',
            id: 'N070201',
            url: 'N0702.html#/N070201'
          },
          {
            orderNo: 2,
            name: '受理',
            id: 'N070202',
            url: 'N0702.html#/N070202'
          },
          {
            orderNo: 3,
            name: '审核结算',
            id: 'N070203',
            url: 'N0702.html#/N070203'
          },
          /* {
          }
         /* {
            orderNo: 4,
            name: '*生成拨付单',
            id: 'N070204',
            url: 'N0702.html#/N070204'
          } */
          {
            orderNo: 5,
            name: '总账对账',
            id: 'N070205',
            url: 'N0702.html#/N070205'
          },
          {
            orderNo: 6,
            name: '明细对账',
            id: 'N070206',
            url: 'N0702.html#/N070206'
          },
          {
            orderNo: 7,
            name: '医疗机构乡村卫生室清算申请',
            id: 'N070207',
            url: 'N0702.html#/N070207'
          }
        ]
      },
      {
        orderNo: 3,
        name: '预留金（保证金）管理',
        id: 'N07-03',
        children: [
          {
            orderNo: 1,
            name: '制定预留金拨付计划',
            id: 'N070301',
            url: 'N0703.html#/N070301'
          },
          {
            orderNo: 2,
            name: '预留金拨付计划审核',
            id: 'N07030201',
            url: 'N0703.html#/N070302?nodeNo=mbs-n07030102'
          },
          /* {
            orderNo: 3,
            name: '预留金拨付计划复审',
            id: 'N07030202',
            url: 'N0703.html#/N070302?nodeNo=mbs-n07030103'
          },
          {
            orderNo: 4,
            name: '预留金拨付计划终审',
            id: 'N07030203',
            url: 'N0703.html#/N070302?nodeNo=mbs-n07030104'
          }, */
          {
            orderNo: 5,
            name: '生成拨付单',
            id: 'N070303',
            url: 'N0703.html#/N070303'
          },
          {
            orderNo: 6,
            name: '预留金撤销',
            id: 'N070304',
            url: 'N0703.html#/N070304'
          },
          {
            orderNo: 7,
            name: '预留金扣款登记',
            id: 'N070305',
            url: 'N0703.html#/N070305'
          },
          {
            orderNo: 8,
            name: '预留金扣款审核',
            id: 'N070306',
            url: 'N0703.html#/N070306?nodeNo=mbs-n07030502'
          },
          {
            orderNo: 9,
            name: '保证金预留比例维护',
            id: 'N070307',
            url: 'N0703.html#/N070307'
          },
          {
            orderNo: 10,
            name: '保证金预留比例审核',
            id: 'N070308',
            url: 'N0703.html#/N070308?nodeNo=mbs-n07030702'
          }

        ]
      },
      {
        orderNo: 4,
        name: '年中清算管理',
        id: 'N07-04',
        children: [
          {
            orderNo: 1,
            name: '核定年终清算信息',
            id: 'N070401',
            url: 'N0704.html#/N070401?nodeNo=mbs-n07040101'
          },
          {
            orderNo: 2,
            name: '调整年终清算信息',
            id: 'N070402',
            url: 'N0704.html#/N070402'
          },
          {
            orderNo: 3,
            name: '审核年终清算信息',
            id: 'N070403',
            url: 'N0704.html#/N070403?nodeNo=mbs-n07040302'
          },
          {
            orderNo: 4,
            name: '生成拨付单',
            id: 'N070404',
            url: 'N0704.html#/N070404'
          },
          {
            orderNo: 5,
            name: '撤销年终清算信息',
            id: 'N070405',
            url: 'N0704.html#/N070405'
          },
          {
            orderNo: 6,
            name: '回退年终清算信息',
            id: 'N070406',
            url: 'N0704.html#/N070406'
          }
        ]
      },
      {
        orderNo: 2,
        name: '预付金管理',
        id: '3-2',
        children: [
          {
            orderNo: 1,
            name: '预付金核定',
            id: '3-2-1',
            url: 'N0705.html#/N070501?nodeNo=mbs-n07050102'
          },
          {
            orderNo: 2,
            name: '预付金审核',
            id: '3-2-2',
            url: 'N0705.html#/N070502?nodeNo=mbs-n07050102'
          },
          {
            orderNo: 3,
            name: '预付金撤销',
            id: '3-2-3',
            url: 'N0705.html#/N070503?nodeNo=mbs-n07050302'
          },
          {
            orderNo: 4,
            name: '预付金撤销审核',
            id: '3-2-4',
            url: 'N0705.html#/N070504?nodeNo=mbs-n07050302'
          },
          {
            orderNo: 5,
            name: '预付金收回',
            id: '3-2-5',
            url: 'N0705.html#/N070505?nodeNo=mbs-n07050502'
          },
          {
            orderNo: 6,
            name: '预付金收回审核',
            id: '3-2-6',
            url: 'N0705.html#/N070506?nodeNo=mbs-n07050502'
          },
          {
            orderNo: 7,
            name: '预付金收回撤销',
            id: '3-2-7',
            url: 'N0705.html#/N070507?nodeNo=mbs-n07050702'
          },
          {
            orderNo: 8,
            name: '预付金收回撤销审核',
            id: '3-2-8',
            url: 'N0705.html#/N070508?nodeNo=mbs-n07050702'
          }
        ]
      },
      {
        orderNo: 8,
        name: '年中拨付费用调整',
        id: '7-6',
        children: [
          {
            orderNo: 1,
            name: '年中拨付费用调整',
            id: '7-6-1',
            url: 'N0706.html#/N070601?nodeNo=mbs-n07060102'
          },
          {
            orderNo: 2,
            name: '年中拨付费用调整审核',
            id: '7-6-2',
            url: 'N0706.html#/N070602?nodeNo=mbs-n07060102'
          },
          {
            orderNo: 3,
            name: '年中拨付费用调整撤销',
            id: '7-6-3',
            url: 'N0706.html#/N070603?nodeNo=mbs-n07060302'
          },
          {
            orderNo: 4,
            name: '年中拨付费用调整撤销审核',
            id: '7-6-4',
            url: 'N0706.html#/N070604?nodeNo=mbs-n07060302'
          }
        ]
      },
      {
        orderNo: 5,
        name: '稽核审查扣款管理',
        id: '3-5',
        children: [
          {
            orderNo: 1,
            name: '稽核审查扣费',
            id: '3-5-1',
            url: 'N0708.html#/N070801'
          },
          /* {
            orderNo: 2,
            name: '稽核审查扣费初审',
            id: '3-5-2',
            url: 'N0708.html#/N070802?nodeNo=02'
          }, */
          {
            orderNo: 2,
            name: '稽核审查扣费审核',
            id: '3-5-2',
            url: 'N0708.html#/N070802?nodeNo=03'
          },
          {
            orderNo: 3,
            name: '稽核审查扣费撤销',
            id: '3-5-3',
            url: 'N0708.html#/N070803'
          },
          /* {
            orderNo: 5,
            name: '稽核审查扣费撤销初审',
            id: '3-5-5',
            url: 'N0708.html#/N070804?nodeNo=02'
          }, */
          {
            orderNo: 4,
            name: '稽核审查扣费撤销审核',
            id: '3-5-4',
            url: 'N0708.html#/N070804?nodeNo=03'
          }
        ]
      },
      {
        orderNo: 6,
        name: '明细审核管理',
        id: '3-6',
        children: [
          {
            orderNo: 1,
            name: '明细审核扣费',
            id: '3-6-1',
            url: 'N0709.html#/N070901'
          },
          /* {
            orderNo: 2,
            name: '明细审核扣费初审',
            id: '3-6-2',
            url: 'N0709.html#/N070902?nodeNo=02'
          }, */
          {
            orderNo: 2,
            name: '明细审核扣费审核',
            id: '3-6-2',
            url: 'N0709.html#/N070902?nodeNo=03'
          },
          {
            orderNo: 3,
            name: '明细审核扣费撤销',
            id: '3-6-3',
            url: 'N0709.html#/N070903'
          },
          /* {
            orderNo: 5,
            name: '明细审核扣费撤销初审',
            id: '3-6-5',
            url: 'N0709.html#/N070904?nodeNo=02'
          }, */
          {
            orderNo: 4,
            name: '明细审核扣费撤销审核',
            id: '3-6-4',
            url: 'N0709.html#/N070904?nodeNo=03'
          }
        ]
      },
      {
        orderNo: 7,
        name: '年度总控指标管理',
        id: '3-7',
        children: [
          {
            orderNo: 1,
            name: '年中总控指标新增',
            id: '3-7-01',
            url: 'N0707.html#/N070701?nodeNo=mbs-n07070102'
          },
          {
            orderNo: 2,
            name: '年中总控指标审核',
            id: '3-7-02',
            url: 'N0707.html#/N070702?nodeNo=mbs-n07070102'
          },
          {
            orderNo: 3,
            name: '年中总控指标撤销',
            id: '3-7-03',
            url: 'N0707.html#/N070703?nodeNo=mbs-n07070302'
          },
          {
            orderNo: 4,
            name: '年中总控指标撤销审核',
            id: '3-7-04',
            url: 'N0707.html#/N070704?nodeNo=mbs-n07070302'
          },
          {
            orderNo: 5,
            name: '年中总控指标调整',
            id: '3-7-05',
            url: 'N0707.html#/N070705?nodeNo=mbs-n07070502'
          },
          {
            orderNo: 4,
            name: '年中总控指标调整审核',
            id: '3-7-06',
            url: 'N0707.html#/N070706?nodeNo=mbs-n07070502'
          }
        ]
      }
    ]
  },

  {
    orderNo: '9',
    name: '基金财务支付',
    id: '9',
    children: [
      {
        orderNo: '9-1',
        name: '生成支付计划',
        id: '9-1',
        url: 'N0901.html#/N090101'
      },
      {
        orderNo: '9-2',
        name: '财务审核',
        id: '9-2',
        url: 'N0902.html#/N090201'
      },
      {
        orderNo: '9-3',
        name: '财务复核',
        id: '9-3',
        url: 'N0903.html#/N090301'

        // children: [
        //   {
        //     orderNo: '9-3-1',
        //     name: '财务复核',
        //     id: '9-3-1',
        //     url: 'N0903.html#/N090301'
        //   }
        // ]
      },
      {
        orderNo: '9-4',
        name: '银行回盘',
        id: '9-4',
        url: 'N0904.html#/N090401'

        // children: [
        //   {
        //     orderNo: '9-4-1',
        //     name: '银行回盘',
        //     id: '9-4-1',
        //     url: 'N0904.html#/N090401'
        //   }
        // ]
      },
      {
        orderNo: '9-5',
        name: '财务记账',
        id: '9-5',
        url: 'N0905.html#/N090501'

        // children: [
        //   {
        //     orderNo: '9-5-1',
        //     name: '财务记账',
        //     id: '9-5-1',
        //     url: 'N0905.html#/N090501'
        //   }
        // ]
      },
      {
        orderNo: '9-6',
        name: '资金拨付',
        id: '9-6',
        url: 'N0906.html#/N090601'

        // children: [
        //   {
        //     orderNo: '9-6-1',
        //     name: '资金拨付',
        //     id: '9-6-1',
        //     url: 'N0906.html#/N090601'
        //   }
        // ]
      },
      {
        orderNo: '9-7',
        name: '单据管理',
        id: '9-7',
        url: 'N0907.html#/N090701'
      }
    ]
  },

  /*
  {
    orderNo: '13',
    name: '医疗保障基金结算清单',
    id: '13',
    children: [
      {
        orderNo: '13-01',
        name: '*医疗保障基金结算清单',
        id: '13-01',
        url: 'N1301.html#/N130101'
      }
    ]
  }, */
  {
    orderNo: '14',
    name: '综合查询',
    id: '14',
    children: [
      {
        orderNo: '14-01',
        name: '*单位待转金查询',
        id: '14-01',
        url: 'N1401.html#/N140101'
      },
      {
        orderNo: '14-02',
        name: '*职工缴费信息查询',
        id: '14-02',
        url: 'N1402.html#/N140201'
      },
      {
        orderNo: '14-03',
        name: '*单位缴费信息查询',
        id: '14-03',
        url: 'N1403.html#/N140301'
      },
      {
        orderNo: '14-04',
        name: '*居民缴费信息查询',
        id: '14-04',
        url: 'N1404.html#/N140401'
      },
      {
        orderNo: '14-05',
        name: '*医疗个人信息查询',
        id: '14-05',
        url: 'N1405.html#/N140501'
      },
      {
        orderNo: '14-06',
        name: '*定点医药信息查询',
        id: '14-06',
        url: 'N1406.html#/N140601'
      },
      {
        orderNo: '14-14',
        name: '*财务记账查询',
        id: '14-14',
        url: 'N1414.html#/N141401'
      },
      {
        orderNo: '14-07',
        name: '*结算信息查询',
        id: '14-07',
        url: 'N1407.html#/N140701'
      },
      {
        orderNo: '14-08',
        name: '*财务记账信息查询',
        id: '14-08',
        url: 'N1408.html#/N140801'
      },
      {
        orderNo: '14-09',
        name: '*参保单位信息查询',
        id: '14-09',
        url: 'N1409.html#/N140901'
      },
      {
        orderNo: '14-10',
        name: '*参保人员信息查询',
        id: '14-10',
        url: 'N1410.html#/N141001'
      },
      {
        orderNo: '14-11',
        name: '单位综合查询',
        id: '14-11',
        url: 'N1411.html#/N141101'
      },
      {
        orderNo: 'psnCommQuery-1',
        name: '人员综合查询',
        id: 'psnCommQuery-1',
        url: 'N1412.html#/N141201'
      },
      {
        orderNo: '14-13',
        name: '*定点医药机构综合查询',
        id: '14-13',
        children: [
          {
            orderNo: '14-13-01',
            name: '*定点医疗机构综合查询',
            id: '14-13-01',
            url: 'N1413.html#/N141301'
          },
          {
            orderNo: '14-13-02',
            name: '*定点零售药店综合查询',
            id: '14-13-02',
            url: 'N1413.html#/N141302'
          }
        ]
      },
      {
        orderNo: '14-15',
        name: '*待遇基础信息查询',
        id: '14-15',
        children: [
          {
            orderNo: '14-15-01',
            name: '*医保目录信息查询',
            id: '14-15-01',
            url: 'N1415.html#/N141501'
          },
          {
            orderNo: '14-15-02',
            name: '*医疗目录信息查询',
            id: '14-15-02',
            url: 'N1415.html#/N141502'
          }
        ]
      },
      {
        orderNo: '14-16',
        name: '*医疗待遇综合查询',
        id: '14-16',
        children: [
          {
            orderNo: '14-16-01',
            name: '*定点医药机构费用查询',
            id: '14-16-01',
            url: 'N1416.html#/N141601'
          }, {
            orderNo: '14-16-02',
            name: '*在院信息查询',
            id: '14-16-02',
            url: 'N1416.html#/N141602'
          }, {
            orderNo: '14-16-03',
            name: '*门慢门特查询',
            id: '14-16-03',
            url: 'N1416.html#/N141603'
          }, {
            orderNo: '14-16-04',
            name: '*转诊转院查询',
            id: '14-16-04',
            url: 'N1416.html#/N141604'
          }, {
            orderNo: '14-16-05',
            name: '*人员就医登记综合查询',
            id: '14-16-05',
            url: 'N1416.html#/N141605'
          },
          {
            orderNo: '14-16-06',
            name: '*零星报销综合查询',
            id: '14-16-06',
            url: 'N1416.html#/N141606?personInsuType=1'
          }
        ]
      },
      {
        orderNo: '14-17',
        name: '定点协议综合查询',
        id: '14-17',
        url: 'N1417.html#/N141701'
      }
    ]
  },
  {
    orderNo: '15',
    name: '缓存数据管理',
    id: '15',
    children: [
      {
        orderNo: '15-01',
        name: '初始化数据管理',
        id: '15-01',
        url: 'trtDataCache.html#/initDataFresh'
      },
      {
        orderNo: '15-02',
        name: '定时刷新缓存',
        id: '15-02',
        url: 'trtDataCache.html#/autoRefresh'
      }
    ]
  },
  // {
  //   orderNo: 'psnCommQuery',
  //   name: '人员综合查询',
  //   id: 'psnCommQuery',
  //   children: [
  //     {
  //       orderNo: 'psnCommQuery-1',
  //       name: '人员综合查询',
  //       id: 'psnCommQuery-1',
  //       url: 'psnCommQuery.html#/psnCommQuery
  //     }
  //   ]
  // },
  {
    orderNo: '1000-',
    name: '数据权限',
    id: '1000-',
    children: [{
      orderNo: '1000-1',
      name: '数据权限管理',
      id: '1000-1',
      url: 'dataPermission.html#/dataPermission'
    }, {
      orderNo: '1000-2',
      name: '数据权限测试',
      id: '1000-2',
      url: 'dataPermission.html#/dataPermissionTest'
    }
    ]
  },
  {
    orderNo: 'test',
    name: '样例代码',
    id: 'test',
    children: [
      {
        orderNo: 'test01',
        name: '样例代码',
        id: 'test01',
        url: 'test.html#/test01'
      },
      {
        orderNo: 'company',
        name: '单位公用组件样例',
        id: 'company',
        url: 'test.html#/company'
      },
      {
        orderNo: 'companyInsu',
        name: '单位参保公用组件样例',
        id: 'companyInsu',
        url: 'test.html#/companyInsu'
      },
      {
        orderNo: 'medica',
        name: '医药公用组件样例',
        id: 'medica',
        url: 'test.html#/medica'
      }, {
        orderNo: 'psn',
        name: '人员公用组件样例',
        id: 'psn',
        url: 'test.html#/psn'
      },
      {
        orderNo: 'psnInfo',
        name: '人员信息组件样例',
        id: 'psnInfo',
        url: 'test.html#/psnInfo'
      },
      {
        orderNo: 'bank',
        name: '银行公用组件样例',
        id: 'bank',
        url: 'test.html#/bank'
      },
      {
        orderNo: 'plcmedica',
        name: '政策中心：定点医药机构查询组件',
        id: 'plcmedica',
        url: 'test.html#/plcmedica'
      },
      {
        orderNo: 'uscmedica',
        name: '用户中心：定点医药机构查询组件',
        id: 'uscmedica',
        url: 'test.html#/uscmedica'
      },
      {
        orderNo: 'diag',
        name: '政策中心：疾病诊断查询组件',
        id: 'diag',
        url: 'test.html#/diag'
      },
      {
        orderNo: 'deptInfo',
        name: '用户中心：医疗机构科室信息查询组件',
        id: 'deptInfo',
        url: 'test.html#/deptInfo'
      },
      {
        orderNo: 'doctorInfo',
        name: '用户中心：医疗机构医护人员信息查询组件',
        id: 'doctorInfo',
        url: 'test.html#/doctorInfo'
      },
      {
        orderNo: 'medListInfo',
        name: '政策中心：“医疗”目录查询组件',
        id: 'medListInfo',
        url: 'test.html#/medListInfo'
      },
      {
        orderNo: 'testdemos',
        name: '样例',
        id: 'testdemos',
        url: 'test.html#/testdemos'
      },
      {
        orderNo: 'disease',
        name: '病种组件',
        id: 'disease',
        url: 'test.html#/disease'
      },
      {
        orderNo: 'runqianExam',
        name: '润乾打印按钮组件',
        id: 'runqianExam',
        url: 'test.html#/runqian'
      }

    ]
  },
  {
    orderNo: '20',
    name: '用于演示',
    id: '20',
    children: [
      {
        orderNo: '20-01',
        name: '演示一',
        id: '20-01',
        url: 'testDemo.html#/module'
      },
      {
        orderNo: '20-02',
        name: '演示二',
        id: '20-02',
        url: 'testDemo.html#/slotDemo'
      },
      {
        orderNo: '20-03',
        name: '演示三',
        id: '20-03',
        url: ''
      },
      {
        orderNo: '20-04',
        name: '表格公用列',
        id: '20-04',
        url: 'tableTest.html#/modulePart1'
      }
    ]
  },
  {
    orderNo: '8',
    name: '政策参数管理',
    id: '8',
    children: [
      {
        orderNo: '8-01',
        name: '系统参数管理',
        id: '8-01',
        url: 'N0801.html#/N080101'
      },
      {
        orderNo: '8-02',
        name: '医疗待遇参数管理',
        id: '8-02',
        url: 'N0802.html#/N080201'
      },
      {
        orderNo: '8-03',
        name: '月结算参数管理',
        id: '8-03',
        url: 'N0803.html#/N080301'
      },
      {
        orderNo: '8-04',
        name: '日间手术业务信息维护',
        id: '8-04',
        url: 'N0804.html#/N080401'
      },
      {
        orderNo: '8-05',
        name: '业务检查控制参数管理',
        id: '8-05',
        url: 'N0805.html#/N080501'
      }
    ]
  },
  {
    orderNo: '999',
    name: '门户接入测试',
    id: '999',
    children: [
      {
        orderNo: '999-1',
        name: '消息发送测试',
        id: '999-1',
        url: 'portalTest.html#/communication'
      },
      {
        orderNo: '999-2',
        name: '打开菜单测试',
        id: '999-2',
        url: 'portalTest.html#/menu'
      },
      {
        orderNo: '999-3',
        name: '智能推荐测试',
        id: '999-3',
        url: 'portalTest.html#/recommend'
      },
      {
        orderNo: '999-4',
        name: '模拟业务菜单',
        id: '999-4',
        url: 'portalTest.html#/mock'
      },
      {
        orderNo: '999-5',
        name: '模拟待办',
        id: '999-5',
        url: 'portalTest.html#/todolist'
      }
    ]
  },
  {
    orderNo: 'demo',
    name: '基本医疗保险参保凭证打印',
    id: 'demo',
    url: 'demo.html#/test'
  },
  {
    orderNo: 'runqian',
    name: '润乾报表',
    id: 'runqian',
    children: [
      {
        orderNo: 'runqian-1',
        name: '报表模板',
        id: 'runqian-1',
        url: 'runqianmanager.html#/runqian'
      },
      {
        orderNo: 'runqian-2',
        name: '报表重复打印',
        id: 'runqian-2',
        url: 'runqianrepeatprint.html#/runqianrepeatprint'
      }
    ]
  }
]
export default menuConfig
