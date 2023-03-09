export const activePageSelector = (state) => state.userDatas.activePage;

export const loadingStatusSelector = (state) => state.userDatas.isLoading;

export const authenticationStatusSelector = (state) => state.userDatas.isAuthenticated;

export const errorMessageSelector = (state) => state.userDatas.errorMessage;

export const tokenSelector = (state) => state.userDatas.userToken;

export const allDatasSelector = (state) => state.userDatas;

export const userFirstNameSelector = (state) => state.userDatas.user.firstName;

export const userLastNameSelector = (state) => state.userDatas.user.lastName;

