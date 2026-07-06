import React from 'react'

function Awards() {
    return (
        <div className='container mb-5'>
            <div className='row'> {/* <-- Grid ke liye row add kiya */}
                <div className='col-6'>
                    <img src='/images/drive/largestBroker.svg' alt="Largest Broker" />  
                </div>
                
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <ul>
                        <li><p>Lorem ipsum dolor sit amet.</p></li>
                        <li><p>Consectetur adipiscing elit do eiusmod tempor.</p></li>
                        <li><p>Sed do eiusmod tempor incididunt ut.</p></li>
                        <li><p>Ut enim ad minim veniam quis.</p></li>
                        <li><p>Duis aute irure dolor in reprehenderit.</p></li>
                    </ul>
                </div>
            </div>
        </div>  
    );
}

export default Awards;