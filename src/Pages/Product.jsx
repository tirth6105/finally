import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, delet, get } from "../Redux/Action";

import { Link } from "react-router-dom";

const Product = () => {
  let [title, setTitle] = useState();
  let [price, setPrice] = useState();
  let [img, setImg] = useState();
  let [category, setCategory] = useState();
  let dispatch = useDispatch();
  let selector = useSelector((store) => store.product);
  console.log(selector);

  const handleproduct = async (e) => {
    e.preventDefault();

    let newproduct = {
      title: title,
      price: price,
      img: img,
      category: category
    };

   
      dispatch(addproduct(newproduct));
   
  };

  useEffect(() => {
    dispatch(get());
  }, []);

  const handleedit =(id)=>{
    dispatch()
  }

  const handledelet =(id)=>{
    dispatch(delet(id)) 
  }

  // console.log(selector.Products);

  return (
    <div>
      <form onSubmit={handleproduct}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input
          type="url"
          placeholder="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input type="text" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="submit" />
      </form>
      <hr />

      

      {selector.Products.map((ele) => {
        return (
          <>
            <div className="row">
            <div className="col-4 ">
                <h1>{ele.title}</h1>
                <h1>{ele.price}</h1>
                <h1>{ele.category}</h1>
                <img style={{ width: "350px" }} src={ele.img} />
                <button onChange={()=>handleedit(ele.id)}>Edit</button>
                <button onClick={()=>handledelet(ele.id)}>Delet</button>
              </div>
            </div>
              
            
          </>
        );
      })}
    </div>
  );
};

export default Product;
