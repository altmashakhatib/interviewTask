export default {
    setCompanyDetails(state, payload) {
     state.companyDetails = payload
     state.isCompanyDetails = 100
    },
    setUserDetails(state, payload) {
        state.userDetails.push(payload)
        state.isAddUser = 100
    }
  };
  