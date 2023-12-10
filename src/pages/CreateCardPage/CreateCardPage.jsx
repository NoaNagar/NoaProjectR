import { toast } from "react-toastify";
import { validateCreateCard } from "../../validation/createCardValidation";
import { normalizeDataCard } from "./normalizeCard";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";

const creationCard = async (inputsValue, setErrorsState, navigate) => {
  try {
    const joiResponse = validateCreateCard(inputsValue);
    setErrorsState(joiResponse);
    if (joiResponse) return;
    const request = normalizeDataCard(inputsValue);
    const { data } = await axios.post("/cards", request);

    toast.success("The card was created successfully", {
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
      theme: "dark",
    });
  }
};
export { creationCard };
