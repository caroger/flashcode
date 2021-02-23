import axios from 'axios';

axios.get('https://leetcode.com/api/problems/all/').then(
  (response) => {
    console.log(response.data);
  },
  (error) => {
    console.log(error);
  }
);
