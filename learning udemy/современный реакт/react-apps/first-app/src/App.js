import CostItem from './components/CostItem';
function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: 'Mackbook',
      amount: 1254.72,
    },
    {
      date: new Date(2022, 2, 2),
      description: 'Джинсы',
      amount: 50.99,
    },
  ];

  return (
    <div>
      <h1>Начнем изучение React!</h1>
      
    </div>
  );
}

export default App;
