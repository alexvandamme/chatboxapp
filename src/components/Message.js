import React from 'react';

const Message = ({pseudo, message, isUser}) => {
    if (isUser(pseudo)) {
        return (
            <div>
             <p className='user-message'>
                 <strong></strong>{message}
             </p>
            </div>
        );
    } else {
        return (
            <p className='not-user-message'>
                 <strong>{pseudo}: </strong>{message}
             </p>
        )
        
    }
};

export default Message;