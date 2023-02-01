import React, { useState, useEffect } from "react";

const StackCard = ({ data, chekedItems, checkedItemHandler }) => {
  const [isChecked, setIsChecked] = useState(null);

  const onCheck = ({ target }) => {
    checkedItemHandler(target.value, target.checked);
    setIsChecked(target.checked);
  };

  // useEffect(() => {
  //   if (chekedItems.includes(data)) {
  //     setIsChecked(true);
  //   } else {
  //     setIsChecked(false);
  //   }
  // }, [chekedItems]);

  return (
    <li className="font-SUIT">
      <input
        type="checkbox"
        id={data}
        name="stack"
        checked={isChecked}
        value={data}
        className="hidden peer"
        onChange={(e) => onCheck(e)}
      />
      <label
        key={data}
        htmlFor={data}
        className=" bg-[#eee] px-3 py-2 mr-2 rounded-full mt-2 cursor-pointer inline-block peer-checked:bg-[#28CC9E] peer-checked:text-[#fff]"
      >
        <div>{data}</div>
      </label>
    </li>
  );
};

export default StackCard;
