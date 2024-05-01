import { Editor } from '@tiptap/react';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { IRichTextEditorLabels } from './labels';
import { createSafeContext } from './createSafeContext';
interface IRichTextEditorContext {
  editor: Editor | null;
  labels: IRichTextEditorLabels;
  isSourceEnabled: boolean;
  toggleSourceView: () => void;
  codeMirrorRef?: React.RefObject<ReactCodeMirrorRef>;
  showMention?: boolean;
  onChange?: (value: string) => void;
}

export const [RichTextEditorProvider, useRichTextEditorContext] =
  createSafeContext<IRichTextEditorContext>(
    'RichTextEditor component was not found in tree',
  );
