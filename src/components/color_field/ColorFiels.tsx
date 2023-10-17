interface Props {
  color?: string;
}

function ColorField({ color = "#FFFFFF" }: Props) {
  return <input type="color" value={color} />;
}

export default ColorField;
