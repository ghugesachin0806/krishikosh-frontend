import React, { useContext, useState } from "react";
import { X } from "lucide-react";
import CustomButton from "../CustomButton/CustomButton";
import { toast } from "react-toastify";
import { validateCrop } from "../../Utils/UtilFunctions";
import { UserContext } from "../../Navigation/ProtectedRoutes";

const AddNewCropModal = ({ setaddNewCropOpen }) => {
  const { user, setuser } = useContext(UserContext);
  const [newCrop, setnewCrop] = useState({
    cropName: "",
    cropArea: "",
    cropExpense: 0,
    cropRevenue: 0,
    counter:0
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validate =
      Boolean(user?.selectedYear) && (
      user?.years?.some((y) => y.year === user.selectedYear) ?? false) ;

    if (validate && validateCrop(newCrop.cropName, newCrop.cropArea)) {
      const year = user.years.find((y) => y.year === user.selectedYear);

      const updatedCrop = {
        ...newCrop,
        id: year.counter ? year.counter + 1 : 1
      }

      const newYear = {
        ...year,
        activeCrops: year.activeCrops ? year.activeCrops + 1 : 1,
        counter: year.counter ? year.counter + 1 : 1,
        crops: year.crops ? [...year.crops, updatedCrop] : [updatedCrop],
      };

      setuser({
        ...user,
        years: user.years.map((y) =>
          y.year === user.selectedYear ? newYear : y
        ),
      });

      toast.success("Crop added successfully");
      setaddNewCropOpen(false);
      return;
    }

    toast.error("Invalid Crop Addition");
  };

  const handleChange = (e) => {
    setnewCrop({
      ...newCrop,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Crop</h2>
          <CustomButton
            buttonType="closeBtn"
            handler={() => setaddNewCropOpen(false)}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="cropName">
              Crop Name
            </label>
            <input
              className="form-input"
              type="text"
              id="cropName"
              name="cropName"
              value={newCrop.cropName}
              onChange={handleChange}
              placeholder="e.g. Cotton, Rice, Wheat"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="cropArea">
              Area(in acres)
            </label>
            <input
              className="form-input"
              type="text"
              id="cropArea"
              name="cropArea"
              value={newCrop.cropArea}
              onChange={handleChange}
              placeholder="e.g. 5.5"
            />
          </div>
          <div className="form-actions">
            <CustomButton
              title="Cancel"
              handler={() => setaddNewCropOpen(false)}
            />
            <CustomButton
              type="submit"
              handler={handleSubmit}
              title="Add Crop"
              btnColor="dark-green"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCropModal;
