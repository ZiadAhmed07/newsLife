import React from 'react';
import Select from 'react-select';
import { ColourOption, colourOptions } from '../data';

const CustomClearText = () => <>clear all</>;

const ClearIndicator = (props) => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  );
};

export { ClearIndicator, CustomClearText };
