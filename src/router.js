import { createRouter, createWebHistory } from "vue-router";

import CompanyDetails from "./components/form/CompanyDetails.vue";
import AddUsers from "./components/form/AddUsers.vue";
import SubmitApprove from './components/form/SubmitApprove.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/company-details" },
    { path: "/company-details", component: CompanyDetails },
    { path: "/add-users", component: AddUsers },
    { path: "/submit-approve", component: SubmitApprove },
    { path: "/:notFound(.*)", redirect: "/company-details" },
  ],
});

export default router;
