import React from 'react'

const ReposList = props => {
    return (
        <center>
            <ul className="list-group">
                {props.repos.map(repo => (
                    <li key={repo.id} className="list-group-item">{repo.name}</li>
                ))}
            </ul>
        </center>
    )
}

export default ReposList