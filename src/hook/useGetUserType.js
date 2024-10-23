import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useGetUserType() {
  const userLogin = useSelector((state) => state.userCredential);
  console.log(userLogin);
  const [userLoginData, setUserLoginData] = useState("");
  useEffect(() => {
    if (
      userLogin.user.isSuperAdmin === true &&
      userLogin.user.isAdmin === true &&
      userLogin.user.loginType === "admin"
    ) {
      console.log("SuperAdmin");
      setUserLoginData("SuperAdmin");
    } else if (
      userLogin.user.isSuperAdmin === false &&
      userLogin.user.isAdmin === true &&
      userLogin.user.loginType === "admin"
    ) {
      console.log("Admin");
      setUserLoginData("Admin");
    } else if (
      userLogin.user.isSuperAdmin === false &&
      userLogin.user.loginType === "teacher"
    ) {
      console.log("Teacher");
      setUserLoginData("Teacher");
    } else {
      console.log("Student");
      setUserLoginData("Student");
    }
  }, []);

  return [userLoginData];
}
export default useGetUserType;
