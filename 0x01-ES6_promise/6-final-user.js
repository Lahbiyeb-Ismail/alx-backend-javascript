import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Use Promise.allSettled to handle both promises together
    const results = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    // Map the results to the desired structure
    return results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: 'fulfilled', value: result.value };
      }
      return { status: 'rejected', reason: result.reason };
    });
  } catch (error) {
    // In case of any unexpected error
    console.error('An error occurred:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
