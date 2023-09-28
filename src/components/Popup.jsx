import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../redux/actions";

const Popup = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleClosePopUp() {
    dispatch(closePopup());
  }

  return state.isPopupOpen ? (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={handleClosePopUp}>
          X
        </button>
        <div className="popup-content">{state.popUpContent}</div>
      </div>
    </div>
  ) : null;
};

export default Popup;
