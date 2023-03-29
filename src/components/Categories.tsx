import { FC, useState, SetStateAction, Dispatch, memo } from "react";
const categories = [
  { id: 0, name: "همه" }, //همه Все
  { id: 1, name: "گوشت" }, //گوشت//Мясные
  { id: 2, name: "سبزیجات" }, //سبزیجات Вегетарианская
  { id: 3, name: "گریل" }, //گریل Гриль
  { id: 4, name: "مخلوط" }, //Острые
  { id: 5, name: "آمریکایی" }, //Закрытые
];

type props = {
  setCategory: Dispatch<SetStateAction<number>>;
};

const Categories: FC<props> = memo(({ setCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ActiveHandler = (index: number): void => {
    setActiveIndex(index);
    setCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li
            key={item.id}
            onClick={() => ActiveHandler(item.id)}
            className={activeIndex === item.id ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
