import create from "zustand"
import { CartItem } from "../components/shopDetails/ProductDetails";

type CartStore = {
    productCount: number;
    updateProductCount: () => void;
}

const useCartStore = create<CartStore>((set) => ({
    productCount: 0,

    updateProductCount: () => {
        const cartData: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const productCount = cartData.length
        set({ productCount })
    },
}))

export default useCartStore