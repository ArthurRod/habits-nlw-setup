import './styles/global.css'

import "./lib/dayjs"

import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5l px-6 flex flex-col items-center gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>

  )
}
