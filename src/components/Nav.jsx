import React from 'react'
import { RiShoppingBagFill,RiShoppingCart2Fill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

function Nav() {

    return (
        <nav className='nav'>
            <div className='col-10 mx-auto p-3 justify-content-between d-flex'>
                <div className='ecommerce cursor d-flex align-items-center flex-column'>
                    <div>
                        <RiShoppingBagFill color='red' size='35px'/>
                    </div>
                    <div>
                        Ecommerce
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between' style={{width:200}}>
                    <div className='d-flex align-items-center flex-column'>
                        <div className='cursor'>
                            <AiOutlineHeart color='red' size='25px'/>
                        </div>
                        <div className='cursor' style={{color:'white'}}>
                            Wishlist
                        </div>
                    </div>
                    <div className='d-flex align-items-center flex-column'>
                        <div className='cursor'>
                            <RiShoppingCart2Fill color='red' size='35px'/>
                        </div>
                        <div style={{color:'white'}}>
                            Your cart
                        </div>
                    </div> 
                </div>
            </div>
        </nav>
        
    )
}

export default Nav
