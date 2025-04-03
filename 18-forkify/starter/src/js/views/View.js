import icons from 'url:../../img/icons.svg'; // Parcel 2\

export default class View {
  _data;
  _clear() {
    this._parentElement.innerHTML = ''; // clear the container
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError(); // render error if no data
    }
    this._data = data; // store the data in the class
    const markup = this._generateMarkup(); // generate the markup
    this._clear();
    // render the recipe
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSpinner() {
    const markup = `
         <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div> 
    `;
    this._parentElement.innerHTML = ''; // clear the container
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
              <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div> `;
    this._clear(); // clear the container
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // render the error message
  }

  renderMessage(message = this._message) {
    const markup = `
              <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div> `;
    this._clear(); // clear the container
    this._parentElement.insertAdjacentHTML('afterbegin', markup); // render the error message
  }
}
