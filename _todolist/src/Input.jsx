import React, { useState, useEffect } from 'react';

export const Input = ({ addTodo }) => {
	const [value, setValue] = useState("");
  
	const handleSubmit = e => {
	  e.preventDefault();
	  if (!value) return;
	  addTodo(value);
	  setValue("");
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<input
		  type="text"
		  className="input"
		  value={value}
		  onChange={e => setValue(e.target.value)}
		/>
	  </form>
	);
  }