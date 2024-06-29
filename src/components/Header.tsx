import Link from "next/link";

const Header = () => {
  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    // { name: "Блог", href: "/blog" },
  ];

  return (
    <header className="bg-red-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-2xl font-bold text-center">Команда "Кахаць"</div>
        {/* <nav>
          <ul className="flex space-x-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <p className="text-lg cursor-pointer hover:text-red-600 text-nowrap">
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
