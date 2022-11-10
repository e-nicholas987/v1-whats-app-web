interface IProps {
  options: { value: string; label: string }[];
}

const DropDown = ({ options }: IProps) => {
  return null;
  // <section>
  //   <ul className="absolute top-full left-[calc(100%-15px)] py-[9px] bg-[color:var(--dropdown-background)] z-40 rounded-[3px]">
  //     {options.map((option) => (
  //       <li
  //         key={option.value}
  //         className="hover:bg-[color:var(--dropdown-background-hover)]"
  //       >
  //         <button
  //           type="button"
  //           onClick={(e) => {
  //             e.stopPropagation();
  //             dispatch({ type: "MARK_AS_UNREAD", id: chatId });
  //           }}
  //           className="h-10 whitespace-nowrap pr-[58px] text-[color:var(--primary)] pl-6 flex items-center"
  //           key={option.value}
  //         >
  //           {option.label}
  //         </button>
  //       </li>
  //     ))}
  //   </ul>
  // </section>
};

export default DropDown;
