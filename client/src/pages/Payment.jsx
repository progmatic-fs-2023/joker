function Payment() {
  return (
    <div>
      <h3>Bankkártya adatai</h3>

      <label htmlFor="name">
        Név:
        <input type="text" id="name" name="name"  placeholder="NÉV" />
      </label>

      <label htmlFor="cardNumber">
        Bankkártya száma:
        <input type="text" id="cardNumber" name="cardNumber" placeholder="16 karakter" />
      </label>
      <label htmlFor="expiryDate">
        Lejárat:
        <input type="text" id="expiryDate" name="expiryDate" placeholder="09/25" />
      </label>
      <label htmlFor="cvv">
        CVV:
        <input type="text" id="cvv" name="cvv" placeholder="CVV" />
      </label>
    </div>
  );
}

export default Payment;
