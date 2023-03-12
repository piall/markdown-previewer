import { marked } from 'marked';
import './Previewer.scss';

type TypePreviewerProps = {
  className?: string;
  id?: string;
  markdownSyntax: string;
};

export function Previewer({
  className,
  id,
  markdownSyntax,
}: TypePreviewerProps) {
  return (
    <div id={id} className={className}>
      <span className="label">Previewer</span>
      <div
        id="previewer"
        dangerouslySetInnerHTML={{ __html: marked(markdownSyntax) }}
      />
    </div>
  );
}
