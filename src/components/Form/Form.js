import React from "react";
import { loader, infoContainer, errorText } from "./Form.css";

class Form extends React.Component {
  state = {
    vatNumber: "",
    isFetchingData: false,
    error: false,
  };

  handleValueChange = (e) => {
    if (!this.state.isFetchingData) {
      this.setState({
        vatNumber: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    if (!this.state.isFetchingData) {
      e.preventDefault();
      this.setErrorState(false);
      this.toggleLoader(true);
      fetch(`https://vat.erply.com/numbers?vatNumber=${this.state.vatNumber}`)
        .then((response) => response.json())
        .then((data) => {
          if (
            data.error &&
            data.error === "Service error: vat: vat number is invalid"
          ) {
            this.setErrorState(
              "Requested VAT number is invalid. Make sure that existing country code was used."
            );
            return this.toggleLoader(false);
          }

          this.props.onDataInsert(data);
          this.toggleLoader(false);
          this.resetInputValue();
        })
        .catch((error) => {
          console.log(error.message);
          this.toggleLoader(false);
          this.setErrorState(error.message);
        });
    }
  };

  resetInputValue = () => {
    this.setState({
      vatNumber: "",
    });
  };

  toggleLoader = (isFetching) => {
    this.setState({
      isFetchingData: isFetching,
    });
  };

  setErrorState = (errorState) => {
    this.setState({
      error: errorState,
    });
  };

  render() {
    const { isFetchingData, error } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="ui action input">
          <input
            className="ui action input"
            name="vatNumber"
            value={this.state.vatNumber}
            onChange={this.handleValueChange}
            placeholder="Enter VAT number"
            pattern="^[A-Za-z]{2,4}(?=.{2,12}$)[-_\s0-9]*(?:[a-zA-Z][-_\s0-9]*){0,2}$"
            required="required"
            title="Country code, followed by 2-13 digits."
          />
          <button className="ui icon button" disabled={isFetchingData}>
            <i className="search icon"></i>
          </button>
        </div>
        <div className={infoContainer}>
          {isFetchingData && (
            <div>
              <div className={loader}></div>
              <p>Fetching data...</p>
            </div>
          )}
          {!isFetchingData && error && (
            <p className={errorText}>Error: {error}</p>
          )}
        </div>
      </form>
    );
  }
}

export default Form;
