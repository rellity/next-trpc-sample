"use client"
import { useEffect, useState } from "react"
import { trpc } from "../_trpc/client"
import { number } from "zod"


export default function Todos(){
    const [input, setInput] = useState<string>("") 
    const alltodo = trpc.getallTodos.useQuery()
    const idtodo = trpc.getTodobyID.useQuery(Number(input))
    const addtodo = trpc.createTodo.useMutation({ onSettled: () => alltodo.refetch() })
    
    return (
        <div className="flex flex-1 gap-2 flex-col">
            <p>try putting `all` or a number</p>
            <input type="text" className="border text-black" value={input} onChange={(e) => setInput(e.target.value)} />

            <button onClick={()=> {
                addtodo.mutate(input)
                setInput("")
            }}>add todo</button>

            {alltodo.data?.map((item)=>{
             return (
                <div key={item.id} className="flex flex-col">
                    <p>
                        id: {item.id}
                    </p>
                    <p>
                        entry: {item.data}
                    </p>
                </div>
             )   
            })}

            {idtodo && <p className="text-white">byid todos: {JSON.stringify(idtodo.data)}</p>}
        </div>
    )
}