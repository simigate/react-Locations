import '../App.css';
import { useState, useRef } from 'react';

const ChangeData = ({ index, parent, details, changeDetails, hideChangeData }) => {
    //states to set all element value changes
    const [formDetails, setFormDetails] = useState({
        "image": details.image,
        "location": details.location,
        "star": details.star,
        "count": details.count,
        "email": details.email,
        "phone": details.phone,
        "price": details.price,
        "openSlot": details.openSlot
    });
    const inputImageFile = useRef(null);
    //function to handle set status of element value change
    const handleChange = (e) => {
        let { name, value, type } = e.target
        setFormDetails(prevStat => {
            return {
                ...prevStat,
                [name]: type === "radio" || name === "star" ? parseInt(value) : value
            }
        })

    }
    //function to handle change of image
    const handleChangeImage = e => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            let value = URL.createObjectURL(files[0]);
            setFormDetails(prevStat => {
                return {
                    ...prevStat,
                    image: value
                }
            })

        }
    }
    //function to open windows explorer
    const handleSelect = (e) => {
        e.preventDefault()
        inputImageFile.current.click();

    }
    //function to return index of changed location in dataArray and changed status
    const handleSubmit = (e) => {
        e.preventDefault()
        hideChangeData()
        changeDetails({ "index": index, "parent": parent, "newDetails": formDetails })
    }
    //function to return hideChangeData
    const handleCancel = (e) => {
        e.preventDefault()
        hideChangeData()
    }
    return (
        <form className='Change-data' onSubmit={handleSubmit} >
            <nav className="Change-navbar">
                <h3 >{parent === "add" ? "Add a new Location" : `Edit Details of ${details.location}`}</h3>
            </nav>

            <label className='Change-label'>
                Photo:
                <img className='Change-img' name="image" src={formDetails.image} />
                <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    ref={inputImageFile}
                    onChange={handleChangeImage}

                />
                <button onClick={handleSelect}>Picture</button></label>
            <span className='Change-label'></span>
            <span className='Change-label'></span>
            <label className='Change-label'>
                Location:
                <input type="text" className='Change-input' name="location" value={formDetails.location} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Stars:
                <input type="number" className='Change-input' name="star" step="1" min="0" max="5" value={formDetails.star} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Count:
                <input type="number" className='Change-input' name="count" min="0" value={formDetails.count} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Email:
                <input type="text" className='Change-input' name="email" value={formDetails.email} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Phone:
                <input type="number" className='Change-input' name="phone" min="0" value={formDetails.phone} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Price:
                <input type="number" className='Change-input' name="price" min="0" value={formDetails.price} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Sold Out:
                <div className='Change-radio'>
                    <input type="radio" id="soldOutYes" name='openSlot' value="0" checked={formDetails.openSlot === 0} onChange={handleChange} />
                    <label htmlFor='soldOutYes' >Yes</label>
                    <input type="radio" id="soldOutNo" name='openSlot' value="1" checked={formDetails.openSlot === 1} onChange={handleChange} />
                    <label htmlFor='soldOutNo' >No</label>
                </div>
            </label>
            <button className='Change-button' >Submit</button>
            <button className='Change-button' onClick={handleCancel}>Cancel</button>
        </form>
    );
}
export default ChangeData;