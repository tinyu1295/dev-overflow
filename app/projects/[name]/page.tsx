async function page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return (
    <main>
      <h1>Project Name:{name}</h1>
    </main>
  );
}

export default page;
