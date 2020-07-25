import React, { useState, useEffect } from 'react';
import { Image, placeHolder } from '../styles';
import { LazyImageTypes } from '../types';

export const LazyImage = ({
  src,
  alt,
  height,
  width,
  width0,
  width1,
  width2,
  width3,
  width4,
  width5,
  height1,
  height2,
  height5,
  maxWidth,
  borderRadius,
  padding,
}: LazyImageTypes) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  const onLoad = event => {
    event.target.classList.add('loaded');
  };

  const onError = event => {
    event.target.classList.add('has-error');
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          },
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return (
    <Image
      ref={setImageRef as any}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      height={height}
      width={width}
      width0={width0}
      width1={width1}
      width2={width2}
      width3={width3}
      width4={width4}
      width5={width5}
      height1={height1}
      height2={height2}
      height5={height5}
      maxWidth={maxWidth}
      borderRadius={borderRadius}
      padding={padding}
    />
  );
};
