import React from 'react';
import data from '../data/data.json';
import AppStyles from '../scss/layout/App.module.scss';
import TestimonialCard from './TestimonialCard';

function App() {
  return (
    <main className={AppStyles.AppContainer}>
      <div className={AppStyles.TestimonialContainer}>
        {Object.keys(data).map((key, index) => {
          const testimonial = data[key];
          return (
            <article className={AppStyles.TestimonialCard} key={key}>
              <TestimonialCard
                index={index}
                userName={testimonial.username}
                title={testimonial.title}
                text={testimonial.text}
              />
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default App;
