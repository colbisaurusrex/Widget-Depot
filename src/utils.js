// NOTE: For searches, I have isolated the functionality. If performance issues were evident or became a concern, I'd optimize these algorithms.
export const searchItemsByName = (items, searchText) => {
  if (!searchText) return items;
  return items.filter((i) =>
    i.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const searchItemsById = (items, id) => items.find((i) => i.id === id);

export const getDimensionText = ({ width, height, depth }) => {
  return `${height}" x ${width}" x ${depth}"`;
};
