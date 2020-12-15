import React  from 'react';

export const ProfileCard = ({profile}) => {
    return (
        <>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
        </>
    )
}