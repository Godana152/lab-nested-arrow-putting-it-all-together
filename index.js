
function createLoginTracker(userInfo) {
    let attemptCount = 0;

    const login = (passwordAttempt) => {

        // Check whether the account is already locked
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Check whether the password is correct
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Count an incorrect password attempt
        attemptCount++;

        return `Attempt ${attemptCount}: Login failed`;
    };

    return login;
}

module.exports = {
    createLoginTracker
};
