import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../../axios/apiClient'
import ProductList from '../../components/ProductList/ProductList'
import BrowseByName from '../../components/Sections/BrowseByName/BrowseByName'

function Search() {
    const [product, setProduct] = useState([])
    const {idMeal}= useParams()

    async function getSearchProduct() {
        try{
            const res = await apiClient.get(`/search.php?s=${idMeal}`)
            setProduct(res.data.meals)
        } catch (error) {
            console.log(error);
            
        }
        
    }
    useEffect(()=>{
        getSearchProduct()
    },[idMeal])

  return (
    <div>
        <ProductList data={product}/>
    </div>
  )
}

export default Search