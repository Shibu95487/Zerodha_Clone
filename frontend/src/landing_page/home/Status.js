import React from 'react'

function Status() {
    return ( 
        <div className='container my-5 p-5'>
            <div className='row align-items-center'>
                {/* Left Side: Text Content */}
                <div className='col-6'>
                    <h2 className='fs-1 mb-5'>Trust with confidence</h2>
                    
                    <h4 className='fs-5 mt-4'>Customer-first always</h4>
                    <p className='text-muted fs-6'>
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
                    </p>

                    <h4 className='fs-5 mt-4'>No spam or gimmicks</h4>
                    <p className='text-muted fs-6'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>

                    <h4 className='fs-5 mt-4'>The Zerodha universe</h4>
                    <p className='text-muted fs-6'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h4 className='fs-5 mt-4'>Do better with money</h4>
                    <p className='text-muted fs-6'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                
                
                <div className='col-6 text-center'>
    {/* Direct public folder ka path use kiya */}
    <img src="/images/drive/ecosystem.png" alt="Ecosystem" className="img-fluid" />
    
    {/* Bottom Links */}
    <div className='d-flex justify-content-center gap-5 mt-4'>
        <a href='#products' className='text-decoration-none'>
            Explore our products <i className="fa-solid fa-long-arrow-right"></i>
        </a>
        <a href='#kite' className='text-decoration-none'>
            Try Kite <i className="fa-solid fa-long-arrow-right"></i>
        </a>
    </div>
</div>
            </div>
        </div>
        );
}

export default Status;