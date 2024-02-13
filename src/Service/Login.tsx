import axios from "axios";

const url='http://localhost:3000/Users'
class SignUpService{
    AddUser(payload:any){
        return axios.post(url,payload).then((res:any)=>{
            return res;

        })
    }
        LoginEmploye(payload:any){
            return axios.post(url,payload).then((res)=>{
                return res;
            })
        }
}
let signUpService=new SignUpService();
export default signUpService;

