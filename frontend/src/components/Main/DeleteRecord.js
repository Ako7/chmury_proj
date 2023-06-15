import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteRecord = ({ recordId }) => {
  const [deleted, setDeleted] = useState(false);
  const timeout = setTimeout(() => {
    window.location.reload();
    setDeleted(true);
  }, 10000);
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
      <button onClick={handleDelete}>Delete Record</button>
    </div>
  );
};

export default DeleteRecord;
