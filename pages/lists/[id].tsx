import { useRouter } from "next/router";

const ListById = () => {
  const router = useRouter();
  console.log(router.query);

  return <h1>{router.query.id}</h1>;
};

export default ListById;
