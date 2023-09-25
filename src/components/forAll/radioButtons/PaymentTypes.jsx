import React from "react";

const PaymentTypes = ({
    filteredPaymentMethods,
    selectPaymentMethod,

    setSelectPaymentMethod,
}) => {
    const handleOptionChange = (event) => {
        setSelectPaymentMethod(event.target.value);
    };
    return (
        <div className="payment-types">
            <label>Payment Methods*</label>
            <br />
            {filteredPaymentMethods &&
                filteredPaymentMethods.map((item) => (
                    <div className="payment-type" key={item.id}>
                        <input
                            className={`radio-btn ${
                                selectPaymentMethod &&
                                selectPaymentMethod === item.value
                                    ? "red-label"
                                    : ""
                            }`}
                            name="paymentMethods"
                            id={`payment_type${item.id}`}
                            type="radio"
                            value={item.value}
                            checked={
                                selectPaymentMethod &&
                                selectPaymentMethod === item.value
                            }
                            onChange={handleOptionChange}
                            required
                        />
                        <label
                            htmlFor={`payment_type${item.id}`}
                            className={
                                selectPaymentMethod === item.value
                                    ? "red-label"
                                    : ""
                            }
                        >
                            {item.name}
                        </label>
                    </div>
                ))}
        </div>
    );
};

export default PaymentTypes;
