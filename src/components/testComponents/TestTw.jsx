import React from 'react';

const TestTw = () => {
    return (
        <div className='container mx-auto border mt-5 flex-row'>
            <div className='flex justify-center py-2 border'>
            <button className='py-2 px-4 text-white font-bold rounded bg-blue-500 hover:bg-blue-700 sm:bg-orange-400 md:bg-orange-900 lg:bg-green-500  xl:bg-red-700'>
                mi boton
            </button>
            </div>
            <h1 className='mt-5 text-green-500 text-5xl text-center'>Esto es un H1</h1>
            <h2 className='text-end'>Esto es un H2</h2>
            <h3 className='uppercase'>Esto es un H3</h3>
            <h4 className=' bg-pink-500 text-white text-center py-10 px-5 m-10 rounded-lg text-xl w-48'>Esto es un H4</h4>
            <h5 className='shadow-md pl-2 mx-2'>Esto es un H5</h5>
            <div className='m-5 mt-10 p-5 border'>
                <p  className='text-xl sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a possimus harum ipsa, quod maiores ducimus libero, voluptatum facere, explicabo sunt. Cumque nesciunt, voluptatum iure laudantium ducimus vel perferendis iusto.</p>
            </div>
        </div>
    );
};

export default TestTw;