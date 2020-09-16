import React from 'react';
//  Import Components
import { Todo } from 'components/example-02/Todo/Todo';

export const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{filteredTodos.map((todo) => (
					<Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
				))}
			</ul>
		</div>
	);
};
