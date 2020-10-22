## 医保目录展示
### 基础用法
```html
<template>
    <div>
        <medicalDirectory v-model="medform"/>
        <medicalDirectory :transmit="{}" />
        <ta-col>
            <medicalDirectory v-model="medform2" only/>
        </ta-col>
    <div/>
</template>
<script>
import medicalDirectory from "@project/component/medicalDirectory"
export default {
    components: { medicalDirectory },
    data(){
        return {
           medform:{},
           medform2:{},
        }
    }
}
</script>
```
### 属性

| 参数      | 说明      | 类型     | 默认值  |
|--------- |-----------|-------  |-------- |
| value | 表单数据 | Object | {}|
| transmit | 从外部传入仅展示 | Object | {}| 当从外部传入时 ， 不可以进行查寻功能；
| moreBofor | 前面插槽 |   |     |
| moreAfter | 后面插槽 |   |     |   会加到地址前面 因为地址是长的输入框
| only | 仅展示编码 带搜索 | Boolean | false|
| hilistCode | 不可编辑 传入编号自己查信息 默认取第一条 | String | ""|

### 方法
| 名称      | 说明      | 使用     | 参数  |
|--------- |-----------|-------  |-------- |
resetFields | 重置信息 | 

### 事件
| 名称      | 说明      | 使用     | 参数  |
|--------- |-----------|-------  |-------- |
change | 查询信息完成后的回调 | function(data){} | data:查询出的结果