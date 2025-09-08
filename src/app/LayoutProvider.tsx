"use client"
import React, { ReactNode } from 'react'
import QueryClientProvider from './providers/QueryClientProvider'
const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider>{children}</QueryClientProvider>
    )
}
export default LayoutProvider