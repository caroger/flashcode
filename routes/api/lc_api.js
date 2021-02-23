const axios = require('axios');
let lcdata;
axios.get('https://leetcode.com/api/problems/all/').then((res) => {
  lcdata = res.data;
});
function findProblem(probNum, input = lcdata) {
  problem = input['stat_status_pairs'].filter((pair) => pair.stat.question_id === probNum)[0];

  return problem;
}

module.exports = findProblem;
