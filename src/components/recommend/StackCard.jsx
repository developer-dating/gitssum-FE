import React, { useState, useEffect } from "react";

const StackCard = ({ data, checkedItems, checkedItemHandler }) => {
  const [isChecked, setIsChecked] = useState(null);

  const onCheck = ({ target }) => {
    checkedItemHandler(target.value, target.checked);
    setIsChecked(target.checked);
  };

  // useEffect(() => {
  //   if (checkedItems.includes(data)) {
  //     setIsChecked(true);
  //   } else {
  //     setIsChecked(false);
  //   }
  // }, [checkedItems]);

  return (
    <li className="font-SUIT">
      <input
        type="checkbox"
        id={data}
        name="stack"
        checked={isChecked || ""}
        value={data}
        // name="stacks"
        // id="stacks"
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
