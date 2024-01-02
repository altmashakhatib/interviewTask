<template>
  <v-container>
    <v-card class="mx-auto" max-width="1300" elevation="10" height="600">
      <div class="display-flex">
        <div>
          <v-icon
            class="company-icon"
            size="x-large"
            color="#6178af"
            icon="mdi-account-plus"
          ></v-icon>
        </div>
        <div class="text-container">
          <h3 class="text-blue-darken-2">Add Users</h3>

          <p>
            Define Users as Buyers, Sellers, Billers & Viewers to manage your
            company account on this website
          </p>
        </div>
      </div>

      <v-divider></v-divider>

      <v-card-actions class="text-center">
        <v-btn class="action-btn" variant="outlined" @click="addUserModel()">
          <v-icon icon="mdi-plus"></v-icon> Add New User
        </v-btn>
      </v-card-actions>
    </v-card>
    <DialogAddUser :showModel="showModel"/>
  </v-container>
</template>

<script>
import DialogAddUser from "./DialogAddUser.vue";
export default {
  components: {
    DialogAddUser,
  },
  data() {
    return {
      showModel: false,
    };
  },
  methods: {
    addUserModel() {
      this.showModel = true;
    },
  },
};
</script>

<style scoped>
.display-flex {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 30px 32px;
}
.company-icon {
  height: 100%;
  width: auto;
  margin-right: 16px;
}

.text-container {
  height: 100%;
}

.text-container h3,
.text-container p {
  margin: 0;
  padding: 0;
}

.text-container h3 {
  font-size: 18px;
  font-weight: bold;
}

.action-btn {
  width: 20%;
  color: #6178af;
  margin-top: 20px;
  position: absolute;
  left: 40%;
  top: 50%;
}

.action-btn:hover {
  background-color: #6178af;
  color: white;
}

@media (max-width: 600px) {
  .display-flex {
    flex-direction: column;
    align-items: center;
  }
  .action-btn {
    width: 80%;
    left: 10%;
  }
}
</style>
