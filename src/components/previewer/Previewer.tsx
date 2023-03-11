import './Previewer.scss';

type TypePreviewerProps = {
  className?: string;
  id?: string;
};

export function Previewer({ className, id }: TypePreviewerProps) {
  return (
    <div id={id} className={className}>
      <div id="previewer"></div>
    </div>
  );
}
