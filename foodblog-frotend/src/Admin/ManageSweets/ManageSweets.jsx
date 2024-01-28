import React, { useEffect, useState } from 'react'
import './ManageSweets.css'
import Modal from 'react-modal'
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import CRUD from '../../Components/Headbar/CRUD'
import UpdateRecipe from '../Modals/UpdateRecipe';
import axios from 'axios';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

export default function ManageSweets() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [operationType, setOperationType] = useState("");

  const customStyles = {
    content: {
      top: '10%',
      left: '10%',
      width: '80%',
      padding: '0px'
    },
  };

  function openModal(operation) {
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

  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:8080/api/get-recipe')
    .then((res) => {
      console.log("fetching");
      const result = res.data;
      return result;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="manage-sweets-container">
        <h2 id="manage-sweets-head">Sweets Recipes</h2>
        <CRUD fetchData={fetchData} />
        <div className="manage-sweets-div">
          <table className="recipe-records">
            <thead>
              <tr>
                <th className="rowspan">No.</th>
                <th className="rowspan">Date</th>
                <th className="rowspan">Recipe Image</th>
                <th className="rowspan">Recipe Name</th>
                <th className="rowspan">Recipe Details</th>
                <th className="rowspan" colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {Data && Data.length > 0 ? (
                Data.map((item, index) =>
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.recipeName}</td>
                    <td>{item.recipeIngredients}</td>
                    <td>{item.recipeSteps}</td>
                    <td>{item.recipeType}</td>
                    <td>{item.recipeImg}</td>
                    <td><FaPenToSquare onClick={() => openModal("update")} /></td>
                    <td><MdDelete /></td>
                    <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                      {operationType === "update" && <UpdateRecipe closeModal={closeModal} />}
                    </Modal>
                  </tr>
                )) : (
                <tr>
                  <td colSpan="6">No Recipies available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
