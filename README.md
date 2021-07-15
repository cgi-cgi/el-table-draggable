# el-table-draggable

让`vue-draggable`支持`element-ui`中的`el-table`

## 特性

## 安装

### 使用npm或者yarn

```bash
yarn add el-table-draggable

npm i -S el-table-draggable
```
## 使用

```js
import ElTableDraggable from 'el-table-draggable'

export default {
    components: {
        ElTableDraggable
    }
}
```

### template
```html
<template>
    <el-table-draggable>
        <el-table></el-table>
    </el-table-draggable>
</template>
```

### props
#### tag
包裹的组件，默认为div

#### 其他
差不多支持所有[sortablejs的option](https://github.com/SortableJS/Sortable#options)

### 事件

#### change
内部table的数据有因为拖动造成的顺序，增减时进行通知

#### 其他
差不多支持所有[sortablejs的option](https://github.com/SortableJS/Sortable#options)里面那些`on`开头的事件，绑定事件的时候请去掉`on` 例如`onSort => @sort`

## todo

- [ ] 支持列拖动  
- [ ] 支持删除功能
