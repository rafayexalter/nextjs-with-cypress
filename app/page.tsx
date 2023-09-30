import Image from "next/image";
import style from "@/app/style.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={style.nav}>
        <div className={style.navItem}>
          <Link href="/">
            <h1 className={style.navItemText}>Home</h1>
          </Link>
        </div>

        <div className={style.navItem}>
          <Link href="/products">
            <h1 className={style.navItemText}>Products</h1>
          </Link>
        </div>

        <div className={style.navItem}>
          <Link href="/about">
            <h1 className={style.navItemText}>About</h1>
          </Link>
        </div>

        <div className={style.navItem}>
          <div className={style.navDropdown} data-cy="dropDown">
            <h1 className={`${style.navItemText} ${style.navDropBtn}`}>
              Learn &#8681;
            </h1>
            <div className={style.navDropdownContent} data-cy="dropDownContent">
              <Link href="/javascript">
                <h2 className={style.navDropdownItem}>JavaScript</h2>
              </Link>
              <Link href="/react">
                <h2 className={style.navDropdownItem}>React</h2>
              </Link>
              <Link href="/python">
                <h2 className={style.navDropdownItem}>Python</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
