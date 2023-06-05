export const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function CutANames(db, difficulty) {
  const randomIndexStart = rand(0, db.length);
  const ArrayNamesToPlay = db.slice(
    randomIndexStart,
    randomIndexStart + (difficulty * difficulty) / 2
  );
  return ArrayNamesToPlay;
}
