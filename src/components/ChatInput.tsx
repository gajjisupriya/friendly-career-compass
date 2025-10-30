import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-end">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Tell me about your interests, skills, or career goals..."
        disabled={disabled}
        className="min-h-[60px] max-h-[120px] resize-none bg-card border-input focus-visible:ring-primary"
        rows={1}
      />
      <Button
        type="submit"
        disabled={disabled || !input.trim()}
        className="h-[60px] px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};
