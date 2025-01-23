interface ErrorPopoverProps {
  message?: string;
}

export function ErrorPopover({ message }: ErrorPopoverProps) {
  if (!message) return null;

  return (
    <div className="p-6 fixed bottom-4 right-4 z-50 bg-red-600 rounded">
      <p>{message}</p>
    </div>
  );
}

export default ErrorPopover;
