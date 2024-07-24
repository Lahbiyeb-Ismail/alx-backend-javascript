import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((responses) => {
    const result = [];

    for (const res of responses) {
      if (res.status === 'fulfilled') result.push({ status: res.status, value: res.value });
      else result.push(({ status: res.status, value: `${res.reason}` }));
    }

    return result;
  });
}
