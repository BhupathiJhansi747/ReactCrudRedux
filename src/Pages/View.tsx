import { useLocation } from "react-router-dom";

const View = () => {
    const location=useLocation();
    const singleData=location?.state?.item
    return ( <>
    <div className="card container w-50 mt-5">
        <div>
          <span><b>First Name</b></span> <p>{singleData.firstname}</p>
        </div>
        <div>
        <span><b>Last Name</b></span>
          <p>{singleData.lastname}</p>
        </div>
    </div>
    </> );
}
 
export default View;