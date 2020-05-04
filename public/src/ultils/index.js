const convertUrlPath = (url) => url.split('-').join('_');

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

const getPageIndexes = (totalItem, activePage) => {
  const maxPage = Math.ceil(totalItem / 12);
  const pages = [];
  if (activePage >= 4) {
    pages.push(1);
    if (activePage > 4) {
      pages.push('...');
    }
  }
  for (let i = activePage - 2; i <= activePage + 3; i++) {
    if (i >= 1 && i <= maxPage) {
      pages.push(i);
    }
  }
  if (activePage <= maxPage - 4) {
    if (activePage < maxPage - 4) {
      pages.push('...');
    }
    pages.push(maxPage);
  }
  return pages;
};

export { convertUrlPath, groupBy, getPageIndexes };
