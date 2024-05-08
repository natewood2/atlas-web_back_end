import { uploadPhoto, createUser } from './utils';

function handleProfilesSignup() {
  const handleSuccess = ([photo, user]) => {
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  };

  const handleFailure = () => {
    console.log('Signup system offline');
  };

  return Promise.all([uploadPhoto(), createUser()])
    .then(handleSuccess)
    .catch(handleFailure);
}

export default handleProfilesSignup;
