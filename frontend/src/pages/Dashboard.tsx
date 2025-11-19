import { DollarSign, TrendingDown, TrendingUp, Wallet } from 'lucide-react';

export function Dashboard() {
  // TODO: Obtener datos reales de la API
  const stats = [
    {
      name: 'Ingresos del Mes',
      value: '$4.763.185,00',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      name: 'Egresos del Mes',
      value: '$6.032.748,25',
      change: '+8.2%',
      trend: 'down',
      icon: TrendingDown,
    },
    {
      name: 'Balance',
      value: '-$1.109.452,32',
      change: '-4.3%',
      trend: 'down',
      icon: Wallet,
    },
    {
      name: 'Gastos Fijos',
      value: '$3.017.986,23',
      change: '+2.1%',
      trend: 'down',
      icon: DollarSign,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div
                          className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.trend === 'up'
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder para gráficos */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Ingresos vs Egresos
          </h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Gráfico próximamente
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Gastos por Categoría
          </h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Gráfico próximamente
          </div>
        </div>
      </div>
    </div>
  );
}
