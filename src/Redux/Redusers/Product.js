import { ADD_PRODUCT, DELET, EDIT, GET } from "../Actiontype";

let initialState = {
  Products: [],
};

export const Product = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        Products: [...state.Products, payload],
      };

    case GET:
      return {
        ...state,
        Products: payload,
      };

    case DELET:
      return {
        ...state,
        Products: state.Products.filter((ele) => ele.id !== payload),
      };

    case EDIT:
      return {
        ...state,
        Products: state.Products.map((ele) => {
          if (ele.id !== payload.id) {
            ele.price = payload.price;
            ele.title = payload.title;
            ele.category = payload.category;
            ele.img = payload.img;

            return ele;
          } else {
            return ele;
          }
        }),
      };
    default:
      return state;
  }
};
