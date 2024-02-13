import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LoginAction } from "../Redux/Action/LoginAction";
import { connect, useSelector } from "react-redux";
const Login = ({LoginAction}:any) => {

    const navigate=useNavigate();
    const initialValues={
        username:'',
        password:''
    }
    const handleSubmit=(values:any)=>{
        LoginAction(values)
     console.log("loginvalues",values)
     navigate("/")
    }
    const validationSchema=Yup.object().shape({
        username:Yup.string().email('Invalid UserName').required('UserName is required'),
        password:Yup.string().required('password is required')
    })
    return (  <>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
            <div className="card container w-50 mt-5">
            <div className="form-group mb-3 mt-3">
                    <label htmlFor="username">First Name</label>
                    <Field type="text" name="username" id="username" className="form-control"/>
                    <ErrorMessage name="username" className="text-danger" component="p"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password" className="form-control"/>
                    <ErrorMessage name="password" className="text-danger" component="p"/>
                </div>
                <button type="submit" className="btn btn-info mb-3">Login</button>
            </div>
        </Form>
    </Formik>
    </>);
}
const mapStateToProps=(state:any)=>({
isAuth:state?.auth?.isAuth
})
 
export default connect(mapStateToProps,{LoginAction}) (Login);