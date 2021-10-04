import React from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';

export default function ArticleImage({ src, caption, ...rest }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <NextImage
          src={src}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkj6+vBwAC4AFuNSmtGAAAAABJRU5ErkJggg=="
          layout="fill"
          objectFit="cover"
          {...rest}
        />
      </ImageWrapper>
      <Caption>{caption}</Caption>
    </Wrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  max-width: 90rem;

  &::before {
    float: left;
    padding-top: 56.25%;
    content: '';
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Caption = styled.small`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.6rem;
`;
