import './Editor.scss';

type TypeEditorProps = {
  className?: string;
  id?: string;
};

export function Editor({ className, id }: TypeEditorProps) {
  return (
    <div id={id} className={className}>
      <textarea id="editor" />
    </div>
  );
}
