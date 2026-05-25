import styles from "./Menu.module.css"

export default function Menu () {

    const items = [
        {
            name: "Acid Smash",
            description: "A smash burguer with a special sauce made of pickles",
            price: 19.99,
            image: "/acid-smash.webp"
        },
        {
            name: "Smoky Pickle",
            description: "A smash burguer with a special sauce made of pickles and bacon",
            price: 24.99,
            image: "/smoky-pickle.webp"
        },
        {
            name: "French Fries",
            description: "Crispy fries",
            price: 9.99,
            image: "/french-fries.webp"
        },
        {
            name: "Special Pickle Fries",
            description: "Crispy pickles fries with mayonnaise",
            price: 14.99,
            image: "/pickle-fries.webp"
        },
        {
            name: "Coke",
            description: "Classic Coke",
            price: 4.99,
            image: "/coke.webp"
        },
        {
            name: "Pepsi",
            description: "Classic Pepsi",
            price: 4.99,
            image: "/pepsi.webp"
        }
    ]
    
    return (
        <>
            <h2 className={styles.menu}> Menu </h2>
            <ul className={styles.menu__list}>
                {items.map((item, index) => (   
                    <li className={styles.menu__item} key={index}> 
                    <img className={styles.menu__image} src={item.image} alt={item.name} />
                        <div className={styles.menu__content}>
                            <p className={styles.menu__title}>{item.name}</p>
                            <p className={styles.menu__description}> {item.description} </p>
                            <p className={styles.menu__price}> Price: ${item.price.toFixed(2)} </p>
                            <button className={styles.menu__button} onClick={() => {
                                window.dispatchEvent(new CustomEvent("addToCart", { detail: { item: item.name, price: item.price } }))
                            }}> Add to order </button>
                        </div>
                    </li>
                ))
                }
            </ul>
        </>
    )
}