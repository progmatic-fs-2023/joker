

function Payment() {
    return (
        <div>
            <h1>Fizetési módok</h1>
            <label htmlFor="cardNumber">Bankkártya:
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
          />
          </label>
          <label htmlFor="expiryDate">Lejárat:
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
          />
          </label>
          <label htmlFor="cvv">CVV:
          <input
            type="text"
            id="cvv"
            name="cvv"
          />
         </label>
            <button type="button">Mentés</button>
        </div>
    );
}

export default Payment;
