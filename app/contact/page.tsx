import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full bg-[#070f1a] py-12">
      <div className="w-full max-w-2xl px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">CONNECT.EXE</h1>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
