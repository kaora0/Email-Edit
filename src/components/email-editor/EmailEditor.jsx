import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
import { useEditor } from "./useEditor";
import parse from "html-react-parser";

export function EmailEditor() {
  const {
    text,
    applyFormat,
    updateSelection,
    setText,
    mutate,
    isPending,
    textRef,
  } = useEditor();

  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.preview}>{parse(text)}</div>
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          // onClick={applyFormat}
          onSelect={updateSelection}
          spellCheck="false"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser size={16} onClick={() => setText("")} />
            </button>
            <button>
              <Bold size={16} onClick={() => applyFormat("bold")} />
            </button>
            <button>
              <Italic size={16} onClick={() => applyFormat("italic")} />
            </button>
            <button>
              <Underline size={16} onClick={() => applyFormat("underline")} />
            </button>
          </div>
          <button disabled={isPending} onClick={() => mutate()}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
}
