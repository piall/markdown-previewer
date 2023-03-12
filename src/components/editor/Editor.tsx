import { Dispatch, SetStateAction, ChangeEvent } from 'react';

import './Editor.scss';

type TypeEditorProps = {
  className?: string;
  id?: string;
  setMarkdownSyntax: Dispatch<SetStateAction<string>>;
  markdownSyntax: string;
};

export function Editor({
  className,
  id,
  markdownSyntax,
  setMarkdownSyntax,
}: TypeEditorProps) {
  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownSyntax(event.target.value);
  };

  return (
    <div id={id} className={className}>
      <textarea
        id="editor"
        placeholder="Write something..."
        value={markdownSyntax}
        onChange={handleValueChange}
      />
    </div>
  );
}
