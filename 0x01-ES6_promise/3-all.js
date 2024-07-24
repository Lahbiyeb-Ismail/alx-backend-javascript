import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const response = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    const { body } = response[0];
    const { firstName, lastName } = response[1];

    console.log(body, firstName, lastName);
  } catch (_) {
    console.log('Signup system offline');
  }
}
