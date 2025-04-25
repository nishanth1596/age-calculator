type InputElementProps = {
  name: string;
  id: string;
};

function InputElement({ name, id }: InputElementProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-Grey text-xs leading-[18px] font-bold tracking-[0.25] uppercase"
      >
        {name}
      </label>
      <input
        type="number"
        className="border-Line text-Black mt-1 block max-w-[87px] rounded-lg border-[1px] px-4 py-3 text-xl leading-[30px] font-bold tracking-[1%]"
      />
    </div>
  );
}

export default InputElement;
