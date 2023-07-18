import React from 'react';
import TestimonialCardStyles from '../scss/layout/TestimonialCard.module.scss';

import imageDaniel from '../assets/image-daniel.png';
import imageJonathan from '../assets/image-jonathan.png';
import imageKira from '../assets/image-kira.png';
import imageJeanette from '../assets/image-jeanette.png';
import imagePatrick from '../assets/image-patrick.png';

const avatars = {
  0: imageDaniel,
  1: imageJonathan,
  2: imageKira,
  3: imageJeanette,
  4: imagePatrick,
};

function TestimonialCard(props) {
  const image = avatars[props.index];

  return (
    <>
      <div className={TestimonialCardStyles.User}>
        <img
          className={TestimonialCardStyles.UserAvatar}
          src={image}
          alt={`Avatar's ${props.userName}`}
        />
        <div className={TestimonialCardStyles.UserInfo}>
          <h4 className={TestimonialCardStyles.UserName}>{props.userName}</h4>
          <span>Verified Graduate</span>
        </div>
      </div>
      <h2 className={TestimonialCardStyles.TestimonialTitle}>{props.title}</h2>
      <p className={TestimonialCardStyles.TestimonialText}>{props.text}</p>
    </>
  );
}

export default TestimonialCard;
