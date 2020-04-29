import {
  selectTestimonialState,
  makeSelectTestimonialData,
} from './selectors.ts';

describe('Testimonial Selectors', () => {
  describe('selectTestimonialState', () => {
    test('should select the testimonialReducer state', () => {
      const testimonialState = [];
      const mockedState = {
        testimonialReducer: testimonialState,
      };

      expect(selectTestimonialState(mockedState)).toEqual(testimonialState);
    });
  });

  describe('makeSelectTestimonialData', () => {
    const selector = makeSelectTestimonialData();
    test('should return array of Testimonial data if it exists', () => {
      const data = [{
        content: 'My Content',
        author: 'John Smith',
        source: 'https://example.com',
      }];
      const testimonialState = data;
      const mockedState = {
        testimonialReducer: testimonialState,
      };
      expect(selector(mockedState)).toEqual(data);
    });

    test('should return empty array if Testimonial data does not exist', () => {
      const testimonialState = [];
      const mockedState = {
        testimonialReducer: testimonialState,
      };
      expect(selector(mockedState)).toEqual([]);
    });
  });
});
