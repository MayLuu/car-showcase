import '../styles/modalStyles.css';
import ContactForm from './ContactForm';
import Countdown from './CountDown';

export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <>

            <div className={showHideClassName}>

                <section className="modal-main">
                    <button className='close-btn' type="button" onClick={handleClose}>
                        X
                    </button>
                    <Countdown />
                    <ContactForm />

                </section>
            </div>
        </>

    );
};