import { Brain, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    name: 'Análisis Financiero Inteligente',
    description: 'Nuestra IA analiza tus patrones de gasto y te ofrece insights valiosos para mejorar tu salud financiera.',
    icon: Brain,
  },
  {
    name: 'Recomendaciones Personalizadas',
    description: 'Recibe consejos adaptados a tu situación financiera única para alcanzar tus metas económicas más rápido.',
    icon: TrendingUp,
  },
  {
    name: 'Seguridad en la Nube',
    description: 'Tus datos financieros están protegidos con la más avanzada tecnología de encriptación y seguridad en la nube.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Características</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Una mejor manera de gestionar tu dinero
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

