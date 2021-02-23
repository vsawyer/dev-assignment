import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/content";
import ContentsForm from "./ContentsForm";
import ContentsList from "./ContentsList";
import { categories } from "./Categories";
import { groupBy } from "./Parser";
import { sumAmounts } from "./Sum";

const initialFieldValues = {
	name: '',
	amount: '',
	category: categories[0]
}

const Contents = (props) => {
	const [item, setItem] = useState(initialFieldValues)
	const handleChange = e => { 
		const{name, value} = e.target
		setItem({
			...item,
			[name]: value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.createContent(item, () => console.log("INSERTED"))
		setItem(initialFieldValues);
	}
	useEffect(() => {
		props.fetchAllContents();
	}, [])

	const handleDelete = id => {		
		props.deleteContent(id, () => console.log("DELETED"))
	}

	return (
		<div>
			<ContentsList 
				total={props.ContentList.reduce(sumAmounts, 0.0)}
				parsedList = { groupBy(props.ContentList, 'category') }
				handleDelete={handleDelete} 
			/>
			<ContentsForm 
				item={item}
        		handleChange={handleChange}
        		handleSubmit={handleSubmit}
			/>
		</div>
	);
}

const mapStateToProps = state => ({
	ContentList: state.content.list
})

const mapActionToProps = {
	fetchAllContents: actions.fetchAll,
	deleteContent: actions.Delete,
	createContent: actions.create
}

export default connect(mapStateToProps, mapActionToProps)(Contents);