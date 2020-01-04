// // import axios from 'axios';

// // export async function getReddits(searchTerm, searchLimit) {
// //   const data = await axios.get(`https://www.reddit.com/search.json?q=${searchTerm}&limit=${searchLimit}`);
// //   const dataList = data.data.data.children;
// //   const reddits = dataList.map(item => item.data); //transform into array of objects
// //   return reddits;
// // }

// import { fetchReddditsPending, fetchReddditsSuccess, fetchReddditsError } from 'actions';

// function fetchRedditsList(searchTerm, searchLimit) {
//   return dispatch => {
//     dispatch(fetchReddditsPending());
//     fetch(`https://www.reddit.com/search.json?q=${searchTerm}&limit=${searchLimit}`)
//       .then(res => res.json())
//       .then(res => {
//         if (res.error) {
//           throw (res.error);
//         }
//         dispatch(fetchReddditsSuccess(res.data);
//         return res.data;
//       })
//       .catch(error => {
//         dispatch(fetchReddditsError(error));
//       })
//   }
// }

// export default fetchRedddits;