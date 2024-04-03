import React, { useEffect } from "react"
import ToDoItem from "./ToDoItem"
interface cardProps{
    arr:[string,boolean][]
    setArr: React.Dispatch<React.SetStateAction<[string, boolean][]>>;

}
const ToDoCard: React.FC<cardProps> = ({arr,setArr}) => {
useEffect(()=>{
    console.log("rerender due to arr change.")
},arr)
 return (
    <div>
 {arr.map((el, key) => (
    <ToDoItem content={el[0] as string} isFullfilled={el[1] as boolean} key={key} setArr={setArr} arr={arr}/>
  ))}
</div>
 )
}

export default ToDoCard