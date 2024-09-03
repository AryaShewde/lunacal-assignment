import './App.css';
import Gallery from './components/Gallery';
import Info from './components/Info';

function App() {
  return (
    <div className='h-full xl:h-screen flex gap-36 w-full justify-center items-center bg-[#2e2e2e] p-16'>
      <div className='w-0 hidden xl:block xl:w-1/2'></div>
      <div className='flex flex-col text-white gap-6 w-full justify-center items-center xl:w-1/2'>
        <Info />
        <div className='h-2 w-full rounded-full dash'></div>
        <Gallery />
        <div className='h-2 w-full rounded-full dash'></div>
      </div>
    </div>
  );
}

export default App;
