<template>
  <div id="app">
    <el-row>
      <el-col :span="3" class="navbar__logo-box">
        <div class="navbar__logo">
          <span>SWIFTooool</span>
        </div>
      </el-col>
      <el-col :span="21" class="navbar__menu-box">
        <el-menu mode="horizontal" @select="handleSelect">
          <el-submenu index="/">
            <template slot="title">Translator</template>
            <el-menu-item index="single-translator">Single</el-menu-item>
            <el-menu-item index="batch-translator">Batch</el-menu-item>
          </el-submenu>
          <el-submenu index="/mt">
            <template slot="title">MTxxx</template>
            <el-menu-item index="/mt103">MT103 Single Customer Credit Transfer</el-menu-item>
          </el-submenu>
          <el-submenu index="/iso">
            <template slot="title">ISO20022</template>
            <el-menu-item index="/pacs-008-001-08">pacs.008.001.08 FIToFICstmrCdtTrf</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      const currentPath = this.$route.path
      const path = keyPath.join('')
      if (path !== currentPath) {
        this.$router.push(path)
      }
    }
  },
}
</script>

<style>
.navbar__logo-box {
  background-color: #0da7ff;
}

.navbar__logo {
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  font-size: 20px;
}
</style>
