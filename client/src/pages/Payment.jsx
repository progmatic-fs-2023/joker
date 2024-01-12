

function Payment() {
    return (
        <div>
            <h1>Fizetési módok</h1>
            <label htmlFor="cardNumber">Bankkártya:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
          />
          <label htmlFor="expiryDate">Lejárat:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
          />
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
          />
            <button>Mentés</button>
        </div>
    );
}

export default Payment;
