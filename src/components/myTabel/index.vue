  <template>
  <div>
  <el-table :data="tableData" style="width: 100%" :height="height" v-bind="$attrs">
    <el-table-column
      v-for="columItem in tabelItems"
      :key="columItem.name"
      :prop="columItem.name"
      :label="columItem.label"
      :width="columItem.width ? columItem.width : 'auto'"
    >
    </el-table-column>
  </el-table>
   <el-pagination 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginationProps.startPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="paginationProps.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="paginationProps.total"
    >
    </el-pagination>
  </div>
</template>

  <script>
export default {
  props: {
    height: {
      default: '200'
    },
    tabelItems: {
      required: true,
      default: () => [],
    },
    tableData: {
      required: true,
      default: () => [],
    },
    paginationProps: {
      required: true,
    },
    handleSizeChange: {
      type: Function,
    },
     handleCurrentChange: {
      type: Function,
    }
  },
  data() {
    return {};
  },
  created() {
    console.log('tabel的其他属性',this.$attrs);
  },
};
</script>