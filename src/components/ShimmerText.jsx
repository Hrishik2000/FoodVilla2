// shimmer text is some Sturcture of UI which is rendered during the API Call is executing & we want to show some loading screen till the data loads
//this improves user experience 
//YOutube is following this "it shows the structure of Cards  of Youtube untill real card is not loaded on screen
// Amazon is not following this


export default function ShimmerText(){

    return (
        <>
        <div className="Restorant-list flex flex-wrap   ">
        {Array(10).fill("").map((element,index)=>{
                 return <div className="Shimmer-Card w-56 h-[400px] bg-[#E4AE74] m-3 rounded-2xl" key = {index}></div>
        })}
        </div>
        
        </>
        
    )
}