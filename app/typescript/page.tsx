'use client';
import useTodos from '@/src/hooks/useTodos';
import React, { useEffect, useState } from 'react';
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import View from '@components/atoms/View';
import List from '@components/molecules/List';
import RenderList from '@components/molecules/RenderList';

type Props = {
  name: string;
  age: number;
};

const Heading = ({ title }: { title?: string }) => {
  return <h1>{title}</h1>;
};

interface Data {
  text: string;
  id: number;
}
export default function TodoPage({}: Props) {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos([]);
  const [data, setData] = useState<Data[] | null>(null);
  // const [a, b] = useState<number>(10);
  useEffect(() => {
    fetch('data.json')
      .then((result) => result.json())
      .then((res: Data[]) => {
        setData(res);
      });
  }, []);
  const showAlert = (item: Data) => {
    alert(item.text);
  };
  const products = [
    {
      id: 1,
      title: 'Iphone 14',
      price: 242,
    },
  ];
  return (
    <div>
      <Heading title='Levantrung' />
      <div className='p-5 max-w-sm'>
        <div className='mb-5'>
          {/* {todos &&
            todos?.map((todo) => (
              <div key={todo.id} className='flex gap-x-3 items-center mb-2'>
                <span>{todo.text}</span>
                <button
                  onClick={() => onRemoveTodo(todo.id)}
                  className='p-2 text-center text-white bg-red-500 rounded-lg'
                >
                  Remove
                </button>
              </div>
            ))} */}
          <List showAlert={(item: Data) => showAlert(item)} data={data} />
          <RenderList
            keyExtractor={(product) => product.id}
            items={products}
            render={(item) => JSON.stringify(item)}
          />
          <RenderList
            items={todos}
            keyExtractor={(todo) => todo.id}
            render={(todo) => (
              <div key={todo.id} className='flex gap-x-3 items-center mb-2'>
                <span>{todo.text}</span>
                <button
                  onClick={() => onRemoveTodo(todo.id)}
                  className='p-2 text-center text-white bg-red-500 rounded-lg'
                >
                  Remove
                </button>
              </div>
            )}
          />
        </div>
        <div className='flex gap-x-5 items-center'>
          <input
            ref={inputRef}
            className='p-2 rounded-lg border border-slate-200'
            type='text'
          />
          <button
            onClick={onAddTodo}
            className='p-2 text-center text-white bg-blue-500 rounded-lg'
          >
            Add todos
          </button>
          <Button className='bg-blue' disabled type='submit'>
            Click me
          </Button>
        </div>
      </div>
      <Input placeholder='Enter your name' className='p-2 border' />
      <View as='button' type='button'>
        Con là ai
      </View>
    </div>
  );
}
