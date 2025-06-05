import React from 'react';

const features = [
  { title: "Fast Messaging", desc: "Real-time chat with no lag." },
  { title: "Group Chats", desc: "Create or join groups easily." },
  { title: "Media Sharing", desc: "Send images, videos and files." },
];

const Features = () => {
  return (
    <section className="py-12 px-6 bg-white grid gap-8 md:grid-cols-3 text-center">
      {features.map((f, i) => (
        <div key={i} className="p-6 shadow-md rounded-lg border">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
