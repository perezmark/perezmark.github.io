import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const apiUrl = import.meta.env.PUBLIC_CONTACT_API_URL;
      if (!apiUrl) {
        throw new Error("Contact API not configured");
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="h-11 bg-white"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="h-11 bg-white"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="bg-white resize-none"
        />
      </div>

      {status === "success" && (
        <p className="text-sm text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">Failed to send. Please try again or email directly.</p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-11 rounded-md"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
