import { useState, useEffect } from 'react';

function TestimonialsCard(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    /* @vite-ignore */
    import(props.userAvatar).then((img) => {
      setImage(img.default);
    });
  }, []);

  return (
    <>
      <div className='User'>
        <img src={image} alt={`Avatar's ${props.userName}`} />
        <div className='UserInfo'>
          <h4 className='UserName'>{props.userName}</h4>
          <span>Verified Graduate</span>
        </div>
      </div>
      <h2 className='TestimonialTitle'>{props.title}</h2>
      <p className='TestimonialText'>{props.text}</p>
    </>
  );
}

export { TestimonialsCard };
