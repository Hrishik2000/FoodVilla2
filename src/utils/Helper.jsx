

//!Note

  //!way 1 explicite return from arrow function
 export function filterData(SearchData,AllRestorants){
    const filteredData = AllRestorants.filter((Restorant)=>{
      return Restorant?.info?.name.toLowerCase().includes(SearchData.toLowerCase())
  });

    return filteredData;
}



    
    //!way 2 implicit return from arrow function (remove the curly braces)
    //  export function filterData(SearchData,Restorants){
    //   const filteredData = Restorants.filter((Restorant)=>
    //     Restorant?.info?.name.toLowerCase().includes(SearchData.toLowerCase())
    // );
  
    //   return filteredData;
    //}