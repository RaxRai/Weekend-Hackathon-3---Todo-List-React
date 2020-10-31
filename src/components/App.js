import React, { useEffect, useState } from "react";
import "./../styles/App.css";

function App() 
{
	const [ tasks, setTasks] = useState([]);
	const [text , setText] = useState("");
	const handleChange = (e)=>{
		setText(e.target.value);
	}
	const handleEditChange = (e)=>{
		setText(e.target.value);
	}
	const handleSaveTask=(index)=>{
		let tasksCopy = [...tasks];
		tasksCopy[index].name = text;
		tasksCopy[index].edit = false;
		setTasks(tasksCopy);
	}
	const handleAdd =()=>{
		if(text === "") return;
		let tasksCopy = [...tasks];
		tasksCopy.push({ name: text, edit: false});
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
		<textarea rows="3" id="task" onChange={handleChange}/>
		<button id="btn" onClick={handleAdd}>Add</button>

		{tasks.map((task, index)=>(
			<div key={index}>
			<p id={index}>{task.name}</p>
			
			{!task.edit? (
				<div>
				<button className="edit" onClick={()=>handleEdit(index)}>Edit</button>
				<button className="delete" onClick={()=>handleDelete(index)}>Delete</button>
		
				</div>) : (
					<div>
						<textarea onChange={handleEditChange} className="editTask"/>
						<button className="saveTask" onClick={()=>handleSaveTask(index)}>Save Task</button>
					</div>
				)

			}
			<br />
			</div>
		))}
	</div>
	);
}


export default App;
