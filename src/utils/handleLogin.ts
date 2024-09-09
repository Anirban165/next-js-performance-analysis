function isLoggedIn(): boolean {
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    if (userName && userId) {
        return true;
    }

    return false;
}

export default isLoggedIn;