import axios from "axios";

axios.defaults.baseURL = "http://localhost:8090/api/v1";
axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvcnRlZ2FAZ21haWwuY29tIiwicGFzc3dvcmQiOiJhYmMxMjMiLCJpYXQiOjE2MzcyNzgwMzl9.E9oN1JZPcGM0_0uM9hkBg3cvZ9x5yavOFFPPNSeBJd0`,
};

export default axios;
