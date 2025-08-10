import React, { useContext, useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { isValidYearFormat, yearSort } from '../../Utils/UtilFunctions';
import { toast } from 'react-toastify';
import { UserContext } from '../../Navigation/ProtectedRoutes';

const AddNewFinancialYearModal = ({ setaddNewYearOpen }) => {

  const { user, setuser } = useContext(UserContext);
  const [newYear, setnewYear] = useState({
    year: "",
    counter: 0
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidYearFormat(newYear.year)) {

      const years = user?.years ?? [];
      const existYear = years.find(y => y.year === newYear) ?? null;

      if (existYear !== null) {
        toast.error("Year Already exist");
        return;
      }

      const updatedYears = [...years, newYear];
      yearSort(updatedYears);
      setuser({
        ...user,
        years: updatedYears
      });

      toast.success("Year added suceessfully !");
      setaddNewYearOpen(false);

      return;
    }

    toast.error("Invalid Year Format");
  }

  const handleChange = (e) => {
    setnewYear({
      ...newYear,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className='modal-overlay'>
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Financial Year</h2>
          <CustomButton buttonType='closeBtn' handler={() => setaddNewYearOpen(false)} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='form-label' htmlFor='newYear'>Enter New Financial Year</label>
            <input className='form-input' type="text" id='newYear' name='year' value={newYear.year} onChange={handleChange} placeholder='Strict format e.g. 2023-24(YYYY-YY)' />
          </div>
          <div className="form-actions">
            <CustomButton type='button' title='Cancel' handler={() => setaddNewYearOpen(false)} />
            <CustomButton type='submit' title='Add Year' btnColor='dark-green' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewFinancialYearModal