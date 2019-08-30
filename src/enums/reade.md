# 枚举使用说明

### 创建方式



```
/* 使用案例 */
//将创建方式引入
import createEnum from './index'
const STATUS = createEnum({
    AUDITING: [0, '审核中'],
    PASS: [1, '审核通过']
})


```
> 创建实例后在枚举方法中会产生三个对象


```
    strToValueMap={
        "AUDITING":0,
        "PASS":1
    }
    numToDescMap={
        0: "审核中",
        1: "审核通过"   
    }
    numToType={
        0: "AUDITING",
        1: "PASS" 
    }
```

### 在vue中使用


```
    <span v-if="status == STATUS.AUDITING">审核中</span>
    <span v-else-if="status == STATUS.PASS">审核通过</span>
```
### 在标签中引用

```
    <p>当前状态：{STATUS.getDescFromValue(syncData.status)}</p>
    <p>也可用通过枚举名称获取描述：{STATUS.getDesc('AUDITING')}</p>
```




