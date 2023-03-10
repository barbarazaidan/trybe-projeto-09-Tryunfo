import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FormFilter from './components/FormFilter';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteSaveCard = this.deleteSaveCard.bind(this);
    this.validationInput = this.validationInput.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.validationShowCards = this.validationShowCards.bind(this);
    this.cardsBackupFunc = this.cardsBackupFunc.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardsSaved: [],
      cardsFilteredName: [],
      cardsBackup: [],
      isSaveButtonDisabled: true,
      turnOnOff: false,
    };
  }

  onInputChange(event) {
    const { target, target: { name } } = event;
    // this.setState({ name: value }); // se coloco sem colchetes, o nome da chave passa a ser 'name
    const value = target.type === 'checkbox' ? target.checked : target.value; // se eu não usar esta expressão, ele pega o valor do checkbox, mas como on e não true ou false.
    this.setState({ [name]: value }, this.validationInput); // a callback validationInput só vai ser executada quando o setState estiver atualizado!
  }

  onSaveButtonClick() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.state;

    const savedCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // o spred (...) faz com que eu pegue os elementos(objetos) que já estavam no array cardsSaved e os espalhe no novo array que estou criando, depois coloco a vírgula e adiciono o novo elemento(objeto) que quero incluir no array.

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((previousState) => (
      { cardsSaved: [...previousState.cardsSaved, savedCard] }
    ), this.cardsBackupFunc);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  cardsBackupFunc() {
    const { cardsSaved } = this.state;
    this.setState({ cardsBackup: cardsSaved });
  }

  validationInput() {
    let buttonDisabled = true;
    const maxAtt = 90;
    const maxTotalAtt = 210;

    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
    } = this.state;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0) {
      buttonDisabled = false;
    } else {
      buttonDisabled = true;
    }

    if (buttonDisabled === false) {
      if ((+cardAttr1 + +cardAttr2 + +cardAttr3) <= maxTotalAtt
        && (+cardAttr1 >= 0 && +cardAttr1 <= maxAtt
        && +cardAttr2 >= 0 && +cardAttr2 <= maxAtt
        && +cardAttr3 >= 0 && +cardAttr3 <= maxAtt)) {
        buttonDisabled = false;
      } else {
        buttonDisabled = true;
      }
    }

    this.setState({ isSaveButtonDisabled: buttonDisabled });
  }

  deleteSaveCard(card) {
    const { cardsSaved, hasTrunfo } = this.state;
    const cardDelete = cardsSaved.find(({ cardName }) => cardName === card); // pego o card que vou excluir, isto é um objeto
    const { cardTrunfo } = cardDelete;
    this.setState((previousState) => (
      { cardsSaved: previousState.cardsSaved.filter(({ cardName }) => cardName !== card),
        hasTrunfo: cardTrunfo ? false : hasTrunfo, // se cardTrunfo da carta deletada for igual a true, eu mudo o estado hasTrunfo para false, do contrário, permanece o mesmo estado
        cardTrunfo: cardTrunfo ? false : cardTrunfo, // ao setar o cardTrunfo, eu já deixo o checkbox desmarcado
      }
    ), this.cardsBackupFunc);
  }

  filterCards(event) {
    const { cardsBackup } = this.state;
    const { value, type, checked } = event.target;
    // console.log(checked);
    let cardsFiltered;
    let ischecked;

    if (type !== 'select-one' && type !== 'checkbox') {
      cardsFiltered = cardsBackup.filter(
        ({ cardName }) => cardName.toLowerCase().includes(value.toLowerCase()) === true,
      );
    }

    if (type === 'select-one' && value !== 'todas') {
      cardsFiltered = cardsBackup.filter(
        ({ cardRare }) => cardRare === value,
      );
    }

    if (value === 'todas') {
      cardsFiltered = cardsBackup;
    }

    if (type === 'checkbox' && checked === true) {
      cardsFiltered = cardsBackup.filter(
        ({ cardTrunfo }) => cardTrunfo === true,
      );
      ischecked = true;
    }

    if (type === 'checkbox' && checked !== true) {
      cardsFiltered = cardsBackup;
      ischecked = false;
    }

    this.setState(
      { cardsFilteredName: cardsFiltered, turnOnOff: ischecked },
      this.validationShowCards,
    );
  }

  validationShowCards() {
    const { cardsFilteredName, cardsBackup } = this.state;
    console.log('cardsBackup', cardsBackup, 'cardsFilteredName', cardsFilteredName);
    if (cardsFilteredName.length !== cardsBackup.length) {
      this.setState({ cardsSaved: cardsFilteredName });
    } else {
      this.setState({ cardsSaved: cardsBackup });
    }
  }

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      cardsSaved, isSaveButtonDisabled, turnOnOff,
    } = this.state;

    return (
      <div className="paginaInteira">
        <div className="superiorPage">
          <h1 className="tryunfo">Tryunfo</h1>
          <section className="cardMontage">
            <Form
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
            <section className="preview">
              <h2 className="previewTitulo">Pré-visualização</h2>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </section>
          </section>
        </div>
        <section className="filterPart">
          <FormFilter filterCards={ this.filterCards } turnOnOff={ turnOnOff } />
        </section>
        <section className="cardSavedSection">
          <ul className="cardSavedUl">
            {cardsSaved.map((card) => (
              <li key={ card.cardName } className="cardSavedLi">
                <Card { ...card } />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.deleteSaveCard(card.cardName) }
                  className="buttonDelete"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
