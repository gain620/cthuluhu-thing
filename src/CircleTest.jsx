import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `};
`;

function CircleTest() {
  const colorList = [
    "black",
    "blue",
    "red",
    "green",
    "pink",
    "yellow",
    "orange",
  ];

  const [color, setColor] = useState(colorList[1]);
  useEffect(() => {
    const timerId = setInterval(() => {
      const randColor = Math.floor(Math.random() * 777) % colorList.length;
      setColor(colorList[randColor]);
    }, 500);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <>
      <Circle color={color} huge />
      <h>Color is {color}</h>
    </>
  );
}

export default CircleTest;
