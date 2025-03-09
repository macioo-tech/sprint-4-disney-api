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

  if (characters.length <= 0) {
    return <p>...characters not ready</p>;
  }

  console.log("characters:", characters);
  console.log("info:", info);

  return (
    <div>
      {characters.map((item) => (
        <ListElement key={item._id} item={item} />
      ))}
    </div>
  );
};

export default List;
