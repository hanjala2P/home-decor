// get data from local storage
export const loadWishList = () => {
   try{
    const data = localStorage.getItem('wishlist');
    return data? JSON.parse(data):[]
   }
   catch(error){
    console.log(error)
    return []
   }
}
// add data to local storage
export const updateList = (product)=>{
    const wishList = loadWishList()

    try{
        const isDuplicate = wishList.some(p => p.id === product.id)
        if(isDuplicate) return alert('product already in wishlist')
            const upddatedWishList = [...wishList,product]
        localStorage.setItem('wisjlist',JSON.stringify(upddatedWishList))
    }
    catch(error){
        console.log(error)
    }

}
// remove data from local storage
export const removeFromWishList =(id)=>{
    const wisList =loadWishList()
    try{
        const updatedList =wisList.filter(p => p.id !== id)
        localStorage.setItem('wishlist',JSON.stringify(updatedList))
    }
    catch(error){
        console.log(error)
    }
}