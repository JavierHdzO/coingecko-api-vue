import instance from "@/api/coingecko-api";

 const getCoinsgecko =  async() => {
    const result = await instance.call()
    
    return result.data
 }


 export default getCoinsgecko;