import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import loading from '../../assets/Spinning_arrow.gif'

const SLoading = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 780px;
    height: 780px;

    img {
        width: 100px;
        height: 100px;
    }
`;

function Loading(props) {
    return (
        <div css={SLoading}>
            <img src={loading} alt="Loading..." />
        </div>
    );
}

export default Loading;