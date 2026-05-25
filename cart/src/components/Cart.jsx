import styles from "./Cart.module.css"
import { useEffect, useState } from "react";

export default function Cart () {
    const [cartItems, setCartItems] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    
    useEffect(() => {
        
        const handleAddToCart = (e) =>{
            setCartItems((prev) => [...prev, e.detail]);
        };
        window.addEventListener("addToCart", handleAddToCart);

        return () => {
            window.removeEventListener("addToCart", handleAddToCart);
        }
    }, []);

    function deleteItem(index) {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    }
    
    return (
        <div className={styles.cart}>
            <button onClick={() => setShowMenu(!showMenu)} className={styles.dropdown}>
                {showMenu ? "Close orders" : "My order"}   
            </button>   
                {showMenu && (
                    <div className={styles.dropdown__container}>
                        {cartItems.length === 0 ?(<p>Your order is empty</p>) : (
                            <>
                                <ul className={styles.dropdown__list}>
                                    {cartItems.map((item, index) => (
                                        <li className={styles.dropdown__items} key={index}>
                                            <span className={styles.dropdown__text}>
                                            {item.item}<br/>${item.price.toFixed(2)}
                                            </span>
                                            <button className={styles.dropdown__delete} onClick={() => deleteItem(index)}>X</button>
                                        </li>
                                ))}
                                </ul>
                            </>
                        )}
                        {cartItems.length > 0 && (
                            <>
                                <p className={styles.dropdown__total}>Total: $ {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
                                <button className={styles.dropdown__clear} onClick={() => setCartItems([])}>Clear order</button>
                                <button className={styles.dropdown__checkout}>Checkout</button>
                            </>
                        )}
                    </div>
                )}
        </div>
    );                                                                                                                                      
}