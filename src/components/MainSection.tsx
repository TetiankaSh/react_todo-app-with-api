/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

interface MainSectionProps {
  todos: Todo[];
  visibleTodos: Todo[];
  handleDelete: (todoId: number) => Promise<void>;
  deletingTodoId: number | null;
  handleUpdate: (todoId: number, updatedFields: Partial<Todo>) => Promise<void>;
  updatingTodoId: number | null;
}

export const MainSection: React.FC<MainSectionProps> = ({
  todos,
  visibleTodos,
  handleDelete,
  deletingTodoId,
  handleUpdate,
  updatingTodoId,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.length > 0 && (
        <ul className="todo-list">
          {visibleTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              isLoading={deletingTodoId === todo.id}
              handleUpdate={handleUpdate}
              isUpdating={updatingTodoId === todo.id}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
