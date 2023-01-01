
import '../App.css';
import logo from '../images/logo.jpg';
import { imageDataArray } from '../images';

//Component creates the static part of the App
const Display = () => {
    return (
        <div >
            {/* navbar with logo header and title */}
            <nav className="App-navbar">
                <img src={logo} className="App-navbar-logo" alt="logo" />
                <h3 className='App-navbar-title'>Locations</h3>
                <h1 className='App-navbar-header'>Online Reviews</h1>
            </nav>
            <div className="App-display">
                {/* Static image displayed using grid */}
                <div className='App-gallary-grid'>
                    <figure className='App-gallery-img1'>
                        <img src={imageDataArray[0].image} className="App-gallery-img" alt="Image 1" />
                    </figure>
                    <figure className='App-gallery-img2'>
                        <img src={imageDataArray[1].image} className="App-gallery-img" alt="Image 2" />
                    </figure>

                    <figure className='App-gallery-img3'>
                        <img src={imageDataArray[2].image} className="App-gallery-img" alt="Image 3" />
                    </figure>

                    <figure className='App-gallery-img4'>
                        <img src={imageDataArray[3].image} className="App-gallery-img" alt="Image 4" />
                    </figure>

                    <figure className='App-gallery-img5'>
                        <img src={imageDataArray[4].image} className="App-gallery-img" alt="Image 5" />
                    </figure>

                    <figure className='App-gallery-img6'>
                        <img src={imageDataArray[5].image} className="App-gallery-img" alt="Image 6" />
                    </figure>

                    <figure className='App-gallery-img7'>
                        <img src={imageDataArray[6].image} className="App-gallery-img" alt="Image 7" />
                    </figure>

                    <figure className='App-gallery-img8'>
                        <img src={imageDataArray[7].image} className="App-gallery-img" alt="Image 8" />
                    </figure>

                    <figure className='App-gallery-img9'>
                        <img src={imageDataArray[8].image} className="App-gallery-img" alt="Image 9" />
                    </figure>
                </div>

                <p className='App-para'>Visit the world's best locations for a memorable experience</p>
            </div>
        </div >
    );
}
export default Display;