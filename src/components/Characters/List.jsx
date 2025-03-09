import useFetch from "../../hooks/useFetch";
import ListElement from "./ListElement";

const BASE_URL = "https://api.disneyapi.dev";

const List = () => {
  const { data, error, loading } = useFetch(`${BASE_URL}/character`);

  if (loading) {
    return <p>...content is loading</p>;
  }

  if (error) {
    return <p>...błąd fetch data: {error.message}</p>;
  }

  const { data: characters, info } = data;

  console.log("characters:", characters);
  console.log("info:", info);

  return (
    <>
      <p>Lista:</p>
      {characters?.map((item) => {
        <ListElement key={item._id} item={item} />;
      })}
    </>
  );
};

export default List;
