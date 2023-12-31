import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <div>
        <header>
                <h1 className='text-5xl font-bold text-emerald-400'>Herbalism.hu</h1>
                <pre>
                    <h3 className='text-xl text-blue-600'>
                        {`"Herbalism is the tradition of studying and using herbs for their healing properties.\nGrowing freely in the natural world, the term ‘herb’ refers to every part of the plant, from the roots to the flowers."`}
                    </h3>
                </pre>
            </header>
      <NavBar />
    </div>
  )
}

export default Header
