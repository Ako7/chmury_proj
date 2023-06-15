import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css"

const UpdateRecord = ({ record }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: record._id,
        mark: record.mark,
        model: record.model,
        year: record.year,
        mileage: record.mileage,
        vol_engine: record.vol_engine,
        fuel: record.fuel,
        city: record.city,
        province: record.province,
        price: record.price
    });
    const [deleted, setDeleted] = useState(false);
    setTimeout(() => {
        if(deleted){
        window.location.reload();
        }
        setDeleted(false)
    }, 1500);
    const openPopup = () => {
      setIsOpen(true);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Wyślij dane formularza do backendu (Express)
      fetch('http://localhost:8080/api/updateData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Przetwórz odpowiedź z backendu
          // ...
        })
        .catch((error) => {
          console.error('Błąd:', error);
        });
        setDeleted(true);
        toast.success("Usunieto!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000 
          });
        closePopup();
    };
  
  return (
    <div>
      <button  className={styles.pink_btn} onClick={openPopup}>Update Record</button>
        <div>
            {isOpen && (
                <div className={styles.popup}>
                    <form onSubmit={handleSubmit}>
                    <div className={styles.tab}><p className={styles.form_label}>Marka: </p><input type="text" name="mark"  value={formData.mark} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Model: </p><input type="text" name="model"  value={formData.model} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Rok: </p><input type="text" name="year"  value={formData.year} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Przebieg: </p><input type="text" name="mileage"  value={formData.mileage} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Pojemność silnika: </p><input type="text" name="vol_engine"  value={formData.vol_engine} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Paliwo: </p><input type="text" name="fuel"  value={formData.fuel} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Miasto: </p><input type="text" name="city"  value={formData.city} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Województwo: </p><input type="text" name="province"  value={formData.province} onChange={handleInputChange} /></div>
                    <div className={styles.tab}><p className={styles.form_label}>Cena: </p><input type="text" name="price"  value={formData.price} onChange={handleInputChange} /></div>
                    <button className={styles.pink_btn} type="submit">Zapisz</button>
                    <button className={styles.pink_btn} onClick={closePopup}>Anuluj</button>
                    </form>
                </div>
            )}
        </div>
    </div>
  );
};

export default UpdateRecord;
