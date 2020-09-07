module.exports = ({ claim_status, user_status, status }) => {
    if (claim_status != user_status) return false;
    if (claim_status + 1 == status || claim_status - 1 == status) return true;
    return false;
}