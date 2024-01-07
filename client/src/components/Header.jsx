import CollapsibleNav from './CollapsibleNav';

function Header() {
  return (
    <div>
      <header>
        <h1 className=''>Herbalism.hu</h1>
        <pre>
          <h3 className=''>
            {`"Herbalism is the tradition of studying and using herbs for their healing properties.\nGrowing freely in the natural world, the term ‘herb’ refers to every part of the plant, from the roots to the flowers."`}
          </h3>
        </pre>
      </header>
      <CollapsibleNav />
    </div>
  )
}

export default Header
