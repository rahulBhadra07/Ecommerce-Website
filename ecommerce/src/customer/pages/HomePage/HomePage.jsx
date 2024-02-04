import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import {mens_kurta} from '../../../Data/mens_kurta'

const HomePage =()=>{
    return(
        <div>
      <MainCarosel/>
      <div className="space-y-10 py-20 flex flex-col justify-centre px-5 lg:px-10">
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens kurta"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens shoes"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens shirts"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Womens saree"}/>
      <HomeSectionCarosel data={mens_kurta}/>
      </div>
      </div>
    )
}

export default HomePage;