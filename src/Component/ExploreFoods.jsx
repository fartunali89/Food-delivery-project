import React from 'react'
import "./ExploreFood.css"
import { menu_list } from '../assets/images/assets'

const ExploreFoods = ({category,setCotegory}) => {
  return (
    <div className='explore-f' id='explore-f'>
        <h1>Explore our Foods</h1>
        <p className='explore-food-text'>Choose from a diverse menu featuring delectable array of dishes. Our mission  is to satisfy your craving and elevate your dining exprience, one meal at a list </p>
         <div className='explore-food-list'>
            { menu_list.map((item,index) =>{
                return(
                    <div onClick={()=>setCotegory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-food-list-item' >
                        <img className={category===item.menu_name?"active":"" } src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>

                    </div>

                )
            })}  

         </div>
         <hr />
      
    </div>
  )
}

export default ExploreFoods
