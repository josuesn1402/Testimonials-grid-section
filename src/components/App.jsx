import data from '../data/data.json';

import AppStyles from '../scss/layout/App.module.scss';

import {TestimonialsCard} from './TestimonialsCard';

function App() {
  const changeAvatarDirection = () => {
    const avatars = Object.values(data).map(({ avatar }) => avatar);
    return avatars.map(avatar => avatar = avatar.replace("/path/to/", '../../assets/images/image-'));
  }
  const avatars = changeAvatarDirection();
  return (
    <main className={AppStyles.AppContainer}>
      {Object.keys(data).map(key => {
        const testimonial = data[key];
        const position = key.substring((key.length-1), (key.length));
        const image = avatars[position];
        return (
          <article className="TestimonialCard" key={key}>
            <TestimonialsCard
              userName={testimonial.username}
              userAvatar={image}
              title={testimonial.title}
              text={testimonial.text}
            />
          </article>
        );
      })}
    </main>
  )
}

export default App;
