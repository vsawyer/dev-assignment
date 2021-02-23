import React from "react";
import deleteIcon from "../icons/delete_icon.jpg";
import {sumAmounts} from "./Sum.js";

var styles = {
    header: {
        backgroundColor: "#dddddd",
        textAlign: "left",
        paddingTop: "1.4%",
        paddingBottom: "1.4%",
        paddingLeft: "1.4%",
        width:"50%"
    }, 
    row: {
        backgroundColor: "#f2f2f2",
        paddingTop: "1.4%",
        paddingBottom: "1.4%",
        paddingLeft:"6%"
    },
    img: {
        cursor: "pointer",
        verticalAlign: "bottom",
      },
    table: {
        borderWidth: 1,
        borderColor: "#333333",
        borderStyle: "solid",
        borderCollapse: "collapse",
        width: "45%",
        marginTop: "3%",
        marginLeft: "3%",
        fontSize: "120%"
      }
};

export default function ContentsList({ total, parsedList, handleDelete }) {
    return (      
            <table style = {styles.table}>
                <tbody>
                    {Object.entries(parsedList).map(([category, items]) => (              
                        <React.Fragment key={category}>
                            <th style = {styles.header}>{category}</th>
                            <th style = {styles.header}>${items.reduce(sumAmounts, 0.0).toFixed(2)}</th>              
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td style = {styles.row}>{item.name}</td>
                                    <td style = {styles.row}>${item.amount.toFixed(2)}
                                        <img style = {styles.img} src={deleteIcon} alt="Delete Icon" width="30" height="30" onClick={()=> handleDelete(item.id)}/>                                      
                                    </td>
                                </tr>        	
                            ))}
                        </React.Fragment>             
                    ))}
                    <th style = {styles.header}>TOTAL: </th>
                    <th style = {styles.header}>${total.toFixed(2)}</th>    
                </tbody>
            </table>  
             
    );
}