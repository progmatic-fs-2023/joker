import FooterNavs from './FooterNavs';

function Footer() {
  return (
    <div className="d-flex justify-content-center text-center">
      Herbalism.hu&copy; gyógynövény webshop. Minden jog fenntartva!
      <nav>
        <FooterNavs />
      </nav>
    </div>
  );
}

export default Footer;
