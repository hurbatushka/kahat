import AnimatedComponent from "@/components/AnimatedComponent";


const About = () => {
  return (
    <div>
      <main className="bg-yellow-100 min-h-screen p-6">
        <AnimatedComponent>
          <section className="container mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-4">О нас</h1>
            <p className="text-center">
              Мы компания с многолетним опытом в индустрии. Наши эксперты всегда
              готовы помочь вам с любыми вопросами.
            </p>
          </section>
        </AnimatedComponent>

        
      </main>
    </div>
  );
};

export default About;
