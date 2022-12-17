function TestimonialsCard(props) {
  return (
    <>
      <div className='User'>
        <img src={props.userAvatar} alt={`Avatar's ${props.userName}`} />
        <div className="UserInfo">
          <h4>{props.userName}</h4>
          <span>Verified Graduate</span>
        </div>
      </div>
      <h2 className="TestimonialTitle">{props.title}</h2>
      <p className="TestimonialText">{props.text}</p>
    </>
  )
};

export {TestimonialsCard};
