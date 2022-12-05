import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    // this.inputSize = this.inputSize.bind(this);
    // this.attributeValidation = this.attributeValidation.bind(this);
    // this.buttonDisabled = this.buttonDisabled.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  onInputChange(event) {
    // console.log(event.target.value)
    const { target: { value, name } } = event;
    // this.setState({ name: value }); // se coloco sem colchetes, o nome da chave passa a ser 'name'
    this.setState({ [name]: value });
  }

  // -----------------------------------------------------------------------------------------------------------------

  // attributeValidation() {
  //   let disableButton = true;
  //   console.log('disabe: ', disableButton)
  //   if (+cardAttr1 <= 90 && +cardAttr2 <= 90 && +cardAttr3 <= 90) {
  //     console.log('disabe: ', disableButton)
  //     disableButton = false;
  //   }

  //   if (disableButton === false) {
  //     if ((+cardAttr1 + +cardAttr2 + +cardAttr3) <= 210) {
  //       disableButton = false
  //     }
  //   }

  //   this.setState( { isSaveButtonDisabled: disableButton } );
  // }

  // inputSize() {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardImage,
  //     cardRare,
  //   } = this.state;
  //   console.log(cardName.length)

  //   if (cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0 && cardRare.length > 0) {
  //     return 'yes';
  //   } return 'no'
  // }

  // buttonDisabled() {
  //   console.log('OLÁAAA BUTTON')
  //   if (this.inputSize() === 'yes') {
  //     console.log(this.inputSize())
  //     this.attributeValidation
  //   } else {
  //     this.setState( { isSaveButtonDisabled: true } );
  //   }
  // }

  // ----------------------------------------------------------------------------------------------------------------

  // hasTrunfo,
  //  onSaveButtonClick,

  render() {
    // console.log(this.state)
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    // console.log(cardName)

    // NÃO ESTÁ LENDO A FUNÇÃO this.buttonDisabled;
    // if (isSaveButtonDisabled === true) {
    //   console.log('OLÁAAA');
    //   this.buttonDisabled;
    // }

    let isSaveButtonDisabled = true;
    const maxAtt = 90;
    const maxTotalAtt = 210;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0) {
      isSaveButtonDisabled = false;
    } else {
      isSaveButtonDisabled = true;
    }

    // console.log('able/disable1: ', isSaveButtonDisabled)

    if (isSaveButtonDisabled === false) {
      if ((+cardAttr1 + +cardAttr2 + +cardAttr3) <= maxTotalAtt) {
        isSaveButtonDisabled = false;
      } else {
        isSaveButtonDisabled = true;
      }
    }

    // console.log('able/disable2: ', isSaveButtonDisabled)

    if (isSaveButtonDisabled === false) {
      if (+cardAttr1 >= 0 && +cardAttr1 <= maxAtt
         && +cardAttr2 >= 0 && +cardAttr2 <= maxAtt
         && +cardAttr3 >= 0 && +cardAttr3 <= maxAtt) {
        isSaveButtonDisabled = false;
      } else {
        isSaveButtonDisabled = true;
      }
    }

    // console.log('able/disable3: ', isSaveButtonDisabled)

    return (
      <div>
        <h1>Tryunfo</h1>
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
        />

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
      </div>
    );
  }
}

export default App;
