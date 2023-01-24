import React from 'react';
import PropTypes from 'prop-types';

class FormFilter extends React.Component {
  render() {
    const {
      filterCards,
      turnOnOff,
    } = this.props;

    return (
      <div className="filterDiv">
        <label htmlFor="nameFilter" className="input-nameFilter">
          Filtro por nome:
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            disabled={ turnOnOff }
            onChange={ filterCards }
          />
        </label>
        <label htmlFor="rareFilter" className="input-rareFilter">
          Filtro por raridade:
          <select
            name="rareFilter"
            data-testid="rare-filter"
            defaultValue="todas"
            disabled={ turnOnOff }
            onChange={ filterCards }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter" className="checkbox-trunfoFilter">
          Filtro Super Trunfo
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            onChange={ filterCards }
          />
        </label>
      </div>
    );
  }
}

FormFilter.propTypes = {
  filterCards: PropTypes.func.isRequired,
  turnOnOff: PropTypes.bool,
};

FormFilter.defaultProps = {
  turnOnOff: false,
};

export default FormFilter;
