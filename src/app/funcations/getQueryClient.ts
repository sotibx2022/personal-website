import { isServer, QueryClient } from "@tanstack/react-query"
const createQueryClient = () =>{
    return new QueryClient({
        defaultOptions:{
            queries:{
                staleTime:60*1000*60,
            }
        }
    })
}
export const getQueryClient=()=>{
    let browserQueryCLient:QueryClient | undefined = undefined
if(isServer){
    return createQueryClient()
}else{
if(!browserQueryCLient){
    browserQueryCLient = createQueryClient()
}else{
    return browserQueryCLient
}
}
}