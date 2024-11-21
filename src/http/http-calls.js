import {
  makeGetRequest,
  makePostRequest,
  makePutRequest,
  // makePutRequest,
  // uploadFile,
  // makeDeleteRequest,
  // uploadFileMultiPart
} from "./http-service";
import { BASE_URL } from "../config/index";

export const login = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/login`, false, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

export const forgotPassword = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/forgotpassword`, false, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

export const requestInvitation = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/signup`, false, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

/**
 * @param {string} platform - google or facebook
 * @param {object} payload - {accessToken: google or facefook response token}
 * @returns
 */
export const socialLogin = (platform, payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/${platform}/signup`, false, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

/**
 * used for check availability of phone or email or username
 *
 * @param {string} payload - phone or email or username
 * @returns
 */
export const checkAvailability = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/unique`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

export const getLoggedInUserDetail = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/profile`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

export const updateProfile = (payload) => {
  return new Promise((resolve, reject) => {
    makePutRequest(`${BASE_URL}/updateprofile`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

export const findAllSchool = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/schools`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

export const createSchool = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/createschool`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};
export const findAllStudent = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/students/view-students`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};
//all teacher Api
export const findAllTeacher = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/teachers`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//edit School
export const updateSchool = ({ editPayload, schoolId }) => {
  return new Promise((resolve, reject) => {
    makePutRequest(`${BASE_URL}/school/${schoolId}`, true, editPayload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//get School details
export const getSchoolDetail = ({ id }) => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/school/${id}`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Create Teacher
export const createTeacher = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/teacher/create`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//getTeacherdetails
export const getTeacherdetails = ({ id }) => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/admin/teacher/get/${id}`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Edit Teacher
export const updateTeacher = ({ payload, id }) => {
  return new Promise((resolve, reject) => {
    makePutRequest(`${BASE_URL}/admin/teacher/update/${id}`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Activate and Deactivate
export const ActivateDeactivate = ({ payload, id }) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/activatedeactivate/${id}`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//All Notice
export const getAllNotices = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/notices/allnotices`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Create Notice
export const createNoticeApi = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/notice/createnotice`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Create Teacher
export const createStudent = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/student`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//getStudentdetails
export const getStudentdetails = ({ id }) => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/admin/student/${id}`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Edit Teacher
export const updateStudent = ({ payload, id }) => {
  return new Promise((resolve, reject) => {
    makePutRequest(`${BASE_URL}/admin/student/${id}`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//get notice by id
export const getNoticedetails = ({ id }) => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/admin/notice/getNotice/${id}`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};
//get Student Progress Report

// export const getStudentProgressReport = ({ id }) => {
//   return new Promise((resolve, reject) => {
//     makeGetRequest(
//       `${BASE_URL}/admin/progressReport/getprogressreport/${id}`,
//       true
//     )
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((e) => {
//         console.log("API call error>>", e);
//         reject(e);
//       });
//   });
// };

//Update Notice
export const updateNotice = ({ payload, id }) => {
  return new Promise((resolve, reject) => {
    makePutRequest(`${BASE_URL}/admin/notice/editnotice/${id}`, true, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Get Leave
export const getAllLeaves = () => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/leaves`, true)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//Apply Leave
export const ApplyLeave = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/teacher/leave`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//get All Student report

export const getAllStudentReport = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/getallprogressreport`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

// Update Leave Status

export const UpdateLeaveStatus = ({ id, payload }) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/leavestatus/${id}`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

// Get Class Students

export const getClassStudents = ({ payload }) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/class/students`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

// Mark Student Attendance

export const markStudentAttendance = ({ payload }) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/markattendance`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

// Search Api Leave
export const searchLeaveApi = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/leave/find`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};
//get available classes
export const getAvailableClasses = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/admin/settings`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//filterLeave Api

export const filterLeaveApi = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/leave/get`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

//get available classes
export const getAvailableSettings = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest(`${BASE_URL}/admin/settings`, true)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};

// set Bus Service

export const setSettings = (payload) => {
  return new Promise((resolve, reject) => {
    makePostRequest(`${BASE_URL}/admin/setsettings`, true, payload)
      .then((res) => {
        resolve(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("API call error>>", e);
        reject(e);
      });
  });
};
