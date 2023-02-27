import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { activePage } from '../features/userReducer.js';
import icoChat from '../assets/icon/icon-chat.png';
import icoMoney from '../assets/icon/icon-money.png';
import icoSecurity from '../assets/icon/icon-security.png';


const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(activePage("Home"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main id="homePage">
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            <section className="features">
                <h2 className="sr-only">Features</h2>

                <div className="features-item">
                    <img 
                        className="features-item-icon" 
                        src={icoChat}
                        alt="Chat Icon" 
                    />
                    <h3 className="features-item-title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>

                <div className="features-item">
                    <img
                        className="features-item-icon"
                        src={icoMoney}
                        alt="Money Icon"
                    />
                    <h3 className="features-item-title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>

                <div className="features-item">
                    <img
                        className="features-item-icon"
                        src={icoSecurity}
                        alt="Security Icon"
                    />
                    <h3 className="features-item-title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;

