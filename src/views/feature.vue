<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-button type="primary" @click.native.prevent="openAddForm">添加广告</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <template>
      <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column prop="clientId" label="账号" sortable />
        <el-table-column prop="clientName" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100" sortable>
        </el-table-column>
        <el-table-column prop="balance" label="余额 （元）" width="130" :formatter="formatBalance" sortable>
        </el-table-column>
        <el-table-column prop="email" label="邮箱号" width="130" sortable>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" min-width="180" sortable>
        </el-table-column>
      </el-table>
    </template>

    <!--新增界面-->
    <el-dialog title="添加广告" v-model="addFormVisible" :close-on-click-modal="false">
  <!--     <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="基金名">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="基金类型">
          <el-select v-model="typeId" placeholder="请选择">
            <el-option
              v-for="item in fundTypes"
              :key="item.fundTypeId"
              :label="item.fundTypeName"
              :value="item.fundTypeId">
            </el-option>
          </el-select>
        </el-form-item>
       <el-form-item label="基金状态">
          <el-radio-group v-model="addForm.sex">
            <el-radio class="radio" :label="1">上市</el-radio>
            <el-radio class="radio" :label="0">未上市</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发行金额">
          <el-input-number v-model="addForm.price" :min="1000000" :max="500000000" :step="100000"></el-input-number>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="addForm.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="addForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div> -->
    </el-dialog>

  </section>
</template>
<script type="text/ecmascript-6">
import { get as getUserList } from '@/services/users'
import storage from '@/utils/storage'
export default {
  data() {
    return {
      loading: false,
      advs: [
      ],
      users: [],
      addFormVisible: false,
      addFormRules: {
        name: [{
          required: true,
          message: '请输入基金名',
          trigger: 'blur'
        }]
      },
      //新增界面数据
      addForm: {
        name: '',
        status: -1,
        price: 0,
        date: '',
        desc: ''
      }
    }
  },
  methods: {
    openAddForm() {
      this.addFormVisible = true
    },
    //获取用户列表
    async getAdvs () {
      // this.loading = true
      // const token = storage.getSession('token')
      // const res = await getUserList(token)
      // if (res.resultcode === 0) {
      //   this.loading = false
      //   this.users = res.data.clientList
      // }
    }
  },
  mounted() {
    this.getAdvs();
  }
};

</script>

<style scoped>

</style>
