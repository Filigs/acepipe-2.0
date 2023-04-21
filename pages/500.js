export default function Custom500() {
  return (
    <section className="min-h-screen bg-light dark:bg-darkDarker">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-darkMedium dark:text-primary">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-darkDarker md:text-4xl dark:text-light">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-slate-500 dark:text-slate-400">
            We are already working to solve the problem.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
