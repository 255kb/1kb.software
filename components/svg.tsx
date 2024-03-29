import { FunctionComponent } from 'react';

const SVG: FunctionComponent<{
  name:
    | 'layout'
    | 'clipboard'
    | 'bulb'
    | 'laptop'
    | 'phone'
    | 'repeat'
    | 'code'
    | 'tick'
    | 'clock'
    | 'map_marker'
    | 'linkedin'
    | 'github';
}> = function (props) {
  return (
    <>
      {props.name === 'layout' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M3 4h17a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm7 6h10a1 1 0 011 1v8a1 1 0 01-1 1H10a1 1 0 01-1-1v-8a1 1 0 011-1z"
              fill="#1a76a6"
            ></path>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="2"
              y="10"
              width="5"
              height="10"
              rx="1"
            ></rect>
          </g>
        </svg>
      )}
      {props.name === 'clipboard' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z"
              fill="#1a76a6"
              opacity=".3"
            ></path>
            <path
              d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z"
              fill="#1a76a6"
            ></path>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="10"
              y="9"
              width="7"
              height="2"
              rx="1"
            ></rect>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="7"
              y="9"
              width="2"
              height="2"
              rx="1"
            ></rect>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="7"
              y="13"
              width="2"
              height="2"
              rx="1"
            ></rect>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="10"
              y="13"
              width="7"
              height="2"
              rx="1"
            ></rect>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="7"
              y="17"
              width="2"
              height="2"
              rx="1"
            ></rect>
            <rect
              fill="#1a76a6"
              opacity=".3"
              x="10"
              y="17"
              width="7"
              height="2"
              rx="1"
            ></rect>
          </g>
        </svg>
      )}
      {props.name === 'bulb' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <circle fill="#1a76a6" opacity=".3" cx="12" cy="9" r="8"></circle>
            <path
              d="M14.53 11H9.462l2.514 6.465L14.53 11zm-3.962 8.362L6.538 9H17.47l-4.096 10.367-1.398-.552-1.408.547zM10 22h4a2 2 0 11-4 0z"
              fill="#1a76a6"
              opacity=".3"
            ></path>
            <path
              d="M9 20a1 1 0 010-2 1 1 0 010-2h6a1 1 0 010 2 1 1 0 010 2 1 1 0 010 2H9a1 1 0 010-2z"
              fill="#1a76a6"
            ></path>
          </g>
        </svg>
      )}
      {props.name === 'laptop' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M6 8v8h12V8H6zm14 8h1.382a1 1 0 01.894.553L22.5 17a.691.691 0 01-.618 1H2.118a.691.691 0 01-.618-1l.224-.447A1 1 0 012.618 16H4V8a2 2 0 012-2h12a2 2 0 012 2v8z"
              fill="#1a76a6"
            ></path>
            <path fill="#1a76a6" opacity=".3" d="M6 8v8h12V8z"></path>
          </g>
        </svg>
      )}
      {props.name === 'phone' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M7.139 4v15h9.722V4H7.14zm.694-3h8.334c1.406 0 2.083.981 2.083 2.5v17c0 1.519-.677 2.5-2.083 2.5H7.833c-1.406 0-2.083-.981-2.083-2.5v-17c0-1.519.677-2.5 2.083-2.5z"
              fill="#1a76a6"
            ></path>
            <path fill="#1a76a6" opacity=".3" d="M7 4v15h10V4z"></path>
            <circle fill="#1a76a6" cx="12" cy="21" r="1"></circle>
          </g>
        </svg>
      )}
      {props.name === 'repeat' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
              fill="#1a76a6"
            ></path>
            <path
              d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
              fill="#1a76a6"
              opacity=".3"
            ></path>
          </g>
        </svg>
      )}
      {props.name === 'code' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
              fill="#1a76a6"
            ></path>
            <rect
              fill="#1a76a6"
              opacity=".3"
              transform="rotate(15 12 12)"
              x="11"
              y="4"
              width="2"
              height="16"
              rx="1"
            ></rect>
          </g>
        </svg>
      )}
      {props.name === 'clock' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M12 21a8 8 0 110-16 8 8 0 010 16z"
              fill="#1a76a6"
              opacity=".3"
            ></path>
            <path
              d="M13 5.062a8.079 8.079 0 00-2 0V4h-1a1 1 0 110-2h4a1 1 0 010 2h-1v1.062zM16.71 6.533l.826-.826a1 1 0 011.414 1.414l-.783.783a8.047 8.047 0 00-1.457-1.371zM11.963 7.5h.074a.5.5 0 01.499.462l.423 5.5a.5.5 0 01-.499.538h-.92a.5.5 0 01-.499-.538l.423-5.5a.5.5 0 01.499-.462z"
              fill="#1a76a6"
            ></path>
          </g>
        </svg>
      )}
      {props.name === 'tick' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M17.738 6.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z"
              fill="#42ba96"
            ></path>
          </g>
        </svg>
      )}
      {props.name === 'map_marker' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M5 10.5C5 6 8 3 12.5 3S20 6.75 20 10.5c0 2.333-2.176 5.536-6.529 9.61a1.5 1.5 0 01-1.994.05C7.16 16.507 5 13.287 5 10.5zm7.5 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              fill="#1a76a6"
            ></path>
          </g>
        </svg>
      )}
      {props.name === 'linkedin' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="22px"
          height="22px"
        >
          <path
            fill="#1a76a6"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          />
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          />
        </svg>
      )}
      {props.name === 'github' && (
        <svg
          fill="#1a76a6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22px"
          height="22px"
        >
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
        </svg>
      )}
    </>
  );
};

export default SVG;
