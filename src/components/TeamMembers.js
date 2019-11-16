import React from 'react'

function TeamMembers(props) {
    return (
        <div>
            {props.teamMember.map(mate => (
                <div key={mate.id}>
                    <h2>{mate.name}</h2>
                    <p>{mate.email}</p>
                    <p>{mate.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers