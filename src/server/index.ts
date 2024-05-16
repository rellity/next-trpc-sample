import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const appRouter = router({
    getallTodos: publicProcedure.query(async ()=> {
        const todos = await prisma.todos.findMany()
        return todos
    }),

    getTodobyID: publicProcedure.input(z.number()).query(
        async ({ input }) => {
            return await prisma.todos.findUnique({
                where: {    
                    id: input
                }
            })
        }
    ),

    createTodo: publicProcedure.input(z.string()).mutation(
        async ({input}) => {
            return await prisma.todos.create({data:{ data:input}})
        }
    )
    
})

export type AppRouter = typeof appRouter