import React from 'react'
import CRUD from '../../Components/Headbar/CRUD'
import './ManageSoups.css'

export default function ManageSoups() {
  return (
    <>
      <section className="manage-soups-container">
        <h2 id="manage-soups-head">Soups Recipes</h2>
        <CRUD />
        <div className="manage-soups-div">
          <table className="recipe-records">
            <thead>
              <tr>
                <th className="rowspan">No.</th>
                <th className="rowspan">Date</th>
                <th className="rowspan">Recipe Image</th>
                <th className="rowspan">Recipe Name</th>
                <th className="rowspan">Recipe Details</th>
              </tr>
            </thead>
            <tbody>
              {/* {Data ? Data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
              }).map((item, index) => */}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
