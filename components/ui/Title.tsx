import React, { ReactNode } from 'react';

const Title = ({ children, addClass }: { children: ReactNode, addClass?: string }) => {
  return <div className={`${addClass} font-bold`}>{children}</div>
}

export default Title;
