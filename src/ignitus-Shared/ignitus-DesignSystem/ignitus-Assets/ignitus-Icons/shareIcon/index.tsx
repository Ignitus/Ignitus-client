import React, { HTMLAttributes } from 'react';
import { IgnitusBlue } from '../../../ignitus-Atoms/colors';
type Props = HTMLAttributes<SVGElement>;

export const ShareIcon = ({ title = 'Share Icon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="url(#pattern0)" d="M0 0H24V21.221H0z" />
    <defs>
      <pattern
        id="pattern0"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          transform="matrix(.04167 0 0 .04712 0 -.065)"
          xlinkHref="#image0"
        />
      </pattern>
      <image
        id="image0"
        width="24"
        height="24"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAZhJREFUSInV1b9rU2EUxvHP2x8aQf8DcXCp0C0VOjg4OgoOQtWCSJMKrkoLgnayEadShKYpVhxEQRwcRUcHhxQnB10UdBEHpWAbLR4HEwnJhcTcDnrgDs97nvd8X+4997z875Hy7y8tYLapq9QWEC3DcL76pQrpKml/8zlOcR8bz1qOoXyAdDFjsdwucgDOF4i9GYnGLgBmphh9SypkJO+2i7/8yOVJLGGS2CZVcICYIo0QK9SuDwAoH8IizhCB+8Q8ax967ewEtLVd2sEDYguXm6/jJT8vsVbv72BdgFKFNNdti/cMzVF92G/hVox08LLarkFhjOVGRq5ndHRRbGd7Ngf+4zsAaT3DM8qeN5TOGmC0dIyK+nOKQRonvpJW8ZQ4QTpN8SRHX1H/2C+gzxPNHCTdwDlSIh4xfIWVd7sE+AOaIC2RjhHfScv4hgu/83Gb2mIOQCtmTxG3cLg7F/PUbrbUgLOo+hhH8DkjOd0uckzT1R/41MuV8z6IexmLT9pFzhtt4wUTW8Q4NnGHL9d4vZOv7r8UvwB0JV+8IMQVrwAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
