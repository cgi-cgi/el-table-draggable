<template>
  <div>
    <ElTableDraggable v-on="$listeners">
      <el-table
        :data="list"
        row-key="id"
      >
        <el-table-column
          :fixed="column.fixed"
          :key="column.key"
          :label="column.key"
          :prop="column.key"
          v-for="column of columns"
        ></el-table-column>
      </el-table>
    </ElTableDraggable>
    <ListViewer :value="list" />
    <CodeViewer
      :code="code"
      language="html"
    ></CodeViewer>
  </div>
</template>

<script>
export const name = "列表拖拽带fixed列（开发中）"
export const nameEn = 'Fixed Row Draggable（working）'
import { createData, columns } from '../utils/createTable'
export default {
  data() {
    return {
      columns,
      list: createData(),
      code: `<ElTableDraggable>
    <el-table row-key="必填" :data="list">
    </el-table>
</ElTableDraggable>`
    }
  }
}
</script>