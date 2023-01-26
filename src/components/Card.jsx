import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();
    this.isTrunfo = this.isTrunfo.bind(this);
  }

  isTrunfo(cardTrunfo) {
    if (cardTrunfo) {
      return (<p data-testid="trunfo-card" className="superTrunfo">Super Trunfo</p>);
    } return (<p className="superTrunfoNao" />);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="cardPreview">
        <h1 data-testid="name-card" className="nameCard">{ cardName }</h1>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          className="imageCard"
        />
        <div className="previewPUl">
          <p
            data-testid="description-card"
            className="descriptionCard"
          >
            { cardDescription }
          </p>
          <ul className="gradesUl">
            <li data-testid="attr1-card">{ cardAttr1 }</li>
            <li data-testid="attr2-card">{ cardAttr2 }</li>
            <li data-testid="attr3-card">{ cardAttr3 }</li>
          </ul>
          {this.isTrunfo(cardTrunfo)}
        </div>
        <p data-testid="rare-card" className="typeRare">{ cardRare }</p>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
