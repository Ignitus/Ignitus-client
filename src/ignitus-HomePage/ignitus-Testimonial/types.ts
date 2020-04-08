export interface Props {
  getTestimonialData: Function;
  testimonialData: Array<{
    author: string;
    description: string;
    authorDesignation: string;
  }>;
}
