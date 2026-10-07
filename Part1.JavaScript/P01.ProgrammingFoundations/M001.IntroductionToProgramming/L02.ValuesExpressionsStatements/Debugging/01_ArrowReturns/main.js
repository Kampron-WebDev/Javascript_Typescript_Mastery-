/** double(4) → 8 */
export const double = (x) => {
  return x * 2;
};

/** makeUser('Ama') → { name: 'Ama', role: 'student' } */
export const makeUser = (name) => ({
  name,
  role: "student",
});
