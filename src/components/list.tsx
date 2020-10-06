import type { FunctionComponent } from 'react';

type Props = {
    data: {
        id: number;
        name: string;
    }[];
    title: string;
};

const List: FunctionComponent<Props> = ({ data, title }: Props) => {
    return (
        <div>
            <h2 className="text-base font-bold text-gray-800">{title}</h2>
            <ul className="mt-1 text-gray-600">
                {data.map((item) => (
                    <li key={item.id} className="text-xs">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
