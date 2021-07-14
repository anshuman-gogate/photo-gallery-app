import {createContext , useState , useEffect} from 'react';

const Context = createContext();
const {Provider} = Context;
const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function ContextProvider({children}) {
    // Store all photos here
    const [allPhotos , setAllPhotos] = useState([]);
    // State for cart
    const [cartItems , setCartItems] = useState([]);

    // Loading all photos in the allPhotos array when this component mounts on screen
    useEffect( () => {
        async function getData() {
            const resp = await fetch(URL);
            const data = await resp.json();
            setAllPhotos(data);
        }
        getData();
    } , [] )

    // Function to toggle favorite
    function toggleFavorite(id) {
        const updatedAllPhotos = allPhotos.map(item => {
            if(item.id === id) {
                item.isFavorite = !item.isFavorite;
            }

            return item;
        })

        setAllPhotos(updatedAllPhotos);
    }

    // Function to add items to cart
    function addToCart(item) {
        setCartItems(prev => [...prev , item]);
    }

    // Function to remove items from cart
    function removeFromCart(id) {
        const updatedCartItems = cartItems.filter(item => {
            if(item.id !== id) {
                return item;
            }
        })

        setCartItems(updatedCartItems);
    }

    return (
        <Provider value={{allPhotos , toggleFavorite , cartItems , setCartItems , addToCart , removeFromCart}}>
            {children}
        </Provider>
    )
}

export {ContextProvider , Context}