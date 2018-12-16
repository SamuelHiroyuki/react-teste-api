import React, { Component } from 'react'
import { fetchRepos } from '../../services/repos-api'
import ReposList from './ReposList'
import '../../styles/styles.css'

class ReposContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            username: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

  //
  changeHandler(ev) {
    this.setState({ repos: [] })
    this.setState({ username: ev.target.value })
  }

  //
  submitHandler(ev) {
    ev.preventDefault()
    fetchRepos(this.state.username).then(res => this.setState({ repos: res.data }))
  }

  //
  render() {
    return (
        <div className="container">
            <br />
            <h1>Repositório de {this.state.username}</h1>
            <br />
            <form action="#" onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-info text-white" id="basic-addon3">https://api.github.com/users/</span>
                            </div>
                            
                            <input 
                                aria-describedby="basic-addon3" 
                                className="form-control bs-none" 
                                type="text" 
                                placeholder="Nome de usuário - pressione ENTER para procurar" 
                                style={{width: 'auto;'}}
                                onChange={this.changeHandler}
                            />
                            
                            <div className="input-group-append">
                                <span className="input-group-text bg-info text-white">/repos</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <center>
                    <div className="row">
                        <button type="submit" className="btn btn-success bs-none col-12">Procurar</button>
                    </div>
                    <br />
                    <div className="row">
                        <button type="reset" onClick={this.changeHandler} className="btn btn-danger bs-none col-12">Limpar</button>
                    </div>
                </center>
            </form>
            <br />
            <ReposList repos={this.state.repos}></ReposList>
        </div>
    )
  }
}

export default ReposContainer