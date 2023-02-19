import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from 'widgets/error-page/ui/error-page';

interface Props {
    children: React.ReactNode,
  };

export const  ErrorBoundarySuspense: React.FC<Props> = ({ children }) => (
        <ErrorBoundary FallbackComponent={ErrorPage}>{children}</ErrorBoundary> 
    )