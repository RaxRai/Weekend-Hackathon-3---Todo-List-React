import React, { useEffect, useState } from "react";
import "./../styles/App.css";

function App()
{
	const [ tasks, setTasks] = useState([]);
	const [text , setText] = useState("");
	const [editText , setEditText] = useState("");
	const handleChange = (e)=>{
		setText(e.target.value);
	}
	const handleEditChange = (e)=>{
		setEditText(e.target.value);
	}
	const handleSaveTask=(index)=>{
		let editTextCopy = editText.trim()
		if(editText === "" || editTextCopy === "") return;
		let tasksCopy = [...tasks];
		tasksCopy[index].name = editTextCopy;
		tasksCopy[index].edit = false;
		setTasks(tasksCopy);
		setEditText("");
	}
	const handleAdd =()=>{
		if(text.trim() === "") return;
		let tasksCopy = [...tasks];
		tasksCopy.push({ name: text.trim(), edit: false});
		setTasks(tasksCopy);
		setText("");
	}
	const handleEdit=(index)=>{
		let tasksCopy = [...tasks];
		tasksCopy[index].edit = true;
		setTasks(tasksCopy);

	}
	const handleDelete=(index)=>{
		let tasksCopy = [...tasks];
		let taskText = text;
		tasksCopy.splice(index,1);
		setTasks(tasksCopy);
	}

	return (
	<div id="main">
		<textarea rows="3" id="task" onChange={handleChange} value={text}/>
		<button id="btn" onClick={handleAdd} disabled={text.length == 0}>Add</button>

		{tasks.map((task, index)=>(
			<div key={index} className="list">
				<div id={index}>{task.name}</div>

				{!task.edit? (
					<>
					<button className="edit" onClick={()=>handleEdit(index)}>Edit</button>
					<button className="delete" onClick={()=>handleDelete(index)}>Delete</button>

					</>) : (
						<>
							<textarea onChange={handleEditChange} className="editTask" value={editText}/>
							<button className="saveTask" onClick={()=>handleSaveTask(index)} disabled={editText.length == 0}>Save Task</button>
						</>
					)

				}
				<br />
			</div>
		))}
	</div>
	);
}


export default App;
