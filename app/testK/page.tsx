
export default function ContactPage() {
   const data = {
     title: "I love my girlfriend Kiarrah",
     content: [
       {
         id: "Love",
         subtitle: "Where we started",
         paragraphs: [
           "So we have been dating a while and I didnt do administration so shes in charge of book keeping but i feeel its pretty long. And I had exams and stress so I missed our last annaversary so I guess this is one way of saying happy early annaversary",
           "I love you so much kiarrah so imma make this page exclusively ours until they find it which they wont."
         ],
         image: "Together.jpeg",
       },
       {
         id: "Love",
         subtitle: "Okay so I need to put in more thought into this where we started stuff",
         paragraphs: [
           "I Love YOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU MWAAAAAAAAAAAAAAA"      
         ],
         image: "Together.jpeg",
       },
     ]
   };    

  return (
    <main>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            About Us "like actually us"
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            I want you to know that you reallllllllly are the bestest girlfriend in the world
          </h1>
        </div>
      </section>
           
     
    </main>
  );
}