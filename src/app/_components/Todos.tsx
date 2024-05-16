"use client"
import { useEffect, useState } from "react"
import { trpc } from "../_trpc/client"
import { number } from "zod"


export default function Todos(){
    useEffect(()=>{
        
    })

    const [input, setInput] = useState<string>("")
    const [inputq, setinputQ] = useState("")   
    const alltodo = trpc.getallTodos.useQuery()
    const idtodo = trpc.getTodobyID.useQuery(Number(input))
    const addtodo = trpc.createTodo.useMutation({ onSettled: () => alltodo.refetch() })
    const handleParse = () => {
        if(input === "all"){
            
            
            
        } else {
            
            
        }
    }
    return (
        <div className="flex flex-1 gap-2 flex-col">
            <p>try putting `all` or a number</p>
            <input type="text" className="border text-black" value={input} onChange={(e) => setInput(e.target.value)} />

            <button onClick={()=> {
                addtodo.mutate(input)
                setInput("")
            }}>add todo</button>

            <p className="text-white">todos: {JSON.stringify(alltodo.data)}</p>
            {idtodo && <p className="text-white">byid todos: {JSON.stringify(idtodo.data)}</p>}
            
        
            
        </div>
    )
}