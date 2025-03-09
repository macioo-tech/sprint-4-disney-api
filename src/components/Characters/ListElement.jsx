const ListElement = ({ item }) => {
  const { name, imageUrl } = item || {};

  console.log('name:', name)
  console.log('imageUrl', imageUrl)

  return (
    <div>
      <p>{name}</p>
      <p>{imageUrl}</p>
      <button>Learn</button>
    </div>
  );
};

export default ListElement;
