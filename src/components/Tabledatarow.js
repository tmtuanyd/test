import React from 'react'


export default function Tabledatarow(props) {
    return (
        <tr>
            <td>{props.username}</td>
            <td>{props.name}</td>
            <td>{props.authority}</td>
            <td>{props.institute}</td>
            <td>{props.classlist}</td>
            <td>
              <div className="btn-group">
                <div className="btn-edit"><i className="far fa-edit" /></div>
                <div className="btn-delete"><i className="far fa-trash-alt" /></div>
              </div>
            </td>
          </tr>
    )
}
