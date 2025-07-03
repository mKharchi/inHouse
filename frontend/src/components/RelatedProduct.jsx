import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import Title from "./Title"
import ProductItem from "./ProductItem"
const Relatedproduct = ({ category, location }) => {

    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            let copyOfP = products.slice()
            copyOfP = copyOfP.filter(el => category === el.category)
            copyOfP = copyOfP.filter(el =>
                location === el.location ||
                location.split(',')[0].trim().toLowerCase() === el.location.split(',')[0].trim().toLowerCase()
            )
            setRelated(copyOfP.slice(0, 5))

        }
    }, [products])
    return (
        <div className='my-24 w-full'>
            <div className="text-center text-3xl sm:text-5xl font-bold py-2 my-4">
                Related Poducts
            </div>

            <div className="flex flex-row sm:flex-col items-center justify-center sm:justify-start gap-4 ">
                {related.map(el => (<ProductItem key={el._id} item={el} />))}

            </div>

        </div>
    )
}

export default Relatedproduct