import { useState } from "react";
import { useLoaderData } from "react-router-dom"

const Products = () => {
  const product = useLoaderData();
  const [items, setItems] = useState();
  console.log(product)

  const handleChange = (e) => {
        let input = e.target.value.toLowerCase();
        let output = product.products.filter ((pro) => 
                pro.title.toLowerCase().includes(input))
        console.log(output);
        setItems(output);
    }
  
  return (

    <>
      
    <div className="head">
        <h2>List of Products</h2>
       <input className="search" type="text" onChange={handleChange} placeholder="search"></input>
    </div>
      
    <div className="maincard">
      
        {items ? items.map((item) => (
            <div key={item.id}>
              <img className="card" src={item.images[0]} />
              <div className="card2">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
        ))
      
      
      :
          
          product.products.map((item) => (
        <div key={item.id}>
          <img className="card" src={item.images[0]} />
          <div className="card2">
          <p>{item.title}</p>
          <p>${item.price}</p>
          </div>
        </div>
          ))}
        
      : <h1>Type the valid Product name</h1>
      </div>
     </> 
    
    
  )
}

export default Products