export const setMember = (user) => {
  return { type: "SET_MEMBER", payload: user };
};

export const removeMember = (id) => {
  console.log(id, "id");
  return { type: "REMOVE_MEMBER", payload: id };
};
