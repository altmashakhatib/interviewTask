<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="1400" elevation="10">
      <div class="display-flex">
        <div>
          <v-icon
            class="company-icon"
            size="x-large"
            color="#6178af"
            icon="mdi-office-building"
          ></v-icon>
        </div>
        <div class="text-container">
          <h3 class="text-blue-darken-2">Company Details</h3>
          <p>
            Adding your company's details is a mandatory step in registering the
            company
          </p>
        </div>
      </div>
      <hr />

      <v-form class="form-outer">
        <!-- First Column: Registered Company Name to Billing Address -->
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="mb-4">
              <v-col cols="5">
                <v-label class="mt-3"
                  >Registered Company Name <span>*</span></v-label
                >
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="styled-input"
                  placeholder="E.g. F5 InfoTech"
                  hint="As per Official Documents"
                  variant="outlined"
                  dense
                  v-model.trim="companyName"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="5">
                <v-label>Website URL</v-label>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="styled-input"
                  placeholder="For E.g www.PNG.com"
                  variant="outlined"
                  dense
                  v-model.trim="webUrl"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="5">
                <v-label>Your Name <span>*</span></v-label>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter Your Name"
                  variant="outlined"
                  dense
                  v-model.trim="name"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="5">
                <v-label>Your Email ID <span>*</span></v-label>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter your Email ID"
                  variant="outlined"
                  dense
                  hint="The above Email ID will be treated as the company's admin ID and will be used for the registration process"
                  v-model.trim="email"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="5">
                <v-label>Your Mobile No. <span>*</span></v-label>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter your Mobile No. "
                  variant="outlined"
                  hint="The above Mobile No. will be treated as the company's admin no and will be used for the registration process"
                  v-model.trim="mobile"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="5">
                <v-label>Billing Address</v-label>
              </v-col>
              <v-col cols="6">
                <v-textarea
                  class="styled-input"
                  placeholder="Enter Company billing address"
                  hint="Will be for all offline communications and billing purposes"
                  auto-grow
                  variant="outlined"
                  rows="3"
                  row-height="25"
                  shaped
                  v-model.trim="address"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-col>

          <!-- Second Column: PAN No. to Management Authorization -->

          <v-col cols="12" md="6" class="mt-4">
            <v-row class="mb-4">
              <v-col cols="3">
                <v-label>PAN No. <span>*</span></v-label>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter the Company PAN no."
                  variant="outlined"
                  v-model.trim="panNumber"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedPan" class="upload-pdf-flex">
                  <div>{{ selectedPan }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'pan', 'remove')"
                  />
                </div>
                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.pan.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="pan"
                  @change="handleFileInputChange($event, 'pan', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="3">
                <v-label>TAN No.</v-label>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter Company TAN no."
                  variant="outlined"
                  hint="TAN: Tax Deduction Account Number of the company"
                  v-model.trim="tanNumber"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedTan" class="upload-pdf-flex">
                  <div>{{ selectedTan }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'tan', 'remove')"
                  />
                </div>
                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.tan.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="tan"
                  @change="handleFileInputChange($event, 'tan', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="3">
                <v-label>CIN No. <span>*</span></v-label>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter Company CIN no."
                  variant="outlined"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  v-model.trim="cinNumber"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedCin" class="upload-pdf-flex">
                  <div>{{ selectedCin }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'cin', 'remove')"
                  />
                </div>

                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.cin.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="cin"
                  @change="handleFileInputChange($event, 'cin', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="3">
                <v-label>GST No. <span>*</span></v-label>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  class="styled-input"
                  placeholder="Enter the Company GST no."
                  variant="outlined"
                  v-model.trim="gstNumber"
                  :color="isTanFieldFocused ? 'success' : ''"
                  @focus="handleFocus"
                  @blur="handleBlur"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedGst" class="upload-pdf-flex">
                  <div>{{ selectedGst }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'gst', 'remove')"
                  />
                </div>
                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.gst.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="gst"
                  @change="handleFileInputChange($event, 'gst', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="6"
                ><div class="styled-up">
                  <p>Cancelled Cheque</p>
                  <p class="bracket">(Only PDF file format is allowed)</p>
                </div>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedCheque" class="upload-pdf-flex">
                  <div>{{ selectedCheque }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'cheque', 'remove')"
                  />
                </div>
                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.cheque.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="cheque"
                  @change="handleFileInputChange($event, 'cheque', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>

            <v-row class="mb-4">
              <v-col cols="6"
                ><div class="styled-up">
                  <p>Company Registration Certificate <span>*</span></p>
                  <p class="bracket">(Only PDF file format is allowed)</p>
                </div>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedCompany" class="upload-pdf-flex">
                  <div>{{ selectedCompany }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'company', 'remove')"
                  />
                </div>
                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.company.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="company"
                  @change="handleFileInputChange($event, 'company', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>

            <v-row class="mb-4 responsive-manage">
              <v-col cols="6">
                <div class="styled-up">
                  <p>Management Authorization <span>*</span></p>
                  <p class="bracket">(Only PDF file format is allowed)</p>
                </div>
              </v-col>
              <v-col cols="3">
                <div v-if="selectedManage" class="upload-pdf-flex">
                  <div>{{ selectedManage }}</div>
                  <img
                    :src="cancel"
                    @click="handleFileInputChange($event, 'manage', 'remove')"
                  />
                </div>
                <v-btn
                  v-else
                  variant="outlined"
                  class="custom-btn"
                  @click="$refs.manage.click()"
                >
                  Upload
                </v-btn>

                <input
                  type="file"
                  ref="manage"
                  @change="handleFileInputChange($event, 'manage', 'upload')"
                  style="display: none"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn class="action-btn" variant="outlined"> Back</v-btn>
            <v-btn
              class="action-btn"
              variant="outlined"
              @click="submitCompanyDetails()"
              >Next <v-icon icon="mdi-chevron-right" end></v-icon
            ></v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-center">
            <p>
              Check the entered information before proceeding to the next part
              of the form
            </p>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import cancle from "@/assets/cancle.jpeg";
