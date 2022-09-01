import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export const customConfirm = ({ title, desc, css, onYesAction }) =>
    confirmAlert({
        overlayClassName: "overlay-custom-class-name",

        customUI: ({ onClose }) => {
            return (
                <div className='confirmation-box'>
                    <h4 className='title'>{title}!</h4>
                    <p>{desc}</p>
                    <button
                        style={{ marginRight: "10px",justifyContent:"center" }}
                        className={`btn btn-${css}`}
                        onClick={() => {
                            onYesAction();
                            onClose()
                        }}
                    >
                        Yes
                    </button>
                    <button className='btn btn-dark' style={{ border: '1px solid #343a40' }} onClick={onClose}>
                        No
                    </button>
                </div>
            )
        },
    })