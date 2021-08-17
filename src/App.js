import React ,{useState} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Shoe from './shoe.json';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [cart,setCart]=useState([]);
    const [amount,setAmount]= useState(0);
    const calcAmount = (price) =>{
        setAmount( Number(amount) + Number(price));
    }
    const addToCart = (shoe) =>{                
        for(let i=0 ;i<cart.length;i++)
            {
                if(cart[i].id===shoe.id){
                    cart[i].number++;
                    calcAmount(shoe.price);
                    return;
                }
            }
        shoe.number=1;    
        setCart([...cart,shoe]);
        calcAmount(shoe.price);
    }
    return(
        <div className='container pt-5'>
            <h1> Shoes-MBL Global </h1>
            <hr />
            <Row>
                <Col span={18}>
                    <Row>
                        {Shoe.map ((shoe)=>                        
                            <div className='col-md-6 col-lg-4 px-3' key={shoe.id}>                        
                                <figure className='shadow'>
                                    <picture>
                                        <img src={shoe.img} alt="" className='w-100' />
                                    </picture>
                                    <figcaption className='p-3'>
                                        <div>
                                            <h3 className='h5'>
                                                <b>
                                                    {shoe.name}
                                                </b>
                                            </h3>
                                            <p className='h6' data_amount={shoe.number}>
                                            $ <span>{shoe.price}</span> USD 
                                            </p>
                                        </div>
                                        <button className='btn btn-primary' onClick={()=>addToCart(shoe)}>
                                            Thêm vào giỏ hàng 
                                        </button>
                                    </figcaption>
                                </figure>
                            </div>
                        )}
                    </Row>
                </Col>
                <Col span={6} className='px-3'>
                    <h2> cart </h2>
                    <Row>    
                        { cart.map((item) =>                             
                        <div className='border-bottom mb-3' key={item.id}>
                            <figure className='d-flex'>
                                <picture className='col-lg-6 d-block'>
                                    <img src={item.img} alt="" className='w-100' alt={item.name}/>
                                </picture>
                                <figcaption>
                                    <p>
                                        <b>
                                        {item.name}
                                        </b>
                                    </p>
                                    <p className='h6' data_amount={item.number}>
                                        $ <span>{item.price}</span> USD * <span className='text-danger'>{item.number}</span>                                    
                                    </p>                                                                        
                                </figcaption>
                            </figure>
                        </div>                            
                        )}                
                    </Row>
                    <p> Thành Tiền <b>{amount}</b>  USD</p>
                </Col>
            </Row>
        </div>
    );   
}

export default App;
