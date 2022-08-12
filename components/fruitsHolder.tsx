import React, { useEffect, useState } from 'react'
import Fruit from './fruit'
type Props = {
    fruits: [],
    username: string
}

const fruitsHolder = ({fruits, username}:Props) => {
    const [faveFruit, setFaveFruit] = useState([])
    const user = username
    
    const clickHandle = (val: string) => {

        const selectFruits:any = Array.from(faveFruit)
        selectFruits.push(val)
        setFaveFruit(selectFruits)

        const obj = {'id': user, 'fave': selectFruits}
        localStorage.setItem('fav', JSON.stringify(obj));

    }

    const clickFaveFruitHandel = (val: string) => {
        const newFaveFruit = faveFruit.filter(item => item != val)
        setFaveFruit(newFaveFruit)
        const obj = {'id': user, 'fave': newFaveFruit}
        localStorage.setItem('fav', JSON.stringify(obj));
    }

    const getKey = () => {
        const items = JSON.parse(localStorage.getItem('fav'));
        if(items){
            if(items.id  == user){
                setFaveFruit(items.fave)
            }
            
        }

    }

    useEffect(()=>{
        getKey()
    },[user])

  return (
    <div className='flex flex-col'>
        <div className='flex flex-wrap'>
        {fruits.filter(item => !faveFruit?.includes(item) ).sort().map((item) => { //filter the fruits if selected
            return(
                <Fruit clickHandle={clickHandle} key={item} value={item} />
            )
        })}
        </div>
        <div className='my-5'>
            <div className='h-[1px] bg-black'></div>
            <p> You can clik above to chosee your favorite fruits </p>
            <p> And click below to remove the fruit from your favorite</p>
            <div className='h-[1px] bg-black'></div>
        </div>
        <div className='flex flex-wrap'>
            {faveFruit?.sort().map((item)=>{ //this is user selected or favorite fruit
                return(
                    <Fruit clickHandle={clickFaveFruitHandel} key={item} value={item} />
                )
            })}
        </div>
    </div>
  )
}

export default fruitsHolder