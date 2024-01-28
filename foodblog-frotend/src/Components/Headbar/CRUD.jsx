import React, { useState } from 'react'
import './CRUD.css'
import Modal from 'react-modal'
import AddRecipe from '../../Admin/Modals/AddRecipe';

export default function CRUD({fetchData}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [operationType, setOperationType] = useState("");

  const customStyles = {
    content: {
      top: '10%',
      left: '10%',
      width: '80%',
      padding: '0px'
    },
  };

  function openModal(operation  ) {
    setOperationType(operation);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setOperationType("");
  }

  return (
    <>
      <section className="crud-container">
        <button className="crud-operations" onClick={() => openModal("add")}>Add Recipe</button>
      
      </section>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} closeModal={closeModal} style={customStyles} contentLabel="Example Modal">
        {operationType === "add" && <AddRecipe fetchData={fetchData} closeModal={closeModal} />}
      </Modal>
    </>
  )
}
