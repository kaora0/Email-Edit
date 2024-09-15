import { useRef, useState } from "react";
import { applyStyle } from "./apply-style";
import { useMutation } from "@tanstack/react-query";
import { EmailService } from "../../services/email-services";

export function useEditor() {
  const [text, setText] = useState(``);

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef(null);

  const emailService = new EmailService();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmails(text),
    onSuccess() {
      setText("");
    },
  });

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };

  const applyFormat = (type) => {
    /* console.log(textRef.current);
    if (!textRef.current) return;

    const cursorStart = textRef.current.selectionStart;
    const cursorEnd = textRef.current.selectionEnd;*/

    // Выделенный текст
    const selectedText = text.substring(selectionStart, selectionEnd);

    if (!selectedText) return;

    // Текст ДО выделенного фрагмента
    const before = text.substring(0, selectionStart);
    // Текст ПОСЛЕ выделенного фрагмента
    const after = text.substring(selectionEnd);

    setText(before + applyStyle(type, selectedText) + after);

    console.log(applyStyle(type, selectedText));
  };
  return {
    text,
    applyFormat,
    updateSelection,
    setText,
    mutate,
    isPending,
    textRef,
  };
}
