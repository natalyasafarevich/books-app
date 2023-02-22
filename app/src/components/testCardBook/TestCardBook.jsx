import { useEffect } from "react"
import { getBookNew } from "../../api/getBooks"

export default function TestCardBook(){
    useEffect(()=>{ 
async function tt(){
   
        // const res = await getBookNew();
        // console.log(res.data.results)

}
tt()

    },[])
    return(
        <div> book</div>
    )
}