export default {
  getCompanyDetails (context, payload) {
    context.commit('setCompanyDetails', payload)
  },
  getUserDetails (context, payload) {
    context.commit('setUserDetails', payload)
  }
};
