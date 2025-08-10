import React, { useContext, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Modal.css";
import { UserContext } from "../../Navigation/ProtectedRoutes";
import { totalRevenue } from "../../Utils/DummyData";
import { toast } from "react-toastify";

const AddRevenue = ({ setaddNewRevenueOpen, cropId = 2 }) => {
  const { user, setuser } = useContext(UserContext);

  const [revenue, setrevenue] = useState({
    quantity: 0,
    rateperQtl: 0,
    buyerName: "",
    totalAmount: 0,
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(revenue);

    const validate =
      Boolean(user?.selectedYear) &&
      (user?.years?.some((y) => y.year === user.selectedYear) ?? false);

    if (validate) {
      const year = user.years.find((y) => y.year === user.selectedYear);
      const crops = year?.crops ?? [];
      const crop = crops.find((crop) => crop.id === cropId) ?? null;

      if (crop == null) {
        toast.error("Crop does not exist");
        setaddNewRevenueOpen(false);
        return;
      }

      const updatedRevenue = {
        ...revenue,
        id: (crop.counter ?? 0) + 1
      };

      const newCrop = {
        ...crop,
        counter: (crop.counter ?? 0) + 1,
        totalRevenue: crop.totalRevenue
          ? crop.totalRevenue + updatedRevenue.totalAmount
          : updatedRevenue.totalAmount,
        revenueList: crop.revenueList
          ? [...crop.revenueList, updatedRevenue]
          : [updatedRevenue],
      };

      const newCrops = crops.map((c) => (c.id === cropId ? newCrop : c));

      const newYear = {
        ...year,
        crops: newCrops,
      };

      setuser({
        ...user,
        years: user.years.map((y) =>
          y.year === user.selectedYear ? newYear : y
        ),
      });

      toast.success("Revenue added successfully");
      setaddNewRevenueOpen(false);
      return;
    }
    toast.error("Invalid Revenue Addition");
  };

  const handleChange = (e) => {
    setrevenue((prev) => {
      const updated = {
        ...prev,
        [e.target.name]: e.target.value,
      };

      return {
        ...updated,
        totalAmount: updated.quantity * updated.rateperQtl,
      };
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Revenue</h2>
          <CustomButton
            buttonType="closeBtn"
            handler={() => setaddNewRevenueOpen(false)}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="quantity">
              Quantity (qtl)
            </label>
            <input
              className="form-input"
              type="number"
              step="0.01"
              min="0"
              id="quantity"
              name="quantity"
              value={revenue.quantity}
              onChange={handleChange}
              placeholder="e.g. 5 , 5.8"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="rateperQtl">
              Rate per qtl (₹)
            </label>
            <input
              className="form-input"
              type="number"
              min="0"
              id="rateperQtl"
              name="rateperQtl"
              value={revenue.rateperQtl}
              onChange={handleChange}
              placeholder="e.g. 5500"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="buyerName">
              Buyer Name
            </label>
            <input
              className="form-input"
              type="text"
              id="buyerName"
              name="buyerName"
              value={revenue.buyerName}
              onChange={handleChange}
              placeholder="e.g. local"
            />
          </div>
          <div className="total-preview">
            <label className="form-label">Total Amount</label>
            <div className="total-amount">₹ {revenue.totalAmount}</div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="date">
              Date
            </label>
            <input
              className="form-input"
              type="date"
              name="date"
              id="date"
              value={revenue.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <CustomButton
              title="Cancel"
              handler={() => setaddNewRevenueOpen(false)}
            />
            <CustomButton
              type="submit"
              title="Add Revenue"
              btnColor="dark-green"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRevenue;
