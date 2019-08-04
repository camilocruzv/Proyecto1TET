import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            tweet: '',
            tweets: [],
            _id: '',
            buscar: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTweet = this.addTweet.bind(this);
    }

    addTweet(e) {
        if (this.state._id) {
            fetch('/api/tweet/' + this.state._id, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Tweet Updated' });
                    this.setState({ usuario: '', tweet: '', _id: '' });
                    this.fetchTweets();
                })
        } else {
            this.state.usuario = '@ccruzvi';
            fetch('/api/tweet', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: 'Tweet Saved' });
                    this.setState({ usuario: '', tweet: '' });
                    this.fetchTweets();
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();
    }

    componentDidMount() {
        this.fetchTweets();
    }

    fetchTweets() {
        fetch('/api/tweet')
            .then(res => res.json())
            .then(data => {
                this.setState({ tweets: data });
                console.log(this.state.tweets);
            });
    }

    deleteTweet(id) {
        if (confirm('¿Estás seguro de querer eliminar el tweet?')) {
            fetch('/api/tweet/' + id, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Tweet Deleted' });
                    this.fetchTweets();
                });
        }
    }

    editTweet(id) {
        fetch('/api/tweet/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    usuario: data.usuario,
                    tweet: data.tweet,
                    _id: data._id
                })
            });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <center><a className="brand-logo" href="/">Twitter</a></center>
                    </div>
                </nav>

                <br />

                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <form>
                                <div className="row">
                                    <div className="input-field col l4 offset-l4">
                                        <input id="buscar" name="buscar" onChange={this.handleChange} type="text" className="materialize-textarea" value={this.state.buscar}></input>
                                        <label htmlFor="buscar">Buscar</label>
                                    </div>
                                    <div className="input-field col l4">
                                        <button className="btn light-blue darken-4" type="submit">Buscar</button>
                                    </div>
                                </div>
                            </form>
                            <br /><br />
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTweet}>
                                        {/**<div className="row">
                                            <div className="input-field col s12">
                                                <input name="usuario" onChange={this.handleChange} type="text" placeholder="Usuario" value={this.state.usuario}></input>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="tweet" onChange={this.handleChange} placeholder="Tweet" className="materialize-textarea" value={this.state.tweet}></textarea>
                                            </div>
                                        </div>
                                        <center><button type="submit" className="btn light-blue darken-4">
                                            Tweetear
                                        </button></center>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <center><h4 className="col s12">Tweets</h4></center>
                        <div className="col s12">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Usuario</th>
                                        <th>Tweet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tweets.map(tweet => {
                                            return (
                                                <tr key={tweet._id}>
                                                    <td>{tweet.usuario}</td>
                                                    <td>{tweet.tweet}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={() => this.editTweet(tweet._id)}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" onClick={() => this.deleteTweet(tweet._id)} style={{ margin: '4px' }}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;