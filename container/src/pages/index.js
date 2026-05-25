import styles from "./Index.module.css"
import dynamic from "next/dynamic"

const Menu = dynamic(() => import("menu/Menu"), {ssr: false});
const Cart = dynamic(() => import("cart/Cart"), {ssr: false});

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.header__img} src="/logo.webp" alt="Logo with Pickle Frenzy"/>
        <Cart/>
      </header>
      <Menu/>
    </div>
  )
}