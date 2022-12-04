import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="cartForm">
        <label htmlFor="cartName">
          Nome da carta
          <input
            type="text"
            name="cartName"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="cartDescription">
          Descrição
          <textarea
            name="cartDescription"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="cartAttribute1">
          Atributo 1
          <input
            type="number"
            name="cartAttribute1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="cartAttribute2">
          Atributo 2
          <input
            type="number"
            name="cartAttribute2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="cartAttribute3">
          Atributo 3
          <input
            type="number"
            name="cartAttribute3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="cartUrlImage">
          URL da imagem
          <input
            type="text"
            name="cartUrlImage"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="cartRarity">
          Raridade
          <select
            name="cartRarity"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="cartTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="cartTrunfo"
            value="trunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
