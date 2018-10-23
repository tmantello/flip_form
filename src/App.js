import React from "react";
import ReactDOM from "react-dom";

const cardContainer = document.querySelector(".react-card");

// React component for form inputs
class CardInput extends React.Component {
  render() {
    return (
      <fieldset>
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

// React component for textarea
class CardTextarea extends React.Component {
  render() {
    return (
      <fieldset>
        <textarea
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

// React component for form button
class CardBtn extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        type={this.props.type}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
  render() {
    const profileLinks = ["twitter.png", "linkedin.png", "facebook.png"];

    const linksList = profileLinks.map((link, index) => (
      <li key={index}>
        <a href={"http://www." + link.replace(".png", "") + ".com/tmantello"}>
          <img src={require("./image/" + link)} width="50" />
        </a>
      </li>
    ));

    return (
      <div className="card-social-links">
        <ul className="social-links">{linksList}</ul>
      </div>
    );
  }
}

// React component for the front side of the card
class CardFront extends React.Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img src="https://vignette.wikia.nocookie.net/simpsons/images/3/36/Imagem-do-bart-simpson.jpg/revision/latest/scale-to-width-down/384?cb=20110430160803&path-prefix=pt" />
            </div>

            <div className="col-xs-6 side-front-content">
              <h2>Brazil based</h2>

              <h1>UI/UX Designer (SQN)</h1>

              <p>
                Tiago is driven by turning ideas into scalable and and
                empowering experiences that solve real life problems.
              </p>

              <p>
                He is currently the founder of none. Previously, Tiago was a
                product designer at nah!
              </p>

              <p>
                Over the years, Tiago has been priviledged to have worked with
                Adobe, Evernote, Square and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// React component for the back side of the card
class CardBack extends React.Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Formulário de contato!</h1>

          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Digite seu nome"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Informe seu e-mail"
                />
              </div>
            </div>

            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Escreva o que vai no seu coração"
            />
            <br />
            <CardBtn
              className="btn btn-primary"
              type="submit"
              value="Envie sua mensagem"
            />
          </form>
          <CardProfileLinks />
        </div>
      </div>
    );
  }
}

// React component for the card (main component)
class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardFront />

          <CardBack />
        </div>
      </div>
    );
  }
}

// Render Card component
ReactDOM.render(<Card />, cardContainer);
