import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      companyDetails: {
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
      },
      isCompanyDetails: 0,
      isAddUser: 0,
      userDetails: [],
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
