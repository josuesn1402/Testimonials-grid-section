function TestimonialsCard(props) {
  async function importImage(imagePath) {
    try {
      const image = await import(imagePath);
      console.log(image);
      return image;
    } catch (error) {
      console.error(error);
    }
  }
  
  const image = importImage(props.userAvatar);

  return (
    <>
      <div className='User'>
        {
          <img src={image.default} alt={`Avatar's ${props.userName}`} />
        }
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
