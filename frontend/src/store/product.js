import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {sucess: false, message: "Please  fill all the fields."}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products:[...state.products, data.data]}));
        return {sucess: true, message: "Product created successfully"}
    },
}))

