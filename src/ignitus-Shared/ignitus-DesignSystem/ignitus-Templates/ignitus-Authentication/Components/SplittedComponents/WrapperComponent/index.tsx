import React, { FunctionComponent } from 'react';

export const Wrapper: FunctionComponent<{ children: React.ReactNode }> = (props) => (
  <div className="col-lg-12 container-bg">
    <div className="col-lg-8 container-custom p-5">
      <div className="row shadow border-rad">
        {props.children}
      </div>
    </div>
  </div>
);
