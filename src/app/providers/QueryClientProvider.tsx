'use client';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider as ReactQueryProvider } from '@tanstack/react-query';
// Create a single QueryClient instance
const queryClient = new QueryClient();
interface Props {
  children: ReactNode;
}
const QueryClientProvider: React.FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider client={queryClient}>
      {children}
    </ReactQueryProvider>
  );
};
export default QueryClientProvider;
