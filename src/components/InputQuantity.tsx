import Button from "./Button";

type Props = {
  value: number;
  onChange: (value: number) => void;
  max: number;
  min?: number;
};

const InputQuantity = ({ onChange, value, min = 0, max }: Props) => {
  return (
    <div className="flex justify-between select-none">
      <Button onClick={() => onChange(value - 1)} disabled={value <= min}>
        -
      </Button>
      <input
        max={max}
        min={min}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <Button disabled={value >= max} onClick={() => onChange(value + 1)}>
        +
      </Button>
    </div>
  );
};

export default InputQuantity;
