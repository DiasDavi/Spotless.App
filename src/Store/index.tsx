import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../Types";

/* ########################################## */
/* ################# STATES ################# */
/* ########################################## */

/* USER */
interface UserState {
  users: User[];
  loggedInUser: User | null;
}

const initialUserState: UserState = {
  users: [],
  loggedInUser: null,
};

/* FILTER */
interface FilterState {
  value: string;
}

const initialFilterState: FilterState = {
  value: "*",
};

/* ORDER */
interface OrderItem {
  name: string;
  serviceType: string;
  phone: string;
  description: string;
  address: string;
  price: number;
  date: string;
}

interface OrderState {
  order: OrderItem[];
}

const initialOrderState: OrderState = {
  order: [],
};

/* ########################################## */
/* ########################################## */
/* ########################################## */

/* ########################################## */
/* ################## SLICE ################# */
/* ########################################## */

/* USER */
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    login: (
      state,
      action: PayloadAction<{ name: string; password: string }>
    ) => {
      const { name, password } = action.payload;
      const loggedInUser = state.users.find(
        (user) => user.name === name && user.password === password
      );
      state.loggedInUser = loggedInUser || null;
    },
  },
});
export const { addUser, login } = userSlice.actions;

/* FILTER */
const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;

/* ORDER */

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderItem>) => {
      state.order.push(action.payload);
    },
    removeOrder: (state, action: PayloadAction<string>) => {
      state.order = state.order.filter(
        (item) =>
          item.name !== action.payload &&
          item.address !== action.payload &&
          item.phone !== action.payload
      );
    },
  },
});
export const { addOrder, removeOrder } = orderSlice.actions;
/* ########################################## */
/* ########################################## */
/* ########################################## */

/* ########################################## */
/* ################## STORE ################# */
/* ########################################## */

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    filter: filterSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;

/* ########################################## */
/* ########################################## */
/* ########################################## */
