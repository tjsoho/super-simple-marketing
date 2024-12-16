/******************************************************************************
                            IMPORTS
******************************************************************************/
import React from 'react';

/******************************************************************************
                            INTERFACES
******************************************************************************/
interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    fullScreen?: boolean;
}

/******************************************************************************
                            COMPONENT
******************************************************************************/
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'lg',
    fullScreen = true 
}) => {
/******************************************************************************
 *                               STYLES
******************************************************************************/
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-32 w-32'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
    : 'flex items-center justify-center';

/******************************************************************************
   *                            RENDER
  ******************************************************************************/
    return (
        <div className={containerClasses}>
            <div className={`animate-spin rounded-full border-t-2 border-b-2 border-primary ${sizeClasses[size]}`} />
        </div>
    );
};

export default LoadingSpinner;