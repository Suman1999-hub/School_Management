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
