import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css"
//import validator from 'validator';

const AddRecord = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        mark: "",
        model: "",
        generation_name: "-",
        year: "",
        mileage: "",
        vol_engine: "",
        fuel: "",
        city: "",
        province: "",
        price: ""
    });
    const [added, setAdded] = useState(false);
    setTimeout(() => {
        if(added){
        window.location.reload();
        }
        setAdded(false)
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
    const [isValid, setIsValid] = useState(true)
    const handleSubmit = (e) => {
    e.preventDefault();
    if(!(/^\d+$/.test(formData.year))){
        toast.success("Rok musi być liczbą!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000 
        });
        setIsValid(false)
    }else{
        setIsValid(true)
    }
    if(!(/^\d+$/.test(formData.mileage))){
        toast.success("Przebieg musi być liczbą!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000 
        });
        setIsValid(false)
    }else{
        setIsValid(true)
    }
    if(!(/^\d+$/.test(formData.vol_engine))){
        toast.success("Pojemnosc musi być liczbą!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000 
        });
        setIsValid(false)
    }else{
        setIsValid(true)
    }
    if(!(/^\d+$/.test(formData.price))){
        toast.success("Cena musi być liczbą!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000 
    });
    setIsValid(false)
    }else{
        setIsValid(true)
    }
    if(formData.city===""||formData.mark===""||formData.year===""||formData.mileage===""||formData.vol_engine===""||formData.fuel===""||formData.city===""||formData.province===""||formData.price===""){
        toast.success("Formularz nie może zawierać pustych pol!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000 
        });
    }else if(!isValid){

    }else{
    fetch('http://localhost:8080/api/addData', {
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
        setAdded(true);
        toast.success("Dodawanie!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000 
        });
        closePopup();
    }
    };
  return (
    <div>
      <button  className={styles.white_btn}  onClick={openPopup}>Add Record</button>
        <div>
            {isOpen && (
                <div className={styles.popup}>
                    <form onSubmit={handleSubmit}>
                    <h3>Dodaj Samochod</h3>
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

export default AddRecord;