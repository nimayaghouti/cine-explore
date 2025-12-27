export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <nav>Navbar</nav>
      {children}
    </main>
  );
}
