<template>
  <v-card class="login-header-outer">
    <v-btn variant="outlined" color="#2675aa" class="login-btn"> Login </v-btn>
  </v-card>
  <div class="company-text">
    Setup your company’s inventory management/ buying system in 3 steps
  </div>
  <div class="header-outer">
    <div class="progress-status">
      <v-btn class="ma-2" color="#2675aa" icon="mdi-office-building"></v-btn>
    </div>
    <v-progress-linear
      class="progress-bar"
      color="#2675aa"
      v-model="isCompanyDetails"
    ></v-progress-linear>
    <div>
      <v-btn
        class="ma-2 white--text"
        :color="isCompanyDetails ? '#2675aa' : '#9E9E9E'"
        icon="mdi-account-plus"
      >
      </v-btn>
    </div>
    <v-progress-linear
      class="progress-bar"
      color="#2675aa"
      v-model="isAddUser"
    ></v-progress-linear>
    <div>
      <v-btn
        class="ma-2"
        :color="isAddUser ? '#2675aa' : '#9E9E9E'"
        icon="mdi-telegram"
      ></v-btn>
    </div>
  </div>
  <div class="progress-text-outer">
    <div class="progress-text">Company Details</div>
    <div>Add Users</div>
    <div>Submit for Approval</div>
  </div>
</template>

<script>
export default {
  computed: {
    isCompanyDetails() {
    return this.$store.state.isCompanyDetails;
  },
  isAddUser() {
    return this.$store.state.isAddUser;
  },
},
};
</script>

<style scoped>
.login-header-outer {
  display: flex;
  justify-content: end;
  align-items: center;
  
}
.login-btn {
  border-radius: 20px;
  color: #2675aa;
  font-size: medium;
  text-transform: capitalize;
  margin: 30px 32px;
}
.company-text {
  color: #258dad;
  text-align: center;
  margin: 32px auto;
  word-spacing: 2px;
}
.header-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 0px auto;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
  }
}
.progress-status {
  display: flex;
}
.progress-bar {
  left: 0 !important;
  transform: none !important;
  border-radius: 8px !important;
  height: 6px !important;
}
.progress-text-outer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  margin: 0px auto;
  color: #5a5555;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }
}
.progress-text {
  margin-left: 13px;
}
</style>
