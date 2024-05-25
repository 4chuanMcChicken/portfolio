import React, { createContext, useState, useMemo } from 'react';

const VisitContext = createContext();

const VisitProvider = ({ children }) => {
  const [visitedPages, setVisitedPages] = useState({
    about: false,
    // 可以根据需要添加其他页面的标志
  });

  const markPageAsVisited = (page) => {
    setVisitedPages((prev) => ({ ...prev, [page]: true }));
  };

  const value = useMemo(() => ({ visitedPages, markPageAsVisited }), [visitedPages]);

  return (
    <VisitContext.Provider value={value}>
      {children}
    </VisitContext.Provider>
  );
};

export { VisitContext, VisitProvider };
