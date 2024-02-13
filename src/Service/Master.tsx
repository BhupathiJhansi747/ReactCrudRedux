import axios from "axios";
const url="http://localhost:3000/Employe"
class MasterService{
    GetAllEmployes(){
        return axios.get(url).then((res:any)=>{
            console.log("DFGHJ", res)
            return res;
        }).catch((error)=>{
            console.log("error",error)
        })
    }

    AddEmploye(payload:any){
        return axios.post(url,payload).then((res:any)=>{
            return res;
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    GetbyId(id:number){
        return axios.get(url+`/${id}`).then((res:any)=>{
            return res
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    UpdateEmployee(payload:any){
        return axios.put(url+`/${payload.id}`,payload).then((res)=>{
            return res
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    DeleteEmploye(id:number){
        return axios.delete(url+`/${id}`)
    }

}
let masterService=new MasterService();  
export default masterService;