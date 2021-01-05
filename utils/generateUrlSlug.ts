const generateSlug = (str: string, id?: string) => {
  return `${str.split(" ").join("-")}${id && `-${id}`}`;
};

export default generateSlug;
