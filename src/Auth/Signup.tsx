import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import signUpService from "../Service/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate();
const initialvalues={
    firstname :'',
    lastname:'',
    email:'',
    mobile:'',
    password:''
}
const[addUser,setAddUser]=useState<any>(initialvalues)
const handleSubmit=(values:any)=>{
    signUpService.AddUser(values)
    console.log("values",values)
    setAddUser(initialvalues)
    navigate('/login')

}
const validationSchema=Yup.object().shape({
    firstname:Yup.string().required('First Name is required').min(3,'Min characters is required').max(9,'Max 9 characters'),
    lastname:Yup.string().required('Last Name is required').min(3,'Min characters is required').max(9,'Max 9 characters'),
    email:Yup.string().email('Invalid email').required('Email is required'),
    mobile:Yup.string().required('Mobile Number is required'),
    password:Yup.string().required('password is required')
    
})
    return ( <>
    <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
            <div className="card container w-50 mt-5 ">
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="firstname">First Name</label>
                    <Field type="text" name="firstname" id="firstname" className="form-control"/>
                    <ErrorMessage name="firstname" className="text-danger" component="p"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="lastname">Last Name</label>
                    <Field type="text" name="lastname" id="lastname" className="form-control"/>
                    <ErrorMessage name="lastname" className="text-danger" component="p"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email" className="form-control"/>
                    <ErrorMessage name="email" className="text-danger" component="p"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mobile">Mobile</label>
                    <Field type="number" name="mobile" id="mobile" className="form-control"/>
                    <ErrorMessage name="mobile" className="text-danger" component="p"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password" className="form-control"/>
                    <ErrorMessage name="password" className="text-danger" component="p"/>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
            </div>
        </Form>

    </Formik>
    </> );
}
 
export default Signup;