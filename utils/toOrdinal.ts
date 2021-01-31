const ordinalRules = new Intl.PluralRules("en", { type: "ordinal" });
const suffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

const toOrdinal = (num: number) => {
  const suffix = suffixes[ordinalRules.select(num)];
  return num + suffix;
};

export default toOrdinal;
