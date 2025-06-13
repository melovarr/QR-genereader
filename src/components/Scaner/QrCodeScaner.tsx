import { Scanner } from "@yudiel/react-qr-scanner";

export const QrCodeScaner = () => {
  const scanHandler = (result: DetectedBarcode[]): void => {
    console.log(result);
  };

  return (
    <div>
      <Scanner
        allowMultiple={true}
        components={{
          zoom: true,
          finder: false,
        }}
        onScan={scanHandler}
        styles={{
          container: { width: 50 },
        }}
      />
    </div>
  );
};
