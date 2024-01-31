import FluidPic from '../micro/FliudPic';

function Lounge() {
  return (
    <div className="text-center mx-5" style={{ color: 'whitesmoke' }}>
      <h1>The Lounge</h1>
      <br />
      <p>This is the Lounge, Users, Admins and Editors can hang out here.</p>
      <FluidPic imageSrc="/img/salat.jpg" />
    </div>
  );
}

export default Lounge;
