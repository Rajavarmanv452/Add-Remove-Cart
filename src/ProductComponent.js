import { useState } from "react"
import { data } from "./data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './prodcomponent.css'

export function ProdComponent(){
    const [card,setCard]=useState(data)
    const[item,setItem]=useState(0)




    return(
        <div>  
            <h1>React Books Cart</h1>
            <span>Cart {item}</span>
          <div className="product-data">
              {card.map((prod,idx)=>(
                <CardDetails
                key = {idx}
                prodImage = {prod.prodImage}
                prodName  ={prod.prodName}
                prodPrice={prod.prodPrice}
                ProdRating={prod.ProdRating}
                ProdDescription={prod.ProdDescription}
                idx={idx}
                setItem = {setItem}
                setCard = {setCard }
                item = {item}
                card = {card}
                />
              ))}
           </div>
        </div>
    )
}

function CardDetails({setCard,setItem,prodImage,prodName,prodPrice,ProdRating,ProdDescription,idx,item}){
    const[showBtn,setShowBtn]= useState(true)
   let count =0
    const handleCartAdd = (idx,setItem,item)=>{
        setShowBtn(!showBtn)
        setItem(item +1)
    }    

    const handleCartRemove = (idx)=>{
       setShowBtn(!showBtn)
       setItem(item - 1)
    }
    return(
        <Card key = {idx} style={{ width: '20rem',padding:'5px' }}>
        <Card.Img style={{height: '300px'}}variant="top" src={prodImage} />
        <Card.Body>
           <Card.Title>{prodName}</Card.Title>
           <p className="card-price">Price:{prodPrice}</p>
           <p className="card-ratings">Ratings :{ProdRating} </p>
           <Card.Text style={{height: '250px'}}>{ProdDescription}</Card.Text>
            <div className="btn-area">
                {showBtn ? <Button onClick={()=>handleCartAdd(idx,setItem,item)}variant="primary">Add </Button> : 
                <Button onClick={()=>handleCartRemove(idx,setItem,item)}variant="secondary">Remove</Button>  
                }  
            </div>
        </Card.Body>
      </Card>
    )
}