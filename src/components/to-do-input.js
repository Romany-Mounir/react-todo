import React, {useState} from 'react'

export default function TodoInput({createTodoItem}) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (value===''){
            return console.log('please add value');
        }
        createTodoItem(value);
        setValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add your Task here' value={value} onChange={e=>setValue(e.target.value)}></input>
        <button onClick={handleSubmit}>+</button>
    </form>

  )
}
