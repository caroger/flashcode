const axios = require('axios');
let lcdata;
axios.get('https://leetcode.com/api/problems/all/').then((res) => {
  lcdata = res.data;
});
function findProblem(probNum, input = lcdata) {
  return input['stat_status_pairs']
    .map((stat) => stat['stat'])
    .find((stat) => stat['question_id'] === probNum);
}

module.exports = findProblem;
