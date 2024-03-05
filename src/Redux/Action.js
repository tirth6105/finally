import axios from "axios"
import { ADD_PRODUCT, DELET, EDIT, GET, LOGIN, SIGNUP } from "./Actiontype"

export const signup=(data)=>async(dipatch)=>{
    let res =await axios.post("http://localhost:8090/User",data)
    console.log(res);
    return{
        type:SIGNUP,
        payload:res.data
    }
}

export const login=(data)=>async(dipatch)=>{
    let res =await axios.get(`http://localhost:8090/User?email=${data.email}&password=${data.password}`,data)
    return{
        type:LOGIN,
        payload:res.data
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

export const edit = (id)=> async(dispatch)=>{
    let res = await axios.patch(`http://localhost:8090/Products/${id}`);
    dispatch({
        type:EDIT,
        payload:id
    })
}

export const delet = (id)=> async(dispatch)=>{
    let res = await axios.delete(`http://localhost:8090/Products/${id}`);
    dispatch({
        type:DELET,
        payload:id
    })
}