<template>
  <v-dialog v-model="dialog">
    <v-card class="mx-auto" width="100%" elevation="10">
      <v-card-title>
        <h3 class="title">Add User</h3>
        <span class="bracket"
          >(Following user data will be reflected on the screen once
          filled)</span
        >
      </v-card-title>
      <hr />

      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-row>
                  <v-col cols="12">
                    <v-label class="mt-2"
                      >Name <span class="text-red">*</span></v-label
                    >
                    <v-text-field
                      class="styled-input"
                      placeholder="Enter the User Name"
                      variant="outlined"
                      dense
                      v-model.trim="name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-label class="mt-2"
                      >Designation <span class="text-red">*</span></v-label
                    >
                    <v-text-field
                      class="styled-input"
                      placeholder="Enter the User Designation"
                      variant="outlined"
                      dense
                      v-model.trim="designation"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="6">
                <v-row>
                  <v-col cols="12">
                    <v-label class="mt-2"
                      >Mobile no. <span class="text-red">*</span></v-label
                    >
                    <v-text-field
                      class="styled-input"
                      placeholder="Enter User Mobile No."
                      variant="outlined"
                      dense
                      v-model.trim="mobile"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-label class="mt-2"
                      >Email ID <span class="text-red">*</span></v-label
                    >
                    <v-text-field
                      class="styled-input"
                      placeholder="Enter User's company Email ID"
                      variant="outlined"
                      dense
                      v-model.trim="email"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-label class="mt-2"
                  >Profile <span class="text-red">*</span></v-label
                >
              </v-col>
              <v-col
                v-for="(profile, index) in profiles"
                :key="index"
                cols="6"
                md="3"
              >
                <v-checkbox
                  v-model="selectedProfile"
                  :label="profile"
                  :value="profile"
                >
                </v-checkbox>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="text-center">
                <v-btn
                  class="action-btn"
                  variant="outlined"
                  @click="submitUser()"
                  >Save User</v-btn
                >
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="text-center">
                <p>
                  You can view the above user’s details after saving the changes
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["showModel"],
  data() {
    return {
      dialog: false,
      name: "",
      designation: "",
      email: "",
      mobile: "",
      profiles: ["Seller", "Buyer", "Billing", "Viewer"],
      selectedProfile: [],
    };
  },
  watch: {
    showModel(val) {
      this.dialog = val;
    },
    selectedProfile(val) {
      console.log("val =>", val);
    },
  },
  methods: {
    toggled() {
      this.dialog = true;
    },
    submitUser() {
      if (
        this.name == "" ||
        this.designation == "" ||
        this.email == "" ||
        this.mobile == "" ||
        this.selectedProfile.length == 0
      ) {
        return;
      } else {
        const data = {
          name: this.name,
          designation: this.designation,
          email: this.email,
          mobile: this.mobile,
          selectedProfile: this.selectedProfile,
        };
        this.$store.dispatch("getUserDetails", data);
        this.$router.replace("/submit-approve");
      }
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  top: 40px;
  color: #6178af;
}
.v-card-title {
  height: 90px;
}
.action-btn {
  color: #6178af;
  font-size: small;
}
.action-btn:hover {
  background-color: #6178af;
  color: white;
}
.bracket {
  position: absolute;
  top: 40px;
  left: 900px;
  font-size: small;
  font-weight: 30;
}
</style>
