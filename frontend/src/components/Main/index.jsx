import styles from "./styles.module.css"
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteRecord from "./DeleteRecord";
const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/data");
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log(error);
        }
      };

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Chmury</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Wyloguj
                </button>
            </nav>
            <div>
            <h1>Data List</h1>
            <div className={styles.tab} >
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Marka: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Model: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Nazwa generacji:</p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Rok: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Przebieg: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Pojemność silnika: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Paliwo: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Miasto: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Województwo: </p></div>
            <div className={styles.tab_rec_par}><p className={styles.tab_rec}>Cena: </p></div>
                </div>
            {data.map((item) => (
                <div className={styles.tab} key={item._id}>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.mark}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.model}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.generation_name}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.year}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.mileage}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.vol_engine}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.fuel}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.city}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.province}</p></div>
                    <div className={styles.tab_rec_par}><p className={styles.tab_rec}> {item.price}</p></div>
                    <div className={styles.tab_rec_par}><DeleteRecord recordId={item._id} /></div>
                </div>
            ))}
            </div>
            <ToastContainer />
        </div>
    )
}
export default Main