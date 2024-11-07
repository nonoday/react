import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="main-layout">
      {children}
    </div>
  );
};

export default MainLayout;