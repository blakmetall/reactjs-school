import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const PreviewIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg
                className={className}
                style={style}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path
                            fill={color}
                            d="M431.212,378.94c30.82-41.098,27.558-99.829-9.799-137.186c-8.744-8.743-18.661-15.613-29.246-20.622v-92.345L263.382,0
			H0.168v512h392V410.868c6.203-2.935,12.175-6.512,17.817-10.729l80.518,81.409l21.33-21.096L431.212,378.94z M272.168,51.213
			L340.955,120h-68.787V51.213z M362.168,482h-332V30h212v120h120v62.118c-31.637-4.529-64.959,5.349-89.246,29.636
			c-40.939,40.939-40.939,107.553,0,148.492c24.005,24.005,57.199,34.223,89.246,29.636V482z M400.202,369.033
			c-29.243,29.241-76.824,29.241-106.066,0c-29.242-29.243-29.242-76.824,0-106.066s76.822-29.244,106.066,0
			C429.444,292.209,429.444,339.791,400.202,369.033z"
                        />
                    </g>
                </g>
                <g>
                    <g>
                        <rect x="60.17" y="181" width="212" height="30" fill={color} />
                    </g>
                </g>
                <g>
                    <g>
                        <rect x="60.17" y="241" width="152" height="30" fill={color} />
                    </g>
                </g>
                <g>
                    <g>
                        <rect x="60.17" y="361" width="152" height="30" fill={color} />
                    </g>
                </g>
                <g>
                    <g>
                        <rect x="60.17" y="301" width="152" height="30" fill={color} />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

PreviewIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

PreviewIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default PreviewIcon;
