export const selectUser = (user) => {
  console.log('User clicked', user.first);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};
