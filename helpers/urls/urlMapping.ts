const urlMapping = {
  authentication: {
    login: "/auth/login",
    signin: "/auth/register/user",
    me: "/auth/get/me",
  },

  student: {
    getClass: "/student/get/class",
    getRequest: "/student/get/request",
    joinClass: "/student/register/class-access",
  },

  teacher: {
    getClass: "/teacher/get/class",
    getRequest: "/teacher/get/request",
    deleteClass: "/teacher/delete/class",
    createClass: "/teacher/register/class",
    approve: "/teacher/approve/class-access",
  },
};

export default urlMapping;
