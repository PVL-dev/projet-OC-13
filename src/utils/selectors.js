export const allDatasSelector = (state) => state.userDatas;

//export const loadingStatusSelector = (state) => state.userDatas.isLoading;

export const activePageSelector = (state) => state.userDatas.activePage;

export const authenticationStatusSelector = (state) => state.userDatas.isAuthenticated;

export const userFirstNameSelector = (state) => state.userDatas.user.firstName;

export const userLastNameSelector = (state) => state.userDatas.user.lastName;

export const tokenSelector = (state) => state.userDatas.token;

export const errorStatusSelector = (state) => state.userDatas.errorMessage.length;

export const errorMessageSelector = (state) => state.userDatas.errorMessage;

