import { toast } from "react-toastify";
import signUpService from "../../Service/Login"

export const LoginAction = (payload: any) => async (dispatch: any) => {
    const res = await signUpService.LoginEmploye(payload);
    localStorage.setItem("Login",JSON.stringify(res?.data))
    try {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res?.data, error: '', isLoading: false,isAuth:true});
        toast.success("Login Success!");
        return res;

    } catch {
        dispatch({ type: 'LOGIN_FAIL', payload: res?.data, error: 'Unable to login', isLoading:true,isAuth:false});
        toast.error("Login Fail!");

    }
}