import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '',
      post: '',
      responseToPost: '',
    };
  }

  componentDidMount() {
    this.callApi()
      .then(({ express: response }) => this.setState({ response }))
      .catch(console.error);
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body;
  };

  handleSubmit = async (e = new Event()) => {
    e.preventDefault();

    const { post } = this.state;

    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });

    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    const { response, post, responseToPost } = this.state;
    return (
      <div>
        <h2>Home</h2>
        <p>{response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Servera:</strong>
          </p>
          <input
            type="text"
            value={post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseToPost}</p>
      </div>
    );
  }
}

export default Home;
