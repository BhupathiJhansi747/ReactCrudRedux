import masterService from "../../Service/Master"

export const GetAllEmployesAction=()=>async(dispatch:any)=>{
    console.log("Entered Action")
    const res= await masterService.GetAllEmployes();
    try{
    dispatch({type:'GETALLEMPLOYES_SUCCESS',payload:res?.data,error:'',isLoading:false})
    return res;
    }catch{
    dispatch({type:'GETALLEMPLOYES_FAIL',payload:res?.data,error:'Unable Get All Employes',isLoading:'false'})
    }
}
export const AddEmployeAction=(payload:any)=>async(dispatch:any)=>{
    const res= await masterService.AddEmploye(payload);
    try{
    dispatch({type:'ADDEMPLOYE_SUCCCESS',payload:res?.data,error:'',isLoading:false})
    return res;
    }catch{
    dispatch({type:'ADDEMPLOYE_FAIL',payload:res?.data,error:'Unable to Add Employe',isLoading:'false'})
    }
}
export const UpdateEmployeAction=(payload:any)=>async(dispatch:any)=>{
    const res= await masterService.UpdateEmployee(payload.id);
    try{
    dispatch({type:'UPDATEEMPLOYE_SUCCESS',payload:res?.data,error:'',isLoading:false})
    return res;
    }catch{
    dispatch({type:'UPDATEEMPLOYE_FAIL',payload:res?.data,error:'Unable Update Employe',isLoading:'false'})
    }
}
export const GetByIdEmployeAction=(id:any)=>async(dispatch:any)=>{
    const res= await masterService.GetbyId(id);
    try{
    dispatch({type:'GETBYID_SUCCESS',payload:res?.data,error:'',isLoading:false})
    return res;
    }catch{
    dispatch({type:'GETBYID_FAIL',payload:res?.data,error:'Unable Get Employe',isLoading:false})
    }
}
export const DeleteEmployeAction=(payload:any)=>async(dispatch:any)=>{
    const res= await masterService.DeleteEmploye(payload.isLoading);
    try{
    dispatch({type:'DELETEEMPLOYE_SUCCESS',payload:res?.data,error:'',isLoading:'false'})
    return res;
    }catch{
    dispatch({type:'DELETEEMPLOYE_FAIL',payload:res?.data,error:'Unable Delete Employe',isLoading:'false'})
    }
}