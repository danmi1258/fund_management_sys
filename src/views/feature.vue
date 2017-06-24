<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-button type="primary" @click.native.prevent="openAddForm">添加广告</el-button>
    </el-col>

    <!--列表-->
    <template>
      <el-table :data="features" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column prop="title" label="主题"     width="100" sortable />
        <el-table-column prop="info1" label="广告项目1" width="230" sortable />
        <el-table-column prop="info2" label="广告项目2" width="230" sortable />
        <el-table-column prop="info3" label="广告项目3" width="230" sortable />
        <el-table-column
          label="操作"
          align="center"
        >
          <template scope="scope">
            <el-button @click="updateFeature" type="primary" size="small">修改</el-button>
            <el-button @click="deleteFeature" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!--新增界面-->
    <el-dialog title="添加广告" v-model="addFormVisible" :close-on-click-modal="false">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="项目1" prop="info1">
          <el-input v-model="ruleForm.info1"></el-input>
        </el-form-item>
        <el-form-item label="项目2" prop="info2">
          <el-input v-model="ruleForm.info2"></el-input>
        </el-form-item>
        <el-form-item label="项目3" prop="info3">
          <el-input v-model="ruleForm.info3"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="submitForm('ruleForm')">确认添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </section>
</template>
<script type="text/ecmascript-6">
import { get as getFeatureList, add as addFeature } from '@/services/feature'
import storage from '@/utils/storage'
export default {
  data() {
    var validateTitle = function (rule, value, callback) {
      if (value.length !== 2) {
        callback(new Error('广告标题必须是2个字符！'))
      } else {
        callback()
      }
    }
    var validateInfo = function (rule, value, callback) {
      if (value.length < 1 || value.length > 16) {
        callback(new Error('广告项目必须在16个字符以内'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      addLoading: false,
      advs: [
      ],
      features: [],
      addFormVisible: false,
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { validator: validateTitle }
        ],
        info1: [
          { required: true, message: '请输入广告项目1', trigger: 'blur' },
          { validator: validateInfo }
        ],
        info2: [
          { required: true, message: '请输入广告项目2', trigger: 'blur' },
          { validator: validateInfo }
        ],
        info3: [
          { required: true, message: '请输入广告项目3', trigger: 'blur' },
          { validator: validateInfo }
        ]
      },
      //新增界面数据
      ruleForm: {
        title: '',
        info1: '',
        info2: '',
        info3: ''
      }
    }
  },
  methods: {
    updateFeature() {

    },
    deleteFeature() {

    },
    openAddForm() {
      this.addFormVisible = true
    },
    //获取用户列表
    async getAdvs () {
      this.loading = true
      const res = await getFeatureList()
      this.loading = false
      console.log(res)
      if (res.resultcode === 0) {
        res.data.feature_list.map((item, index) => {
          let featureObj = {}
          featureObj.title = item.title
          item.info.map((value, id) => {
            id++
            featureObj['info' + id] = value
          })
          this.features.push(featureObj)
        })
        console.log(this.features)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.addLoading = true
          const token = storage.getSession('token')
          const res = await addFeature(this.ruleForm, token)
          this.addLoading = false
          if (res.resultcode === 0) {
            this.$message({
              message: '广告添加成功',
              type: 'success'
            })
            this.addFormVisible = false
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.getAdvs();
  }
};

</script>

<style scoped>

</style>
