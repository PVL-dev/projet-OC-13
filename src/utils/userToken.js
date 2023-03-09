const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    );

    return JSON.parse(jsonPayload);
};

export const isTokenExpired = (token) => {
    const tokenExpiration = parseJwt(token).exp * 1000;
    const date = new Date().getTime();

    if (tokenExpiration < date) {
        return null;
    } else {
        return token;
    }
};

