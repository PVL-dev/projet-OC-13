import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activePage, updateUserDatas } from '../features/reducer/userSlice.js';
import { updateUserDatasServer } from '../services/UserService.js';
import { 
    tokenSelector,
	userFirstNameSelector,
    userLastNameSelector
} from '../utils/selectors.js';

const Profile = () => {
    const dispatch = useDispatch();

    const token = useSelector(tokenSelector);
    const userFirstName = useSelector(userFirstNameSelector);
    const userLastName = useSelector(userLastNameSelector);

    const [sectionHeaderOpen, setSectionHeaderOpen] = useState(false);

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const launchUpdate = async () => {
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;

        const response = await updateUserDatasServer(token, firstName, lastName);
        console.log(response.message)
        dispatch(updateUserDatas({body: {firstName, lastName}}));
        setSectionHeaderOpen(false);
    };

    const SectionHeader = () => {
        if (sectionHeaderOpen === false) {
            return (
                <div className="sectionHeader">
                    <h1>Welcome back<br />{userFirstName} {userLastName} !</h1>
                    <button className="edit-button" onClick={toggleSectionHeader}>Edit Name</button>
                </div>
            );
        } else {
            return (
                <div className="sectionHeader">
                    <h1>Welcome back</h1>
                    <form id="updateForm" onSubmit={launchUpdate}>
                        <div className="input-wrapper">
                            <input id="FirstName" type="text" ref={firstNameInput} placeholder={userFirstName} required={true}/>
                        </div>

                        <div className="input-wrapper">
                            <input id="LastName" type="text" ref={lastNameInput} placeholder={userLastName} required={true}/>
                        </div>
                    </form>

                    <div className="buttons-container">
                        <button className="save-button" type="submit" form="updateForm">Save</button>
                        <button className="cancel-button" onClick={toggleSectionHeader}>Cancel</button>
                    </div>
                </div>
            );
        };
    };

    const toggleSectionHeader = () => {
        if (sectionHeaderOpen === false) {
            setSectionHeaderOpen(true);
        } else {
            setSectionHeaderOpen(false);
        };
    };

    useEffect(() => {
        dispatch(activePage("Profile"));
    }, [dispatch]);

    return (
        <div id="userPage">
            <main className="main bg-dark">
                <SectionHeader />
                <h2 className="sr-only">Accounts</h2>

                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>

                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Profile;

