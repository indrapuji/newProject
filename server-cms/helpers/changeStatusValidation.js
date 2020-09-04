const {
  user_admin,
  claim_kematian,
  claim_kesehatan,
  claim_nilai_hidup,
  claim_pendidikan,
  claim_perumahan
} = require('../models');

module.exports = async({ claim_status, user_status, status }) => {
  try {
    if (claim_status != user_status) return false;
    if (claim_status + 1 == status || claim_status - 1 == status) return true;
    return false;
  } catch (err) {
    return false;
  }
}