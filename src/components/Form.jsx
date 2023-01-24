import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.isTrunfo = this.isTrunfo.bind(this);
  }

  isTrunfo(hasTrunfo, cardTrunfo, onInputChange) {
    if (hasTrunfo === false) {
      return (
        <label htmlFor="cardTrunfo" className="checkbox-Trunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo } // no React, o value do checkbox fica no atributo checked e não no próprio value
            onChange={ onInputChange }
          />
        </label>
      );
    } return <p>Você já tem um Super Trunfo em seu baralho</p>;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo, hasTrunfo,
      isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;

    // console.log(isSaveButtonDisabled)
    // console.log('hastrunfoform: ', hasTrunfo);

    return (
      <form className="cardForm">
        <h2>Adicione nova carta</h2>
        <label htmlFor="cardName" className="input-cardName">
          Nome da carta:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription" className="input-cardDescription">
          Descrição:
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1" className="input-cardAttr1">
          Nota geral:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2" className="input-cardAttr2">
          Direção:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3" className="input-cardAttr3">
          Trilha sonora:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage" className="input-cardImage">
          URL da imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare" className="input-cardRare">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        { this.isTrunfo(hasTrunfo, cardTrunfo, onInputChange) }

        <button
          className="saveButton"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
