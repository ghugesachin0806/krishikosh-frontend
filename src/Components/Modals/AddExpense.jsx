import React, { useContext, useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { UserContext } from '../../Navigation/ProtectedRoutes';
import { toast } from 'react-toastify';

const AddExpense = ({ setaddNewExpenseOpen, cropId = 1 }) => {

    const { user, setuser } = useContext(UserContext);

    const [expense, setexpense] = useState({
        desc: "",
        amount: 0,
        date: new Date().toISOString().split('T')[0],
        expenseType: "other"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(expense);

        const validate = Boolean(user?.selectedYear) &&
            (user?.years?.some(y => y.year === user.selectedYear) ?? false);

        if (validate && expense.desc!=="") {
            const year = user.years.find((y) => y.year === user.selectedYear);
            const crops = year?.crops ?? [];
            const crop = crops.find(crop => crop.id === cropId) ?? null;

            if (crop == null) {
                toast.error("Crop does not exist");
                setaddNewExpenseOpen(false);
                return;
            }

            const updatedExpense = {
                ...expense,
                id: crop.counter ? crop.counter + 1 : 1
            }

            const newCrop = {
                ...crop,
                counter: crop.counter ? crop.counter + 1 : 1,
                totalExpense: crop.totalExpense ? crop.totalExpense + updatedExpense.amount : updatedExpense.amount,
                expenseList: crop.expenseList ? [...crop.expenseList, updatedExpense] : [updatedExpense]
            }

            const newCrops = crops.map(c => c.id === cropId ? newCrop : c);

            const newYear = {
                ...year,
                crops: newCrops
            }

            setuser({
                ...user,
                years: user.years.map(y => y.year === user.selectedYear ? newYear : y)
            });

            toast.success("Expense added successfully");
            setaddNewExpenseOpen(false);
            return;
        }

        toast.error("Invalid Expense Addition");
    }

    const handleChange = (e) => {
        setexpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className="modal-header">
                    <h2>Add New Expense</h2>
                    <CustomButton buttonType='closeBtn' handler={() => setaddNewExpenseOpen(false)} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='form-label' htmlFor='desc'>Description</label>
                        <input className='form-input' type="text" id='desc' name='desc' value={expense.desc} onChange={handleChange} placeholder='e.g. Tractor, weed-cutting ' />
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor='amount'>Amount(₹)</label>
                        <input className='form-input' type="number" id='amount' name='amount' value={expense.amount} onChange={handleChange} placeholder='e.g. 5.5' />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Expense Type</label>
                        <select className='form-input' id='expenseType' name='expenseType' value={expense.expenseType} onChange={handleChange} >
                            <option name='expenseType' value="landPreparation">Land Preparation</option>
                            <option name='expenseType' value="seedSowing">Seed and Sowing</option>
                            <option name='expenseType' value="nutrientWater">Nutrient and Water</option>
                            <option name='expenseType' value="pestWeed">Pest and Weed</option>
                            <option name='expenseType' value="harvestingPro">Harvesting</option>
                            <option name='expenseType' value="labor">Labor</option>
                            <option name='expenseType' value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='form-label' htmlFor='date' >Date</label>
                        <input className='form-input' type="date" id='date' name='date' value={expense.date} onChange={handleChange} />
                    </div>
                    <div className="form-actions">
                        <CustomButton title='Cancel' handler={() => setaddNewExpenseOpen(false)} />
                        <CustomButton type='submit' title='Add Expense' btnColor='dark-green' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense