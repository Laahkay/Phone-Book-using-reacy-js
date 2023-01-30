import React from "react";
// import {Link} from 'react-router-dom';
import Navbar from "./navBar";
// import Form from "./form"
import EditForm from "./EditForm";

const displayData = (props) => {
  const { list, edit, handleDelete, handleEdit } = props;

  return (
    <div>
      <Navbar />

      <div>
        <br />
        {!edit ? (
          <div>
            <table>
              <tr>
              <th>Profile</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              <tbody>
                {list &&
                  list.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{}</td>
                        <td>{item.Firstname}</td>
                        <td>{item.Number}</td>
                        <td>{item.Email}</td>
                        <td>
                          <button className="buttonDelete" onClick={() => handleDelete(item.id)}>
                            Delete
                          </button>
                          {/* <br /> */}
                          <button className="buttonEdit" onClick={() => handleEdit(item.id)}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <EditForm />
        )}
      </div>
    </div>
  );
};

export default displayData;
