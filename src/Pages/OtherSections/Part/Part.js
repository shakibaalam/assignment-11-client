import React from 'react';
import './Part.css';

const Part = () => {
    return (
        <div className='container my-5 py-5'>
            <div className="row">
                <div className="col-md-6">
                    <h3 className='text-center my-5 logo-style'>Be a part of our family</h3>
                    <div className='w-50 mx-auto'>
                        <input type="search" name="" id="" className='input-style' placeholder='type your number' />
                        <input type="submit" className='submit' value="Get the App" />
                    </div>
                    <div className='w-50 d-flex app-style mx-auto mt-5'>
                        <a href="https://www.apple.com/app-store/"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/stores/chaldal/components/landingPage2/MobileAppSection/images/lp_getappleapp.png?v=2&q=low&webp=1&alpha=1" alt="" /></a>
                        <a href="https://play.google.com/store/apps"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-25/Default/stores/chaldal/components/landingPage2/MobileAppSection/images/lp_getandroidapp.png?v=2&q=low&webp=1&alpha=1" alt="" /></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='w-75 mx-auto rounded mt-5'>
                        <img className='w-100' src="https://www.dacast.com/static/4c551a2b050d772c2a0ada04ef9c201c/a86fd/live-streaming-apps.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Part;