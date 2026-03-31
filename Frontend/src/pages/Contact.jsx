function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-md w-full space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-xl" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-xl" />
        <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-xl h-32" />
        <button className="w-full bg-black text-white py-3 rounded-xl">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
