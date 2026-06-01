import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintableLayout = ({ children }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Website-Snapshot',
  });

  return (
    <div>
      <div className="no-print" style={{ padding: '10px', background: '#f0f0f0' }}>
        <button onClick={handlePrint} className="print-btn">
          Print Full Website PDF
        </button>
      </div>
      <div ref={componentRef}>
        {children}
      </div>
    </div>
  );
};

export default PrintableLayout;