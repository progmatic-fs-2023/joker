import NavSearch from './NavSearch';

function Header() {
  return (
    <div className="w-100">
      <header className="d-flex justify-content-around flex-wrap">
        <h1 className="">Herbalism.hu</h1>
        <small className="w-50 text-center">
          <p className="m-0">
            Herbalism is the tradition of studying and using herbs for their healing properties.
            <br />
            Growing freely in the natural world, the term ‘herb’ refers to every part of the plant,
            from the roots to the flowers.
          </p>
        </small>
      </header>
      <NavSearch />
    </div>
  );
}

export default Header;
