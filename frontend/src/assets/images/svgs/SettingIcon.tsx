import * as React from 'react';
const SvgSettingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <g
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#setting_icon_svg__a)"
    >
      <path d="M12.5 15.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" />
      <path d="M20.208 15.625a1.72 1.72 0 0 0 .344 1.896l.063.062a2.083 2.083 0 0 1-1.474 3.56 2.08 2.08 0 0 1-1.474-.612l-.063-.062a1.72 1.72 0 0 0-1.896-.344 1.72 1.72 0 0 0-1.041 1.573v.177a2.083 2.083 0 0 1-4.167 0v-.094a1.72 1.72 0 0 0-1.125-1.573 1.72 1.72 0 0 0-1.896.344l-.062.063a2.084 2.084 0 1 1-2.948-2.948l.062-.063a1.72 1.72 0 0 0 .344-1.896 1.72 1.72 0 0 0-1.573-1.041h-.177a2.083 2.083 0 1 1 0-4.167h.094a1.72 1.72 0 0 0 1.573-1.125 1.72 1.72 0 0 0-.344-1.896l-.063-.062a2.083 2.083 0 1 1 2.948-2.948l.063.062a1.72 1.72 0 0 0 1.896.344h.083a1.72 1.72 0 0 0 1.042-1.573v-.177a2.083 2.083 0 0 1 4.166 0v.094a1.72 1.72 0 0 0 1.042 1.573 1.72 1.72 0 0 0 1.896-.344l.062-.062a2.083 2.083 0 0 1 3.4.676 2.08 2.08 0 0 1-.452 2.271l-.062.063a1.72 1.72 0 0 0-.344 1.896v.083a1.72 1.72 0 0 0 1.573 1.042h.177a2.083 2.083 0 0 1 0 4.166h-.094a1.72 1.72 0 0 0-1.573 1.042" />
    </g>
    <defs>
      <clipPath id="setting_icon_svg__a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSettingIcon;