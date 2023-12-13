import { toast } from "react-toastify";
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import { validateCreateCard } from "../../validation/createCardValidation";

const UpdateChangesClick = async (
  inputsValue,
  setErrorsState,
  navigate,
  _id
) => {
  try {
    const joiResponse = validateCreateCard(inputsValue);
    setErrorsState(joiResponse);
    if (joiResponse) {
      const { data } = await axios.put("/cards/" + _id, {
        title: inputsValue.title,
        subtitle: inputsValue.subtitle,
        description: inputsValue.description,
        phone: inputsValue.phone,
        email: inputsValue.email,
        web: inputsValue.web,
        image: {
          url: inputsValue.url,
          alt: inputsValue.alt,
        },
        address: {
          state: inputsValue.state,
          country: inputsValue.country,
          city: inputsValue.city,
          street: inputsValue.street,
          houseNumber: inputsValue.houseNumber,
          zip: +inputsValue.zip,
        },
      });
      toast.success("Your card has been edit succssefully", {
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
    }
  } catch (err) {
    toast.error("request failed...Please try again later", {
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
export { UpdateChangesClick };
