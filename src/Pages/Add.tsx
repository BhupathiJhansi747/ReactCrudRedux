import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import masterService from "../Service/Master";
import { connect, useSelector } from "react-redux";
import { AddEmployeAction, UpdateEmployeAction } from "../Redux/Action/ServiceActions";

const Add = ({AddEmployeAction}:any) => {
  // const Employe=useSelector((state:any)=>state.service.Employe)
  const user = useSelector((state:any) => state?.auth?.isAuth);
  console.log("USER", user)
  const location=useLocation()
  const navigate=useNavigate()
  const initialvalues = {
    firstname: '',
    lastname: '',
  }
  const[isEditing,setIsEditing]=useState<boolean>(false)
  const[formdata,setFormData]=useState<any>()
  const[counter,setCounter]=useState<any>(0)
  const handlecount=()=>{
    setCounter(0+1)
  }
  const handleSubmit = (values:any) => {

    if(isEditing){
      // masterService.UpdateEmployee(values)
      UpdateEmployeAction(values)
    }
    else{
//  masterService.AddEmploye(values)
   AddEmployeAction(values)
    }
    console.log("values",values)
    navigate('/')
  
  }
  useEffect(()=>{
    if(location?.state?.item){
      setIsEditing(true)
    }
  })
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('firstname is required').min(3, "min three is required"),
    lastname: Yup.string().required('lastname is required').min(3, 'min three is required')
  })
  return (<>
    <Formik initialValues={location?.state?.item || initialvalues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <p>count:{counter}</p>
        <button onClick={handlecount}>increased</button>
        <div className="card container w-50 mt-5">
        <div className="form-group mb-3 mt-3" >
          <label htmlFor="firstname">FirstName</label>
          <Field type="text" name="firstname" id="firstname" className="form-control" />
          <ErrorMessage name="firstname" component="p" className="text-danger"></ErrorMessage>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastname">LastName</label>
          <Field type="text" name="lastname" id="lastname" className="form-control" />
          <ErrorMessage name="lastname" component="p" className="text-danger"></ErrorMessage>
        </div>
        <button type="submit" className="btn btn-primary mb-3">{isEditing?"Update":"submit"}</button>
        </div>
      </Form>

    </Formik>

  </>);
} 
const mapStateToProps=(state:any)=>({
  Employe: state?.service?.Employe
})

export default connect(mapStateToProps,{AddEmployeAction}) (Add);