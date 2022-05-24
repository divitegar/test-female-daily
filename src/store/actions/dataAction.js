import { GET_DATA, DATA_ERROR } from "../types";
import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp`
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
      payload: error,
    });
  }
};
