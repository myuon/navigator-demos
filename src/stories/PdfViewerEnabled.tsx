export const PdfViewerEnabled: React.FC = () => {
  return (
    <div>
      <p>PdfViewerEnabled: {navigator.pdfViewerEnabled.toString()}</p>
    </div>
  );
};
