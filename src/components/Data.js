import '../App.css';
import Location from './Location';
import ChangeData from './ChangeData';
// importing the first 9 locations array
import { imageDataArray } from '../images';
import { useState } from "react";
import defaultImage from '../images/image.jpg'
//dynamic component of App
const Data = () => {
    const [dataArray, setDataArray] = useState([imageDataArray[0]]);
    //state that determines to show or hide ChangeData form 
    const [showChangeForm, setShowChangeForm] = useState(false);
    //function to update dataArray state based on changes returned from ChangeData form
    const changeDetails = (details) => {
        setDataArray((prevArray) => {
            if (details.parent === "change") {
                return prevArray.map((detail, index) => {
                    return index === details.index ? {
                        ...detail,
                        "image": details.newDetails.image,
                        "location": details.newDetails.location,
                        "star": details.newDetails.star,
                        "count": details.newDetails.count,
                        "email": details.newDetails.email,
                        "phone": details.newDetails.phone,
                        "price": details.newDetails.price,
                        "openSlot": details.newDetails.openSlot
                    } : detail
                })
            } else {
                return [...prevArray, {
                    "image": details.newDetails.image,
                    "location": details.newDetails.location,
                    "star": details.newDetails.star,
                    "count": details.newDetails.count,
                    "email": details.newDetails.email,
                    "phone": details.newDetails.phone,
                    "price": details.newDetails.price,
                    "openSlot": details.newDetails.openSlot
                }
                ]
            }
        })
    }
    //function to hide ChangeData form 
    const hideChangeData = () => {
        setShowChangeForm((prevState) => prevState ? !prevState : console.log("Not closing"));
    }
    // To display the Location Component based on dataArray state
    const locationItems = dataArray.map((details, index) => {
        return <div>
            <Location key={index} index={index} details={details} changeDetails={changeDetails} />
        </div>

    });

    //function to add new Location with the chosen image and random values for the rest of the fields
    const showChangeData = e => {
        let parent = "add"
        let details = {
            "image": defaultImage,
            "location": `Location`,
            "star": 0,
            "count": 0,
            "email": `location.location.com`,
            "phone": `000000000`,
            "price": 0,
            "openSlot": 1
        }
        return <ChangeData key={dataArray.length} index="0" parent={parent} details={details} changeDetails={changeDetails} hideChangeData={hideChangeData} />;
        /* setDataArray((prevState) => {
               return [...prevState, {
                   "image": `${value}`,
                   "location": `Location${prevState.length + 1}`,
                   "star": Math.floor(Math.random() * 4 + 1),
                   "count": Math.floor(Math.random() * 499 + 1),
                   "email": `location${prevState.length + 1}.location.com`,
                   "phone": `00000000${prevState.length + 1}`,
                   "price": Math.floor(Math.random() * 249 + 1),
                   "openSlot": Math.floor(Math.random() >= 0.5 ? 1 : 0)
               }
               ]
           }); */
    }

    return (
        <div className='Data'>
            {/* invisible input element to get the chosen file */}
            <button className='Data-button' onClick={() => !showChangeForm ? setShowChangeForm(true) : console.log("Cancel form to re-render")}>Add a new Location</button>
            <div className='Data-locations'>
                {/* call to display location array */}
                {locationItems}
            </div>
            {/* show the ChangeData form only if the status is true */}
            {showChangeForm ? showChangeData() : null}
        </div >
    );
}
export default Data;