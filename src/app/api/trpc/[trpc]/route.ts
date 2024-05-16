import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server";


const handler = (req: Request) => fetchRequestHandler({
    endpoint: "/api/trpc", 
    req, router: appRouter,
    createContext: () => ({
        //we can something like auth context here
    })
})

export {handler as GET, handler as POST}