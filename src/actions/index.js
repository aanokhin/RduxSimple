export function selectBook(book) {
  //console.log('A book has been selected: ', book.title);
  //selectBook is an ction Creator,. it needs to returnan actions,
  // an object with tyope property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
