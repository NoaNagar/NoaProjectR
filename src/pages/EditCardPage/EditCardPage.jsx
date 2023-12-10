import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { toast } from "react-toastify";
import { validateCreateCard } from "../../validation/createCardValidation";
import { normalizeDataCard } from "../CreateCardPage/normalizeCard";

const handleUpdateChangesClick = async (
  inputsValue,
  setErrorsState,
  navigate,
  _id
) => {
  try {
    const joiResponse = validateCreateCard(inputsValue);
    setErrorsState(joiResponse);
    if (joiResponse) return;

    let request = normalizeDataCard(inputsValue);
    const { data } = await axios.put("/cards/" + _id, request);
    toast.success("The card was updated successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate(ROUTES.MYCARDS);
  } catch (err) {
    toast.error("Request failed... try again", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export { handleUpdateChangesClick };
