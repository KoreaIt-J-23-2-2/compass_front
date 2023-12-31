import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from "./Style"
import FooterLogo from "../../assets/Footer.ver1.png"

function Footer(props) {
    return (
        <div css={S.SLayout}>
            <div>
                <img src={FooterLogo} alt="" css={S.SFooterLogo} />
            </div>
            2조 학습 나침반<br /><br />
            변정민, 정가영, 김채원, 이지우
        </div>
    );
}

export default Footer;