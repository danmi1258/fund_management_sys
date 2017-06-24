<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-button type="primary" @click.native.prevent="addType">添加基金类型</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <template>
      <el-table
        :data="types"
        highlight-current-row
        v-loading="loading"
        style="width: 100%;"
      >
        <el-table-column prop="fundTypeId" label="基金号" width="130" sortable />
        <el-table-column prop="fundTypeName" label="基金类型" width="200" sortable />
        <el-table-column label="操作" prop="active">
          <template scope="scope">
            <el-button type="danger" size="small" @click="handleRemoveStatus(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

  </section>
</template>
<script type="text/ecmascript-6">
import {
  get as getFundTypeList,
  remove as removeFundType,
  add as addFundType
} from '@/services/fundTypes'
import storage from '@/utils/storage'
export default {
  data() {
    return {
      filters: {
        name: ''
      },
      loading: false,
      types: [
      ]
    }
  },
  methods: {
    //获取用户列表
    async getTypes () {
      this.loading = true
      const res = await getFundTypeList()
      if (res.resultcode === 0) {
        this.types = res.data.fundTypes
        this.loading = false
      } else {
        this.loading = false
        this.$message({
          message: res.message,
          type: 'error'
        })
      }
    },
    async handleRemoveStatus(index, row) {
      const token = storage.getSession('token')
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await removeFundType(row.fundTypeId, token)
        if (res.resultcode === 0) {
          this.$message({
            message: '删除基金类型成功',
            type: 'success'
          })
          this.getTypes()
        } else {
          this.$message({
            message: res.message,
            type: 'error'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  mounted() {
    this.getTypes();
  }
};

</script>

<style lang="scss">
@import "~@/assets/scss/_vars.scss";

.el-table .frozen-row {
  background-color: #F7BA2A;
}
</style>
