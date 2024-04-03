import { useState } from "react";

// Define an interface for the props
interface TodoProps {
    content: string;
    isFullfilled: boolean;
    setArr: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
    arr:[string,boolean][]

   }
const ToDoItem: React.FC<TodoProps> = ({ content,setArr,arr}) => {
    const [isFullfilled,setFullfilled] = useState(false)
    const handleDone = () =>{
        setFullfilled(true)
    }
    const handleDel = () =>{
        setArr(arr.slice(0,-1))
    }

  return (
    <div className="h-6 w-50 bg-gray-600 flex justify-center align-middle">
      <p className={isFullfilled?"line-through":""}>{content}</p>
      <button onClick={handleDone}>Done</button>
      <button onClick={handleDel}>Del</button>
    </div>
  )
}

export default ToDoItem
