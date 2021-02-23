import React from "react";
import { categories } from "./Categories";

export default function ContentsForm({ item, handleChange, handleSubmit }) {
	var styles = {
		form: {
			width: "50%",
			marginLeft: "3%",
			marginTop:"1%"
		},
		inputName: {
			fontSize: "120%",
			width:"33%",
			marginRight:"1.5%"
		},
		span: {
			fontSize: "120%",
			position:"relative",
			marginRight:"-1.5%",
		},
		inputAmount: {
			fontSize: "120%",
			width:"15%",
			marginRight:"1%",
			paddingLeft:"1.5%",
			textAlign:"left"
		},
		inputCategory: {
			fontSize: "120%",
			width:"20%",
			marginRight:"1%"
		},
		addButton: {
			fontSize: "120%",
			width:"16%",
			cursor: "pointer",
		},
	}

	return (
		<form style = {styles.form} onSubmit = {handleSubmit}> 
			<input style = {styles.inputName}
				name = "name"
				placeholder = "Item Name"
				value = {item.name}
				onChange = {handleChange}
			/>
			<span style = {styles.span}>$</span><input style = {styles.inputAmount}
				type = "number"
				name = "amount"
				step = ".01"
				placeholder = "0.00"
				value = {item.amount}
				onChange = {handleChange}
			/>
			<select style = {styles.inputCategory}
				name = "category"
				value = {item.category}
				onChange = {handleChange} 
			>
				{categories.map((category) => (
					<option key = {category} value = {category}>{category}</option>
				))}
			</select>
			<button style = {styles.addButton} type = "submit">Add</button>
	  </form>
	)
}