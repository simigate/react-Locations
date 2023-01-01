import '../App.css';
import starFullIcon from '../images/star.jpg';
import starEmptyIcon from '../images/starEmpty.jpg';
import emailIcon from '../images/email.jpg';
import phoneIcon from '../images/phone.jpg';
import { useState } from 'react';
import ChangeData from './ChangeData';
const Location = ({ index, parent, details, changeDetails }) => {
    const [showChangeForm, setShowChangeForm] = useState(false);
    //assign variables values based on arguments 
    let soldOut;
    if (details.openSlot === 0) {
        soldOut = "SOLD OUT";
    };
    let starIcon = [0, 0, 0, 0, 0];
    switch (details.star) {
        case 1:
            starIcon = [1, 0, 0, 0, 0];
            break;
        case 2:
            starIcon = [1, 1, 0, 0, 0];
            break;
        case 3:
            starIcon = [1, 1, 1, 0, 0];
            break;
        case 4:
            starIcon = [1, 1, 1, 1, 0];
            break;
        case 5:
            starIcon = [1, 1, 1, 1, 1];
            break;
        default:
            break;

    }
    //function to show ChangeData form 
    const showChangeData = () => {
        parent = "change"
        return <ChangeData key={index} index={index} parent={parent} details={details} changeDetails={changeDetails} hideChangeData={hideChangeData} />;
    }

    //function to hide ChangeData form 
    const hideChangeData = () => {
        setShowChangeForm((prevState) => prevState ? !prevState : console.log("Not closing"));
    }
    return (
        <div className='Data-location'>
            {soldOut && <div className="Location-status">{soldOut}</div>}
            <img className='Location-img' src={details.image} alt='' />
            <div className='Location-details' >
                <img src={starIcon[0] === 1 ? starFullIcon : starEmptyIcon} alt='star'></img>
                <img src={starIcon[1] === 1 ? starFullIcon : starEmptyIcon} alt='star'></img>
                <img src={starIcon[2] === 1 ? starFullIcon : starEmptyIcon} alt='star'></img>
                <img src={starIcon[3] === 1 ? starFullIcon : starEmptyIcon} alt='star'></img>
                <img src={starIcon[4] === 1 ? starFullIcon : starEmptyIcon} alt='star'></img>
                <p>{details.star} ({details.count})</p>
            </div>
            <h2 className='Location-h2'>{details.location}</h2>
            <div className='Location-details' >
                <img src={emailIcon} alt='email'></img>
                <p>{details.email}</p>
            </div>
            <div className='Location-details' >
                <img src={phoneIcon} alt='phone'></img>
                <p>{details.phone}</p>
            </div>
            <div className='Location-details' >
                <p>From <span style={{ fontWeight: 'bold' }}>${details.price} </span>
                    /person</p>
            </div>
            <div className='Location-details' >
                {/* change the status to show ChangeData form on click of button */}
                <button className='Location-button' onClick={() => !showChangeForm ? setShowChangeForm(true) : console.log("Cancel form to re-render")}> Change Details</button>
            </div>
            {/* show the ChangeData form only if the status is true */}
            {showChangeForm ? showChangeData() : null}
        </div>
    );
}
export default Location;