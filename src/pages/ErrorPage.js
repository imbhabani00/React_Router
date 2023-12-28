import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage (){
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>navigate('/'),3000);
    },[]);
    return(<>
    <h2>Oops!!!<br/>Something Went Wrong ! Contact Admin</h2>
    </>)
}
export default ErrorPage;