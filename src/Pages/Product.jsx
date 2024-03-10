import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, delet, edit, get } from "../Redux/Action";
import { Col, Row } from "react-bootstrap";

const Product = () => {
  let [title, setTitle] = useState();
  let [price, setPrice] = useState();
  let [img, setImg] = useState();
  let[id, setId] = useState(-1);
  let [category, setCategory] = useState();
  let dispatch = useDispatch();
  let selector = useSelector((store) => store.product)||[];
  console.log(selector);

  const handleproduct = async (e) => {
    e.preventDefault();

    let newproduct = {
      title: title,
      price: price,
      img: img,
      category: category
    };

      
     if(id==-1){
      dispatch(addproduct(newproduct));
     }
     else{
      dispatch(edit({...newproduct, id: id}));

      setId(-1)
     }
   
  };

  useEffect(() => {
    dispatch(get());
  }, []);

  const handleedit =(data)=>{
console.log(data);
   setPrice(data.price);
   setCategory(data.category);
   setImg(data.img)
   setTitle(data.title)
   setId(data.id)
    // dispatch()
  }

  const handledelet =(id)=>{
    dispatch(delet(id)) 
  }

  // console.log(selector.Products);

  return (
    <div>
      <h1 className="text-center py-3">Add Your Products</h1>
      <form onSubmit={handleproduct} className="text-center">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='bg-transparent my-2 border-white text-center border-1 col-12 p-2 text-dark rounded'
          style={{width:"30%"}} 
        /><br/>
        <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} className='bg-transparent my-2 border-white text-center border-1 col-12 p-2 text-dark rounded' style={{width:"30%"}} /><br/>
        <input
          type="url"
          placeholder="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className='bg-transparent my-2 border-white text-center border-1 col-12 p-2 text-dark rounded'
          style={{width:"30%"}}
        /><br/>
        <input type="text" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)} className='bg-transparent my-2 border-white text-center border-1 col-12 p-2 text-dark rounded' style={{width:"30%"}} /><br/>
        <input type="submit" className='btn btn-secondary mt-4 col-12 mx-auto py-2' style={{width:"30%"}} /><br/>
      </form>
      <hr />

      

      <Row>
      {selector.Products.map((ele) => {
        return (
          <>
          <Col sm={12} md={6} lg={3}>
            <div className="row">
            <div className="col-4 ">
                <p>Title:</p><h3>{ele.title}</h3>
                <p>Price:</p><h3>{ele.price}</h3>
                <p>Category:</p><h1>{ele.category}</h1>
                <p>Image:</p><img style={{ width: "350px" }} src={ele.img} />
                <div className="row">
                  <div className="d-flex text-center">
                <button className='btn btn-secondary mt-4 col-12 mx-auto py-2 mx-5' style={{ width: "100%" }} onClick={()=>handleedit(ele)}>Edit</button>
                <button className='btn btn-secondary mt-4 col-12 mx-auto py-2' style={{ width: "100%" }} onClick={()=>handledelet(ele.id)}>Delet</button>
                </div>
                </div>
              </div>
            </div>
              
            </Col>
          </>
        );
      })}
      </Row>
    </div>
  );
};

export default Product;
