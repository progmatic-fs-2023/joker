function Contact() {
  const fullScreen = true; //
  return (
    <div className="mx-auto my-2 text-center" style={{ color: 'whitesmoke' }}>
      <h1>Kapcsolat</h1>
      <p>Gyere és tanulj a Progmatic csoportjaiban!</p>
      <p>Mi jól éreztük magunkat és köszönjük! Most búcsúzunk!</p>
      <h4>*** JOKER TEAM ***</h4>
      <div>
        <iframe
          style={{ borderRadius: '12px', boxShadow: '5px 5px 15px', color: 'black' }}
          title="4331huo_$asdfd"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.67892182229224!2d19.03791444998641!3d47.52865272231146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9583cee5b0f%3A0xc140539254ce4408!2sProgmatic!5e1!3m2!1shu!2sus!4v1706475033227!5m2!1shu!2sus"
          width="40%"
          height="550px"
          allowFullScreen={fullScreen}
          // loading="lazy"
        />
      </div>
    </div>
  );
}

export default Contact;
