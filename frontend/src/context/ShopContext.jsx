import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

  const currency = '$'
  const delivery_fee = 10
  const api_url = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState({
    h_ap: "House",
    rent_sell: "sell",
    location: "",
  })
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})

  const services = [
    {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    }, {
      name: "Casa À venda em Jaú - SP - Bairro Jardim Pedro Ometto",
      image: "sellImg1.png",
      price: "5000.00",
      rooms: "2",
      bathroom: "2",
      area: "120"
    },
  ]

  const [products, setProducts] = useState([])
  const [token, setToken] = useState("")

  const [count, setCount] = useState(0)
  const navigate = useNavigate()


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${api_url}/product/all`)

      if (response.data.success) {
        console.log(response.data.products);
        setProducts(response.data.products);
        
      } else {
        toast.error(response.data.message)

      }


    } catch (error) {
      toast.error(error.message)
    }
  }



  useEffect(() => {

    fetchProducts()
  }, [])
  const value = {
    api_url,
    products, currency, delivery_fee, navigate
    , search, setSearch
    , showSearch, setShowSearch,

    token, setToken, services
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
