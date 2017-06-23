<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <template>
      <el-table
        :data="users"
        highlight-current-row
        v-loading="loading"
        style="width: 100%;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="clientId" label="账号" width="130" sortable />
        <el-table-column prop="clientName" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="90" sortable>
        </el-table-column>
        <el-table-column prop="balance" label="余额 （元）" width="140" :formatter="formatBalance" sortable>
        </el-table-column>
        <el-table-column prop="email" label="邮箱号" width="120" sortable>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="130" sortable>
        </el-table-column>
        <el-table-column prop="active" label="账号状态" :formatter="formatStatus" width="130" sortable>
        </el-table-column>
        <el-table-column label="操作" prop="active">
          <template scope="scope">
            <el-button :type="scope.row.active == true ? 'primary' : 'danger'" size="small" @click="handleUpdateStatus(scope.$index, scope.row)">{{scope.row.active | filterStatusButton}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

  </section>
</template>
<script type="text/ecmascript-6">
import { get as getUserList, update as updateUser } from '@/services/users'
import storage from '@/utils/storage'
export default {
  data() {
    return {
      filters: {
        name: ''
      },
      loading: false,
      users: [
      ]
    }
  },
  methods: {
    //获取用户列表
    async getUsers () {
      this.loading = true
      const token = storage.getSession('token')
      const res = await getUserList(token)
      if (res.resultcode === 0) {
        this.loading = false
        this.users = res.data.clientList
      } else if (res.resultcode === -2) {
        this.$message({
          message: '您的登录已过期，请重新登录',
          type: 'error'
        })
        this.$router.push({ name: 'login' })
      }
    },
    formatBalance(row, column) {
      return row.balance.toFixed(2)
    },
    //性别显示转换
    formatSex: function (row, column) {
      return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
    },
    formatStatus(row, column) {
      return row.active === true ? '正常' : '冻结'
    },
    async handleUpdateStatus(index, row) {
      const token = storage.getSession('token')
      const clientId = row.clientId
      const active = row.active
      if (active === true) {
        const res = await updateUser(clientId, 'false', token)
        if (res.resultcode === 0) {
          this.$message({
            message: '账户冻结成功',
            type: 'success'
          })
          this.getUsers()
        } else if (res.resultcode === -2) {
          this.$message({
            message: '您的登录已过期，请重新登录',
            type: 'error'
          })
          this.$router.push({ name: 'login' })
        } else {
          this.$message({
            message: res.message,
            type: 'info'
          })
        }
      } else {
        const res = await updateUser(clientId, 'true', token)
        if (res.resultcode === 0) {
          this.$message({
            message: '账户激活成功',
            type: 'success'
          })
          this.getUsers()
        } else if (res.resultcode === -2) {
          this.$message({
            message: '您的登录已过期，请重新登录',
            type: 'error'
          })
          this.$router.push({ name: 'login' })
        } else {
          this.$message({
            message: res.message,
            type: 'info'
          })
        }
      }
    },
    tableRowClassName(row, index) {
      if (row.active === false) {
        return 'frozen-row';
      }
      return '';
    }
  },
  mounted() {
    this.getUsers();
  },
  filters: {
    filterStatusButton(val) {
      return val === true ? '冻结' : '激活'
    }
  }
};

</script>

<style lang="scss">
@import "~@/assets/scss/_vars.scss";

.el-table .frozen-row {
  background-color: #F7BA2A;
}
</style>
