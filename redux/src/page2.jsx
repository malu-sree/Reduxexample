import { useDispatch } from "react-redux"
import { deCount,square } from "./counterSlice"


function Page2(){
    const dispatch=useDispatch()
    return(
        <>
        <button onClick={()=>{
            dispatch(deCount())
        }}> 
            decrementing
        </button>
        <input type="text" name="" onChange={(e)=>{
            dispatch(square(e.target.value))

        }} id=""/>


        </>
    )
}

export default Page2