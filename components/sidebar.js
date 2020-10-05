/**
 *
 * @param {{
 *  active: number;
 *  data: [{
 *      id: number;
 *      name: string;
 *  }];
 *  setActive(id: number): void;
 * }} props
 */
const Sidebar = ({ active, data, setActive }) => {
    return (
        <aside className="flex flex-col space-y-2">
            {data.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`px-3 py-2 text-sm font-medium text-left text-gray-500 transition duration-150 ease-in-out rounded cursor-pointer focus:outline-none ${
                        active === item.id
                            ? 'text-gray-900 bg-gray-200 shadow-inner'
                            : 'hover:text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
                    }`}
                >
                    {item.name}
                </button>
            ))}
        </aside>
    );
};

export default Sidebar;
