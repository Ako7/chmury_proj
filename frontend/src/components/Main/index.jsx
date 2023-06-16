import styles from "./styles.module.css"
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteRecord from "./DeleteRecord";
import UpdateRecord from "./UpdateRecord";
import AddRecord from "./AddRecord";
import Logout from "./Logout";
const Main = () => {
    const [data, setData] = useState([]);
    const [showMenu, setShowMenu] = useState(new Array(data.length).fill(false));
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async (sortCol,sortMet) => {
        try {
          const response = await fetch(`http://localhost:8080/api/data/${sortCol}/${sortMet}`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log(error);
        }
      };

    const toggleMenu = (index) => {
        const updatedMenu = [...showMenu];
        updatedMenu[index] = !updatedMenu[index];
        setShowMenu(updatedMenu);
      };
    const sort = (c,m) => {
        fetchData(c,m)
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Lista samochodow</h1>
                <div className={styles.tab}>
                    <div className={styles.menu}>
                        <button className={styles.menu_item}>Sortowanie</button>
                        <div className={styles.menu_content}>
                            <button className={styles.menu_item} onClick={() => sort("pr","asc")}>Cena Rosnąco</button>
                            <button className={styles.menu_item} onClick={() => sort("pr","desc")}>Cena Malejąco</button>
                            <button className={styles.menu_item} onClick={() => sort("yr","asc")}>Rok Rosnąco</button>
                            <button className={styles.menu_item} onClick={() => sort("yr","desc")}>Rok Malejąco</button>
                            <button className={styles.menu_item} onClick={() => sort("md","asc")}>Model alfabetycznie</button>
                            <button className={styles.menu_item} onClick={() => sort("ct","asc")}>Miasto alfaberycznie</button>
                            <button className={styles.menu_item} onClick={() => sort("def","asc")}>Przywóć domyślne</button>
                        </div>
                    </div>
                </div>
                <div className={styles.tab}>
                    <AddRecord/>
                    <Logout/>
                </div>
            </nav>
            <div>
            <div className={styles.tab} >
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Marka: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Model: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Rok: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Przebieg: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Pojemność silnika: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Paliwo: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Miasto: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Województwo: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Cena: </p></div>
                </div>
            {data.map((item, index) => (
                <div className={styles.tab} key={item._id}>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.mark}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.model}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.year}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.mileage}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.vol_engine}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.fuel}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.city}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.province}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.price}</p></div>
                    <div className={styles.tab_rec_par}><button className={styles.pink_btn}  onClick={() => toggleMenu(index)}>Edit</button></div>
                    {showMenu[index] && (
                        <div className={styles.tab_menu}>
                        <DeleteRecord recordId={item._id} />
                        <UpdateRecord record={item}/>
                        </div>
                    )}
                    
                </div>
            ))}
            </div>
            <ToastContainer />
        </div>
    )
}
export default Main