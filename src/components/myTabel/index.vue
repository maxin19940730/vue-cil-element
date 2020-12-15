  <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :height="height"
      v-bind="$attrs"
    >
      <el-table-column
        v-for="columItem in tabelItems"
        :key="columItem.name"
        :prop="columItem.name"
        :label="columItem.label"
        :width="columItem.width ? columItem.width : 'auto'"
      >
      </el-table-column>
      <el-table-column
        v-if="operationItems.length"
        fixed="right"
        label="操作"
        :width="operationItems.length * 50"
      >
        <template slot-scope="scope">
          <el-button
            v-for="operation in operationItems"
            :key="operation.label"
            @click="operation.click(scope.row)"
            type="text"
            size="small"
            >{{ operation.label }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column
        v-if="
          !operationItems.length &&
          showDefaultOperation &&
          showDefaultOperation.length
        "
        fixed="right"
        label="操作"
        :width="showDefaultOperation.length * 50"
      >
        <template slot-scope="scope">
          <el-button
            v-for="defaultOperation in showDefaultOperation"
            :key="defaultOperation.key"
            @click="defaultOperation.click(scope.row)"
            type="text"
            size="small"
            >{{ defaultOperation.label }}</el-button
          >
        </template>
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
      default: "200",
    },
    tabelItems: {
      required: true,
      default: () => [],
    },
    operationItems: {
      default: () => [],
    },
    defaultOperations: {},
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
    },
  },
  data() {
    return {
      operation: [
        { key: "edit", label: "编辑", click: this.edit },
        { key: "detail", label: "详情", click: this.detail },
        { key: "del", label: "删除", click: this.del },
      ],
      showDefaultOperation: [],
    };
  },
  created() {
    console.log("tabel的其他属性", this.$attrs);
    //处理default操作按钮
    this.handleDefaultOperation();
  },
  methods: {
    handleDefaultOperation() {
      if (this.defaultOperations) {
        if (typeof this.defaultOperations === "boolean") {
          this.showDefaultOperation = this.operation;
        }
        if (this.defaultOperations instanceof Array) {
          let showDefaultOperation = [];
          this.defaultOperations.forEach((item) => {
            if (typeof item == "string") {
              let obj = this.operation.find(
                (operstion) => operstion.key === item
              );
              obj && showDefaultOperation.push(obj);
            }
            if (item instanceof Object) {
              let obj = this.operation.find(
                (operstion) => operstion.key === item.key
              );
              obj && showDefaultOperation.push({ ...obj, ...item });
            }
          });
          this.showDefaultOperation = showDefaultOperation;
        }
        // console.log(this.defaultOperations instanceof Array)
      }
      // const { defaultOperations } =
    },
    edit(record) {
      console.log("defaultEdit------------edit", record);
      
    },
    detail(record) {
      console.log("defaultDetail-------------detail", record);
    },
    del(record) {
      console.log("defaultDel------------del", record);
    },
  },
};
</script>