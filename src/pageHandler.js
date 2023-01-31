const PAGES = {
  LIST: 'pageList',
  CREATE: 'pageCreate',
  EDIT: 'pageEdit',
};

const PAGE_CONTAINERS = {
  [PAGES.LIST]: document.getElementById('page-list'),
  [PAGES.CREATE]: document.getElementById('page-create'),
  [PAGES.EDIT]: document.getElementById('page-edit'),
};

export const showPage = page => {
  const { [page]: selectedPage, ...otherPages } = PAGE_CONTAINERS;

  selectedPage.classList.remove('hidden');
  Object.values(otherPages).forEach(page => page.classList.add('hidden'));
};



// showPage('pageCreate')
// pageCreate: 'visible',
// pageList: 'hidden',
// pageEdit: 'hidden'

// showPage('pageList');
// pageCreate: 'hidden',
// pageList: 'visible',
// pageEdit: 'hidden'

// showPage('pageEdit');
// pageCreate: 'hidden',
// pageList: 'hidden',
// pageEdit: 'visible'
