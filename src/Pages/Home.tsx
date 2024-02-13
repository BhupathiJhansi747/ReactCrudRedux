import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { DeleteEmployeAction, GetAllEmployesAction } from "../Redux/Action/ServiceActions";

const Home = ({ GetAllEmployesAction,Employes }: any) => {
    console.log("JGHJ", Employes)
    const employe = useSelector((state: any) => state.service.Employe)
    const isLoading = useSelector((state: any) => state.service.isLoading)
    const error = useSelector((state: any) => state.service.error);
    console.log("employe", employe)

    const [data, setData] = useState<any>(Employes); // Initialize with Employes from props

    const navigate = useNavigate()
    const handleEdit = (item: any) => {
        navigate("/edit", { state: { item } })
    }
    const handleDelete = (id: number) => {
        DeleteEmployeAction(id)
        GetAllEmployesAction()
    }
    const handleview = (item: any) => {
        navigate("/view", { state: { item } })
    }
    useEffect(() => {
        GetAllEmployesAction();
    }, [GetAllEmployesAction]);
    
    // Update the 'data' state when 'Employes' prop changes
    useEffect(() => {
        setData(Employes);
    }, [Employes]);
    
    return (<>
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item: any) =>
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td><button className="btn btn-success" onClick={() => handleEdit(item)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                <button className="btn btn-info" onClick={() => handleview(item)}>view</button>
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    </>);
}
const mapStateToProps = (state: any) => ({
    Employes: state?.service?.Employes
})
export default connect(mapStateToProps, { GetAllEmployesAction })(Home)