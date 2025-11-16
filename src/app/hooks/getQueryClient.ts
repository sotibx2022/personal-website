import { isServer, QueryClient } from "@tanstack/react-query"
export const getQueryClient = () => {
    let browserQueryClient: QueryClient | undefined = undefined
    const createQueryClient = () => {
        return new QueryClient({
        })
    }
    if (isServer) {
        return createQueryClient()
    } else {
        if(!browserQueryClient){
browserQueryClient = createQueryClient()
        }else{
            return browserQueryClient
        }
    }
}