export default {
  data() {
    return {
      companyName: "",
      webUrl: "",
      name: "",
      email: "",
      mobile: "",
      address: "",
      panNumber: "",
      tanNumber: "",
      cinNumber: "",
      gstNumber: "",
      selectedPan: null,
      selectedTan: null,
      selectedCin: null,
      selectedGst: null,
      selectedCheque: null,
      selectedCompany: null,
      selectedManage: null,
      cancel: cancle,
      isTanFieldFocused: false,
    };
  },
  methods: {
    submitCompanyDetails() {
      if (
        this.companyName == "" ||
        this.panNumber == "" ||
        this.name == "" ||
        this.cinNumber == "" ||
        this.email == "" ||
        this.mobile == "" ||
        this.selectedCompany == null ||
        this.selectedManage == null
      ) {
        return;
      } else {
        const data = {
          companyName: this.companyName,
          webUrl: this.webUrl,
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          address: this.address,
          panNumber: this.panNumber,
          tanNumber: this.tanNumber,
          cinNumber: this.cinNumber,
          gstNumber: this.gstNumber,
        };
        this.$store.dispatch("getCompanyDetails", data);
        this.$router.replace("/add-users");
      }
    },

    handleFileInputChange(event, uploadName, type) {
      const dataMapping = {
        pan: "selectedPan",
        tan: "selectedTan",
        cin: "selectedCin",
        gst: "selectedGst",
        cheque: "selectedCheque",
        company: "selectedCompany",
        manage: "selectedManage",
      };

      const dataProperty = dataMapping[uploadName];

      if (type === "upload") {
        this[dataProperty] = event.target.files[0]?.name || null;
      } else {
        this[dataProperty] = null;
      }
    },
    handleFocus() {
      this.isTanFieldFocused = true;
    },
    handleBlur() {
      this.isTanFieldFocused = false;
    },
  },
};
</script>

<style scoped>
/* MyForm.css */
/* MyForm.css */
.form-outer {
  padding: 16px;
}
.styled-input {
  height: 50px;
  font-size: 14px;
}
.v-form {
  margin-top: 5px;
}
.styled-up {
  height: 50px;
  font-size: 17px;
}
.bracket {
  font-size: 12px;
}

.styled-textarea {
  font-size: 14px;
}
.custom-btn {
  width: 100%;
  border-radius: 20px;
  color: #3e78ff;
  font-size: medium;
  text-transform: capitalize;
}
.action-btn {
  margin: 10px;
  width: 10%;
  color: #6178af;
  font-size: medium;
  text-transform: capitalize;
  @media (max-width: 767px) {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
}
.action-btn:hover {
  background-color: #2675aa;
  color: white;
}


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
  font-size: 16px; 
}

.text-container h3 {
  font-weight: bold; 
}
span {
  color: red;
}
@media (max-width: 767px) {
  .v-label {
    white-space: break-spaces;
  }
  .responsive-manage {
    margin-top: 65px;
  }
}
.upload-pdf-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
  }
}
.upload-pdf-flex img {
  margin-left: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
