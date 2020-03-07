import React from 'react';
import './style.scss';

export default function SideNavigation() {
  return (
    <div>
      <div class="navigator">
        <div class="option saved">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="3"
              y="3"
              width="19"
              height="19"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3958 5.44792L19.9479 3.69792C19.6667 3.34375 19.2396 3.125 18.75 3.125H6.25C5.76042 3.125 5.33333 3.34375 5.04167 3.69792L3.60417 5.44792C3.30208 5.80208 3.125 6.27083 3.125 6.77083V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V6.77083C21.875 6.27083 21.6979 5.80208 21.3958 5.44792ZM12.5001 18.2292L6.7709 12.5H10.4167V10.4166H14.5834V12.5H18.2292L12.5001 18.2292ZM5.33338 5.20832L6.17713 4.16665H18.6771L19.6563 5.20832H5.33338Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <rect
                x="-13.542"
                y="-13.5415"
                width="52.0833"
                height="52.0833"
                fill="#000066"
              />
              <mask
                id="mask1"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-14"
                y="-14"
                width="53"
                height="53"
              >
                <rect
                  x="-13.542"
                  y="-13.5415"
                  width="52.0833"
                  height="52.0833"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1)" />
            </g>
          </svg>
          Saved
        </div>
        <div class="option applied">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask4"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="19"
              height="19"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2083 18.2083H4.79167V4.79167H11.5V2.875H4.79167C3.72792 2.875 2.875 3.7375 2.875 4.79167V18.2083C2.875 19.2625 3.72792 20.125 4.79167 20.125H18.2083C19.2625 20.125 20.125 19.2625 20.125 18.2083V11.5H18.2083V18.2083ZM13.4166 2.875V4.79167H16.857L7.43656 14.2121L8.78781 15.5633L18.2082 6.14292V9.58333H20.1249V2.875H13.4166Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask4)">
              <rect
                x="-12.458"
                y="-12.4585"
                width="47.9167"
                height="47.9167"
                fill="#000066"
              />
              <mask
                id="mask5"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-13"
                y="-13"
                width="49"
                height="49"
              >
                <rect
                  x="-12.458"
                  y="-12.4585"
                  width="47.9167"
                  height="47.9167"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask5)" />
            </g>
          </svg>
          Applied
        </div>
        <div class="option network">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask2"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="5"
              width="27"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 11.25H5.625V7.875H3.375V11.25H0V13.5H3.375V16.875H5.625V13.5H9V11.25ZM20.25 12.375C22.1175 12.375 23.6137 10.8675 23.6137 9C23.6137 7.1325 22.1175 5.625 20.25 5.625C19.89 5.625 19.5412 5.68125 19.2262 5.7825C19.8675 6.69375 20.2387 7.79625 20.2387 9C20.2387 10.2038 19.8562 11.295 19.2262 12.2175C19.5412 12.3188 19.89 12.375 20.25 12.375ZM14.625 12.375C16.4925 12.375 17.9888 10.8675 17.9888 9C17.9888 7.1325 16.4925 5.625 14.625 5.625C12.7575 5.625 11.25 7.1325 11.25 9C11.25 10.8675 12.7575 12.375 14.625 12.375ZM22.0725 14.805C23.0063 15.6262 23.625 16.6725 23.625 18V20.25H27V18C27 16.2675 24.3338 15.1987 22.0725 14.805ZM14.625 14.625C12.375 14.625 7.875 15.75 7.875 18V20.25H21.375V18C21.375 15.75 16.875 14.625 14.625 14.625Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask2)">
              <rect
                x="-14.625"
                y="-14.625"
                width="56.25"
                height="56.25"
                fill="#000066"
              />
              <mask
                id="mask3"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-15"
                y="-15"
                width="57"
                height="57"
              >
                <rect
                  x="-14.625"
                  y="-14.625"
                  width="56.25"
                  height="56.25"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask3)" />
            </g>
          </svg>
          My Network
        </div>
        <div class="option mentors">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask6"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="5"
              width="22"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8753 12.9998C19.3703 12.9998 20.5728 11.7865 20.5728 10.2915C20.5728 8.7965 19.3703 7.58317 17.8753 7.58317C16.3803 7.58317 15.167 8.7965 15.167 10.2915C15.167 11.7865 16.3803 12.9998 17.8753 12.9998ZM9.75033 11.9165C11.5487 11.9165 12.9895 10.4648 12.9895 8.6665C12.9895 6.86817 11.5487 5.4165 9.75033 5.4165C7.95199 5.4165 6.50033 6.86817 6.50033 8.6665C6.50033 10.4648 7.95199 11.9165 9.75033 11.9165ZM17.8753 15.1665C15.8928 15.1665 11.917 16.1632 11.917 18.1457V20.5832H23.8337V18.1457C23.8337 16.1632 19.8578 15.1665 17.8753 15.1665ZM9.75033 14.0832C7.22616 14.0832 2.16699 15.3507 2.16699 17.8748V20.5832H9.75033V18.1457C9.75033 17.2248 10.1078 15.6107 12.3178 14.3865C11.3753 14.1915 10.4653 14.0832 9.75033 14.0832Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask6)">
              <rect
                x="-14.083"
                y="-14.0835"
                width="54.1667"
                height="54.1667"
                fill="#000066"
              />
              <mask
                id="mask7"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-15"
                y="-15"
                width="56"
                height="56"
              >
                <rect
                  x="-14.083"
                  y="-14.0835"
                  width="54.1667"
                  height="54.1667"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask7)" />
            </g>
          </svg>
          My Mentors
        </div>
        <div class="option messsage">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask8"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="3"
              width="26"
              height="23"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.42908 25.375L27.792 14.5L2.42908 3.625L2.41699 12.0833L20.542 14.5L2.41699 16.9167L2.42908 25.375Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask8)">
              <rect
                x="-15.708"
                y="-15.7085"
                width="60.4167"
                height="60.4167"
                fill="#000066"
              />
              <mask
                id="mask9"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-16"
                y="-16"
                width="61"
                height="61"
              >
                <rect
                  x="-15.708"
                  y="-15.7085"
                  width="60.4167"
                  height="60.4167"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask9)" />
            </g>
          </svg>
          Message
        </div>
      </div>
    </div>
  );
}
