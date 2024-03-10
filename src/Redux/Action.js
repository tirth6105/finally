import axios from "axios"
import { ADD_PRODUCT, DELET, EDIT, GET, LOGIN, LOGOUT, SIGNUP } from "./Actiontype"

export const signup=(data)=>async(dipatch)=>{
    let res =await axios.post("http://localhost:8090/User",data)
    console.log(res);
    return{
        type:SIGNUP,
        payload:res.data
    }
}

export const login=(data)=>async(dipatch)=>{
    let res =await axios.get(`http://localhost:8090/User?email=${data.email}&password=${data.password}`)

    console.log(res.data[0]);


    dipatch({
        type:LOGIN,
        payload:res.data[0]
    }
    )
}

export const logout=()=>{
    return{
        type : LOGOUT,
    }
}

export const addproduct = (data)=>async(dispatch)=>{
    let res =await axios.post('http://localhost:8090/Products',data);
    dispatch({
        type : ADD_PRODUCT,
        payload : res.data
    })
}

export const get =()=>async(dispatch)=>{
    let res = await axios.get(`http://localhost:8090/Products`);
    dispatch({
        type : GET,
        payload : res.data
    })
}

export const edit = (data)=> async(dispatch)=>{
    let res = await axios.patch(`http://localhost:8090/Products/${data.id}`,data);

    console.log(res.data,data);
    dispatch({
        type:EDIT,
        payload:res.data
    })
}

export const delet = (ele)=> async(dispatch)=>{
    let res = await axios.delete(`http://localhost:8090/Products/${ele}`);
    dispatch({
        type:DELET,
        payload:ele
    })
}