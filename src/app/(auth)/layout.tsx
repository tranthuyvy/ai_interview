import React from 'react';

// --------------------------------------------------------

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps): React.JSX.Element {
  return <div>{children}</div>;
}
