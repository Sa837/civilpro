export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        About Civil Pro
      </h1>
      <div className="prose text-slate-700">
        <p className="mb-4">
          Civil Pro is a comprehensive suite of construction calculation tools
          designed for civil engineers, contractors, and construction
          professionals.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-800">
          Our Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Material quantity estimation</li>
          <li>Unit conversion tools</li>
          <li>Construction calculators</li>
          <li>Professional accuracy</li>
        </ul>
      </div>
    </div>
  );
}
