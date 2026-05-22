export default function Education() {
  return (
    <section className="bg-bg py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-surface border border-stroke rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="relative w-20 h-20 rounded-full p-[2px] accent-gradient shrink-0">
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-2xl text-text-primary">UU</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-primary">Uttaranchal University</h3>
            <p className="text-muted mt-1">B.Tech in Computer Science</p>
            <p className="text-sm text-muted mt-1">2023 – 2027 · Dehradun, India</p>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-muted mb-1.5">
                <span>Progress</span>
                <span>Year 3 / 4</span>
              </div>
              <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                <div className="h-full w-1/2 accent-gradient rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
