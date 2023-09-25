import React from "react";

const shippingTypes = ({
    pickupFormOptions,
    pickupOrDelivery,
    setPickupOrDelivery,
}) => {
    const handleOptionChange = (event) => {
        setPickupOrDelivery(event.target.value);
    };
    return (
        <div className="shipping-types">
            <label>Shipping Types*</label>
            <br />
            {pickupFormOptions.map((item) => (
                <div className="shipping-type" key={item.id}>
                    <input
                        className={`radio-btn ${
                            pickupOrDelivery && pickupOrDelivery === item.value
                                ? "red-label"
                                : ""
                        }`}
                        name="pickupOrDelivery"
                        id={`shipping_type${item.id}`}
                        type="radio"
                        value={item.value}
                        checked={
                            pickupOrDelivery && pickupOrDelivery === item.value
                        }
                        onChange={handleOptionChange}
                        required
                    />
                    <label
                        htmlFor={`shipping_type${item.id}`}
                        className={
                            pickupOrDelivery === item.value ? "red-label" : ""
                        }
                    >
                        {item.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default shippingTypes;
