// analytics.js

export const incrementVisitorCount = () => {
    const currentCount = getCookie('visitorCount');
    const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;

    setCookie('visitorCount', newCount.toString(), 365);

    return newCount;
};

export const getVisitorCount = () => {
    const currentCount = getCookie('visitorCount');
    return currentCount ? parseInt(currentCount, 10) : 0;
};

const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
};
