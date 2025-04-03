class SearchView {
  _parentElement = document.querySelector('.search');

  _clear() {
    this._parentElement.querySelector('.search__field').value = ''; // clear the input field
  }

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clear(); // clear the input field after getting the query
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent the default behavior of the button
      handler(); // call the handler function
    });
  }
}

export default new SearchView();
