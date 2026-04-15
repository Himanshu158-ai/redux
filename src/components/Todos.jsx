import React, { use, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoDelete, todoEdit } from '../features/todo/todo.slice';


const Todos = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos.todos);

  // function handelDel(e){
  //   const copyData = data.filter((item,idx)=>{
  //     return idx!==e;
  //   })
  //   props.setdata(copyData);
  // }

  function handelDel(e) {
    dispatch(todoDelete({ id: e }));
  }

  function handelEdt(dets) {
    dispatch(todoEdit(dets));
  }


  return (
    <div className="space-y-3">
      {
        data.map((d, idx) => {
          return (
            <div key={idx} className="p-3 bg-gray-50 border border-gray-200 rounded-md shadow-sm flex justify-between items-center">
              <li className="list-none text-gray-700 font-medium">{d.text}</li>
              <div className='flex gap-2'>
                <button className='bg-amber-600 px-2 py-1 rounded-md text-white '
                  onClick={()=>handelEdt(d)}
                >EDT</button>

                <button className="px-2 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                  onClick={() => handelDel(d.id)}
                >DEL</button>
              </div>

            </div>)
        })
      }
    </div>
  )
}

export default Todos