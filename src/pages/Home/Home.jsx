import React, { useState } from 'react'
import { useEffect } from 'react'
import HeroBlock from '../../components/Sections/HeroBlock/HeroBlock'
import SearchBlock from '../../components/Sections/SearchBlock/SearchBlock'
import LatestMeals from '../../components/Sections/LatestMeals/LatestMeals'
import PopularIngredients from '../../components/Sections/PopularIngredients/PopularIngredients'
import RandomMeals from '../../components/Sections/RandomMeals/RandomMeals'
import apiClient from '../../axios/apiClient'
import ProductList from '../../components/ProductList/ProductList'
import BrowseByName from '../../components/Sections/BrowseByName/BrowseByName'
import Country from '../../components/Country/Country'

function Home() {
  const [list, setList] = useState([])

  async function getList() {
    try{
      const res = await apiClient.get(`/search.php?s=a`)
      console.log(res);
      setList(res.data.meals)
    } catch (err){
      console.log(err);
      
    }
    
  }

  useEffect(()=>{
    getList()
  },[])



  return (
    <div>
      <HeroBlock/>
      <SearchBlock/>
      <ProductList data={list}/>
      <PopularIngredients/>
      <RandomMeals/>
      <Country/>
      <BrowseByName/>
    </div>
  )
}

export default Home