import React from 'react';
import { useLayoutContext } from './LayoutProvider';

/**
 * A component that displays the current section information
 * Useful for debugging and displaying contextual information
 */
export const SectionIndicator = ({ showDetails = false }) => {
  const { currentSection, currentSectionKey, pathname } = useLayoutContext();

  if (!currentSection) {
    return null;
  }

  return (
    <div className="section-indicator" style={{ 
      padding: '0.5rem',
      backgroundColor: 'var(--ifm-color-primary-lightest)',
      borderRadius: '4px',
      marginBottom: '1rem',
      fontSize: '0.875rem'
    }}>
      <strong>Current Section:</strong> {currentSection.label}
      {showDetails && (
        <div style={{ marginTop: '0.25rem', opacity: 0.8 }}>
          <div><strong>Key:</strong> {currentSectionKey}</div>
          <div><strong>Path:</strong> {pathname}</div>
          <div><strong>Description:</strong> {currentSection.description}</div>
        </div>
      )}
    </div>
  );
};

export default SectionIndicator;