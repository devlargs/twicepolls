const generateSlug = (str: string, id?: string) => {
  return `${str.split(" ").join("-").toLowerCase()}${id && `-${id}`}`;
};

export default generateSlug;
