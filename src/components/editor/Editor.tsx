import './Editor.scss';

type TypeEditorProps = {
  className?: string;
};

export function Editor({ className }: TypeEditorProps) {
  return (
    <div id="editor-wrapper" className={className}>
      <textarea id="editor" />
    </div>
  );
}
