import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css"

const DeleteRecord = ({ recordId }) => {
  const [deleted, setDeleted] = useState(false);
  const timeout = setTimeout(() => {
    if(deleted){
      window.location.reload();
    }
    setDeleted(false)
  }, 1500);
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/data/${recordId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setDeleted(true);
        toast.success("Usunieto!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000 
          });
          timeout()
        
      } else {
        console.log("Failed to delete record");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if(deleted){
    
  }

  return (
    <div>
      <button  className={styles.pink_btn} onClick={handleDelete}>Delete Record</button>
    </div>
  );
};

export default DeleteRecord;
